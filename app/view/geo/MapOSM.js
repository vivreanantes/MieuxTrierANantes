/**
 * Carte de l'application, permettant d'afficher les différents points d'intérét
 * Version Open Street Map
 * 
 * @author redebernardi
 */
Ext.define('MieuxTrierANantes.view.geo.MapOSM', {
	extend: 'Ext.Container',
	xtype : 'vanmaposm',
	requires : ['Ext.util.Geolocation'],
	config : {
		title : 'Carte',
		iconCls : 'locate',
		detectLocation : true, // TRUE pour activer la geolocalisation a l'init de la carte
		defaultLocation : [47.14, -1.60], // Latitude, longitude par défaut a l'init de la carte (avant la geolocalisation eventuelle)
		bounds : {min : [47.14, -1.65], max : [47.29, -1.43]}, //LIMITE SCROLL CARTE : Agglomeration NANTES / SAINT NAZAIRE
		defaultZoom : 14,
		minZoom : 11
	},

	/* PRIVATE */
	overlayLayers : [],
	layermapping : [],
	controlLayer : null,
	
	constructor: function() {
		
        this.callParent(arguments);
    },
	
	init : function() {
		
		console.debug('LEAFLET : init');
		
		
		// INFOS LAYERS
		this.layermapping['modco_reemploi'] = {
			name : 'Récup',
			iconurl : 'resources/icons/marker-icon-green.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-green.png"> Réemploi'
		};
		this.layermapping['modco_distrisac'] = {
			name : 'Distrisac',
			iconurl : 'resources/icons/marker-icon-red.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-red.png"> Trisac'
		};
		/*
		this.layermapping['modco_ecotox'] = {
			name : 'Ecotox',
			iconurl : 'resources/icons/marker-icon-pink.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-pink.png"> Ecotox'
		};
		/*this.layermapping['modco_encombrants'] = {
			name : 'Encombrants',
			iconurl : 'resources/icons/marker-icon-blue.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-blue.png"> Encombrants'
		};*/
		this.layermapping['modco_conteneur'] = {
			name : 'Conteneur',
			iconurl : 'resources/icons/marker-icon-brown.png',
			label : '<img style="width:10%" src="resources/icons/marker-icon-brown.png"> Conteneur'
		};	
		
		
		myobj = this;
		
		// DEFINITION des layers GEOJSON
		for (var layerid in this.layermapping) {
		
			this.overlayLayers[layerid] = L.geoJson([], {
	
						// PointToLayer
						pointToLayer : function(feature, latlng) {					
							
							if (myobj.layermapping[feature.properties.type] != 'undefined') {
								iconUrl = myobj.layermapping[feature.properties.type].iconurl;
							}
							myIcon = L.icon({
										iconUrl : iconUrl
									});
							finalMarker = L.marker(latlng, {
										icon : myIcon
									});
	
							return finalMarker;
	
						},
	
						// onEachFeature
						onEachFeature : myobj.onEachFeature
	
			});
		
		}
		
		//DEFINITION CONTROL LAYER
		overlays = {};
		this.controlLayer = L.control.layers(null, overlays, {
							collapsed : false
						});
		
		
		//IMPORTANT : Creation MAP (Utilsiation HTML DOM) uniquement sur event EXT painted
		this.on('painted', this.onPainted, this);
		
	},
	
	onPainted : function () {
				
		console.debug('LEAFLET : EXT onPainted');
		
		if (!Ext.isDefined(this.mapobj)) {
			
			// INIT MAX BOUNDS (Nantes et agglo)
			maxbounds = new L.LatLngBounds(this.config.bounds.min, this.config.bounds.max);
			
			// Base Tile Layer
			osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
			osmAttrib = '© Openstreetmap';
			osmLayer = new L.TileLayer(osmUrl, {
						attribution : osmAttrib,
						unloadInvisibleTiles : true,
						reuseTiles : true
					});	
					
			console.debug('LEAFLET : MAP CREATE DEFAULT LOCATION LAT : '+this.config.defaultLocation[0]+', LONG :'+ this.config.defaultLocation[1]);		
					
			this.mapobj = new L.Map(this.getId(),{
				layers : [osmLayer], 
				maxBounds : maxbounds ,
				center : [this.config.defaultLocation[0] , this.config.defaultLocation[1]] , 
				zoom : this.config.defaultZoom,
				minZoom : this.config.minZoom
			});
			
			//AJOUT DES LAYERS GEOJSON
			for (var layerid in this.overlayLayers) {
			
				//ADD LAYER GEOJSON to MAP
				this.overlayLayers[layerid].addTo(this.mapobj);	
			
				layerName = this.layermapping[layerid].label;
				this.controlLayer.addOverlay(this.overlayLayers[layerid], layerName);
			
			}
			
			//ADD CONTROL LAYER to MAP
			this.controlLayer.addTo(this.mapobj);
			
			
			// GEOLOCALISATION ACTIVE ?
			if (this.config.detectLocation) {
				
				console.log('LEAFLET : Recherche position GPS...');	
						
			    var geolocate = Ext.create('Ext.util.Geolocation', { autoUpdate: false, timeout : 60000});	
			    geolocate.updateLocation(this.locationupdate,this);            
				
			}
			
	   }
		
		
	},
	
	
	locationupdate : function(geo) {
		
		if (geo !== null) {	
			
			console.debug('LEAFLET : GPS LOCALISATION LAT : '+geo.getLatitude()+', LONG : '+geo.getLongitude());
			this.resetCenter(geo);
		}
		else {
			
			console.error('GPS LOCALISATION : Erreur');
		}
		
	}, 
	
	//TODO : Traitement objet geo en dehors des bounds de la carte...
	resetCenter : function(geo) {	
		
       console.debug('LEAFLET : resetCenter LAT : '+geo.getLatitude()+', LONG : '+geo.getLongitude());
       var latlng = L.latLng(geo.getLatitude(), geo.getLongitude());
       this.mapobj.setView(latlng);

    },

	/*
	 * Ajout d'un point sur la carte @param record Structure Ext.data.model
	 * 
	 * 
	 */
	addStructure : function(record) {
	
		
		// On découpe modesCollecte, puis on traduit
		// var modesCollecteTraduit = "";
		// if (record.get('modesCollecte')!=null) {
		// 	var arModesCollecte = record.get('modesCollecte').split(",");
		// 	for (var i = 0; i < arModesCollecte.length; i++) {
		// 		var unModeCollecte = arModesCollecte[i];
		// 		if (i>0) {
		// 			modesCollecteTraduit = modesCollecteTraduit + ", ";
		// 		}
		// 		modesCollecteTraduit = modesCollecteTraduit + _translate("label_"	+ unModeCollecte, "fr");
		// 	}
		// }		
		
		// VERIFICATION que toutes les données nécessaires sont présentes
		if (record.get('modesCollecte') != null
				&& record.get('latitude') != null
				&& record.get('longitude') != null) {

			modesCollecte = record.get('modesCollecte');		
			
			var modesCollecteKey = modesCollecte.substring(0,10);
			
			// CONVERSION NOM DU LAYER (pas d'utilisation regexp trop consommateur)
			if (modesCollecteKey == 'smco_reemp') modesCollecte = 'modco_reemploi';
			else if (modesCollecteKey == ',modco_con') modesCollecte = 'modco_conteneur';
			
			// FILTER STRUCTURES
			if (modesCollecte != 'modco_distrisac'
					&& modesCollecte != 'modco_ecotox'
					&& modesCollecte != 'modco_encombrants'
					&& modesCollecte != 'modco_reemploi'
					&& modesCollecte != 'modco_conteneur') {
				return;
			}

			layerId = modesCollecte;
			latitude = record.get('latitude');
			longitude = record.get('longitude');

			popuptext = '';
			// if (modesCollecteTraduit != null) {
			//	popuptext = popuptext + modesCollecteTraduit + '<br/>';
			// }
			if (record.get('type') != null && record.get('type')!='') {
				popuptext = popuptext + '<b>' + record.get('type') + '</b><br/>';
			}
			if (record.get('libelle') != null && record.get('libelle')!='') {
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
			
			if (typeof this.overlayLayers[layerId] != 'undefined') {
				
				//console.debug('ADD POINT ('+ latitude + ',' + longitude +') '+ popuptext);
				this.overlayLayers[layerId].addData(geojsonFeature);
				
			}
			

		} else {

			console.log('Paramètres manquants pour ajouter la structure à la carte');

		}

	
		
	},


	onEachFeature : function(feature, layer) {

		// does this feature have a property named popupContent?
		if (feature.properties && feature.properties.popupContent) {
			layer.bindPopup(feature.properties.popupContent);
		}
	}

});