/**
 * Controlleur pour les vues et la carte
 */

Ext.define('MieuxTrierANantes.controller.GeoController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',
	config : {
		refs : {
			mapOSM : 'maposm_xtype'
			/*
			 * maposm_xtype : { selector : 'maposm_xtype', xtype :
			 * 'maposm_xtype', autoCreate : true }
			 */
		},
		control : {
			mapOSM : {
				activate : 'onMapActivate',
				show : 'onShowMapOSM'
			}
		}
	},

	/**
	 * Action réalisée lorsqu'on active le panel Carte
	 */
	onMapActivate : function(container, newc) {

		this.mapOsm = this.getMapOSM();
		this.initialiseCarte();

		if (!Ext.isDefined(this.structureGeoStore)) {
			this.loadStructures();
		};

	},

	/**
	 * Recharge la totalité des données markers, cercles) des couches GeoJson
	 */
	loadStructures : function() {

		// Effacte les données des couches
		for (var layerid in this.mapOsm.layermapping) {
			this.mapOsm.mesCouches[layerid].clearLayers();
		}

		// Ajoute un cercle pour this.mapOsm.idZoneLimitee
		this.ajouteCerclesZoneLimitee();

		// Charge le store
		this.structureGeoStore = Ext.create(
				'MieuxTrierANantes.store.StructureGeoStore', {
					autoLoad : false
				});

		// Pour chaque élément du store, ajout d'un point sur la carte
		var geoController = this;
		this.structureGeoStore.load(function(records, operation, success) {
					records.forEach(function(record, index, array) {
								geoController.addStructure(record);
							});
				}, this);

	},

	/**
	 * Inialise la carte (invoqué une seule fois) : crée geoJson la couche
	 * "contrôle"
	 */
	initialiseCarte : function() {

		// console.debug('LEAFLET : initialiseCarte');

		// INFOS LAYERS
		this.mapOsm.layermapping[this.mapOsm.idZoneLimitee] = {
			name : this.mapOsm.idZoneLimitee,
			label : this.mapOsm.labelZone5Kms
					+ ' <img style="width:10%" src="resources/icons/icon-green.png">'
		};
		this.mapOsm.layermapping[this.mapOsm.idReemploi] = {
			name : 'Récup',
			iconurl : 'resources/icons/marker-icon-green.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-green.png"> Réemploi'
		};
		this.mapOsm.layermapping[this.mapOsm.idDistrisac] = {
			name : 'Distrisac',
			iconurl : 'resources/icons/marker-icon-red.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-red.png"> Trisac'
		};

		this.mapOsm.layermapping[this.mapOsm.idDecheterie] = {
			name : 'Déchèterie / Ecopoint',
			iconurl : 'resources/icons/marker-icon-pink.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-pink.png"> Déchèterie / Ecopoint'
		};
		this.mapOsm.layermapping[this.mapOsm.idConteneur] = {
			name : 'Conteneur',
			iconurl : 'resources/icons/marker-icon-brown.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-brown.png"> Conteneur'
		};

		this.mapOsm.posLatitudeInit = this.mapOsm.config.defaultLocation[0];
		this.mapOsm.longitudeInit = this.mapOsm.config.defaultLocation[1];

		var geoController = this;

		// Création des couches "GeoJson"
		for (var layerid in this.mapOsm.layermapping) {
			this.mapOsm.mesCouches[layerid] = L.geoJson([], {
				// PointToLayer
				pointToLayer : function(feature, latlng) {
					if (geoController.mapOsm.layermapping[feature.properties.type] != 'undefined') {
						iconUrl = geoController.mapOsm.layermapping[feature.properties.type].iconurl;
					}
					myIcon = L.icon({
								iconUrl : iconUrl
							});
					finalMarker = L.marker(latlng, {
								icon : myIcon
							});
					return finalMarker;
				},
				onEachFeature : this.onEachFeature
			});

		}

		// Création de la couche "contrôle"
		// TODO collapsed
		baseLayers = {};
		overlays = {};
		this.mapOsm.controlLayer = L.control.layers(baseLayers, overlays, {
            collapsed: true
        });

	},
	/**
	 * Ajout d'un point sur la carte, correspondant à une structure
	 */
	addStructure : function(record) {

		var afficheStructure = true;

		// VERIFICATION que toutes les données nécessaires sont présentes
		if (record.get('modesCollecte') == null
				|| record.get('latitude') == null
				|| record.get('longitude') == null) {
			console
					.log('LEAFLET : Paramètres manquants pour ajouter la structure à la carte - '
							+ record.get('type')
							+ " - "
							+ record.get('libelle'));
			afficheStructure = false;
		}

		// VERIFICATION que l'on est dans la zône
		if (afficheStructure == true && this.mapOsm.zoneLimiteeActif == true) {
			var latLngCentre = L.latLng(this.mapOsm.posLatitudeInit,
					this.mapOsm.longitudeInit);
			var latLngStructure = L.latLng(record.get("latitude"), record
							.get("longitude"));
			var distanceEnMetre = latLngStructure.distanceTo(latLngCentre);
			if (distanceEnMetre > this.mapOsm.distanceZone) {
				// console.debug("LEAFTMAP : hors zone");
				afficheStructure = false;
			}
		}

		if (afficheStructure == true) {
			modesCollecte = record.get('modesCollecte');

			// Pour simplifier on convertit les modes de collecte
			// (",modco_contembjournmag..."), idem pour écopoints en
			// déchèterie
			if (modesCollecte.substring(0, 10) == ',modco_con') {
				modesCollecte = this.mapOsm.idConteneur;
			}
			if (modesCollecte == 'modco_ecopoint') {
				modesCollecte = this.mapOsm.idDecheterie;
			}

			// FILTER STRUCTURES
			if (modesCollecte != this.mapOsm.idDistrisac
					&& modesCollecte != this.mapOsm.idDecheterie
					&& modesCollecte != this.mapOsm.idReemploi
					&& modesCollecte != this.mapOsm.idConteneur) {
				afficheStructure = false;
			}

			layerId = modesCollecte;
			latitude = record.get('latitude');
			longitude = record.get('longitude');

			popuptext = '';

			if (record.get('type') != null && record.get('type') != '') {
				popuptext = popuptext + '<b>' + record.get('type')
						+ '</b><br/>';
				// popuptext = popuptext + '<a href="#" onclick="Javascript:Ext.Msg.alert(\"Error\",\"gg\");">rr</a>';
			}
			if (record.get('libelle') != null && record.get('libelle') != '') {
				popuptext = popuptext + record.get('libelle') + '<br/>';
			}

			if (record.get('adresseTemp') != null) {
				popuptext = popuptext + record.get('adresseTemp');
			}

			newcoord = [longitude, latitude];

			geojsonFeature = {
				"type" : "Feature",
				"properties" : {
					type : layerId,
					popupContent : popuptext
				},
				"geometry" : {
					"type" : "Point",
					"coordinates" : newcoord
				}
			};

			if (typeof this.mapOsm.mesCouches[layerId] == 'undefined') {
				afficheStructure = false;
			}

		}

		if (afficheStructure == true) {
			// console.debug('ADD POINT (' + latitude + ',' + longitude + ')');
			this.mapOsm.mesCouches[layerId].addData(geojsonFeature);
		}

	},

	/**
	 * Méthode invoquée lors de l'évènement fin déplacement de zône.
	 */
	onEvenementLeafmapMoveEnd : function(e) {
		// Si je me suis déplacé de 500 mètres, je redessinne la carte
		if (this.pointEstDansZoneLimitee(e.target.getCenter().lat, e.target
						.getCenter().lng, this.mapOsm.distanceAvantRedessiner) == false) {
			this.mapOsm.posLatitudeInit = e.target.getCenter().lat;
			this.mapOsm.longitudeInit = e.target.getCenter().lng;
			this.loadStructures();
		}
	},

	/**
	 * Vérifie si les coordonnées en paramètre correspondent à un point de la
	 * zône limitée.<br/> Invoque estDansZoneLimitee .
	 */
	pointEstDansZoneLimitee : function(latitude, longitude, distance) {
		var latlng = L.latLng(latitude, longitude);
		var resultat = this.estDansZoneLimitee(latlng, distance);
		return resultat
	},

	/**
	 * Vérifie si le point en paramètre correspond à un point de la zône
	 * limitée.
	 */
	estDansZoneLimitee : function(point, distance) {
		var latlng = L.latLng(this.mapOsm.posLatitudeInit,
				this.mapOsm.longitudeInit);
		var distanceEnMetre = latlng.distanceTo(point);
		var resultat = distanceEnMetre < distance;
		return resultat;
	},

	/**
	 * On sélectionne une option du menu de contrôle
	 */
	onEventOverlayadd : function(layersControlEvent) {
		if (layersControlEvent.name.substring(0,
				this.mapOsm.tailleChaineZone5Kms) == this.mapOsm.labelZone5Kms) {
			this.mapOsm.zoneLimiteeActif = true;
			this.loadStructures();
		}
	},

	/**
	 * On déselectionne une option du menu de contrôle
	 */
	onEventOverlayremove : function(layersControlEvent) {
		if (layersControlEvent.name.substring(0,
				this.mapOsm.tailleChaineZone5Kms) == this.mapOsm.labelZone5Kms) {
			this.mapOsm.zoneLimiteeActif = false;
			this.loadStructures();
		}
	},

	/**
	 * 
	 */
	onShowMapOSM : function() {

		// console.debug('LEAFLET : EXT onShowMapOSM');

		if (!Ext.isDefined(this.lmap)) {

			// INIT MAX BOUNDS (Nantes et agglo)
			maxbounds = new L.LatLngBounds(this.mapOsm.config.bounds.min,
					this.mapOsm.config.bounds.max);

			// Base Tile Layer
			osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			osmAttrib = '© Openstreetmap';
			osmLayer = new L.TileLayer(osmUrl, {
						attribution : osmAttrib,
						unloadInvisibleTiles : true,
						reuseTiles : true
					});

			// console.debug('LEAFLET : MAP CREATE DEFAULT LOCATION LAT : ' +
			// this.mapOsm.config.defaultLocation[0] + ', LONG :' +
			// this.mapOsm.config.defaultLocation[1]);

			this.lmap = new L.Map(this.mapOsm.getId(), {
						layers : [osmLayer],
						maxBounds : maxbounds,
						center : [this.mapOsm.config.defaultLocation[0],
								this.mapOsm.config.defaultLocation[1]],
						zoom : this.mapOsm.config.defaultZoom,
						minZoom : this.mapOsm.config.minZoom
					});

			// Evenement fin déplacement de zône
			this.lmap.on('moveend', this.onEvenementLeafmapMoveEnd, this);

			// Ajout des cercles sur zône limitée
			this.ajouteCerclesZoneLimitee();

			// Ajoute les couches GeoJson
			for (var layerid in this.mapOsm.mesCouches) {

				// Ajoute la couche "GeoJson" à la carte
				this.mapOsm.mesCouches[layerid].addTo(this.lmap);
				// Ajoute la couche "GeoJson" à la couche "contrôle"
				layerName = this.mapOsm.layermapping[layerid].label;
				this.mapOsm.controlLayer.addOverlay(
						this.mapOsm.mesCouches[layerid], layerName);

			}
			// Ajoute la couche "contrôle" à la carte
			this.mapOsm.controlLayer.addTo(this.lmap);
			// Ajoute la couche "fond" à la carte
			var geoJson = L.geoJson([]);
			geoJson.addTo(this.lmap);

			// Evenements : sélection/déselection dans la zône de contrôle
			this.lmap.on('overlayadd', this.onEventOverlayadd, this);
			this.lmap.on('overlayremove', this.onEventOverlayremove, this);
			// Par défaut la zone est limitée
			this.mapOsm.zoneLimiteeActif = true;

			// GEOLOCALISATION ACTIVE ?
			if (this.mapOsm.config.detectLocation) {
				// console.debug('LEAFLET : Recherche position GPS...');
				var geoLocation = Ext.create('Ext.util.Geolocation', {
							autoUpdate : false,
							timeout : this.mapOsm.timeoutLocalisation
						});
				geoLocation.updateLocation(this.onLocationUpdate, this);

			}

		}

	},

	/**
	 * Mettre une image de fond
	 */
	ajouteImageDeFond : function() {
		var imageUrl = 'resources/images/capture_fond_nantes.png';
		var imageBounds = [[47.10, -1.30], [47.37, -1.86]];
		var image = L.imageOverlay(imageUrl, imageBounds);
		image.addTo(this.mapOsm.mesCouches[this.mapOsm.idZoneLimitee]);
	},

	/**
	 * Mettre 2 cercles (un petit et un grand) pour zôneLimitee
	 */
	ajouteCerclesZoneLimitee : function() {
		var latitude = this.mapOsm.posLatitudeInit - 0.002;
		var circle = L.circle([latitude, this.mapOsm.longitudeInit],
				this.mapOsm.distanceZone, {
					color : 'green',
					fillColor : '#c2e47e',
					fillOpacity : 0.15
				});
		circle.addTo(this.mapOsm.mesCouches[this.mapOsm.idZoneLimitee]);
		var circle2 = new L.CircleMarker([latitude, this.mapOsm.longitudeInit],
				{
					rayon : 5,
					color : 'darkgreen',
					fillColor : "green",
					fillOpacity : 0.8
				});
		circle2.addTo(this.mapOsm.mesCouches[this.mapOsm.idZoneLimitee]);
	},

	/**
	 * Methode invoquée lors de l'évènement mise-à-jour de la géolocalisation
	 */
	onLocationUpdate : function(geoLocation) {

		if (geoLocation !== null) {
			this.mapOsm.posLatitudeInit = geoLocation.getLatitude();
			this.mapOsm.longitudeInit = geoLocation.getLongitude();

			// console.debug('LEAFLET : GEOLOCALISATION LAT : ' +
			this.resetCenter(geoLocation.getLatitude(), geoLocation
							.getLongitude());
		} else {
			// console.debug('LEAFLET : Géolocalisation en dehors de la zône
			// prévue');
		}

	},

	/**
	 * Met-à-jour le centre de la carte (appelé lorsque l'on détecte un
	 * changement de géo-localisation)
	 */
	resetCenter : function(latitude, longitude) {
		// console.debug('LEAFLET : resetCenter LAT : ' + latitude + ', LONG : '
		// + longitude);
		var latlng = L.latLng(latitude, longitude);
		this.lmap.setView(latlng);
	},

	/**
	 * Associe les couches avec un menu contextuel
	 */
	onEachFeature : function(feature, layer) {

		// does map feature have a property named popupContent?
		if (feature.properties && feature.properties.popupContent) {
			layer.bindPopup(feature.properties.popupContent);
		}
	}

});
