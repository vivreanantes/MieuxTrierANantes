/**
 * Carte de l'application, permettant d'afficher les différents points d'intérét
 * 
 * Version Open Street Map Doc : http://leafletjs.com/reference.html
 * 
 * Classe Carte Wrapper Carte Google Lire :
 * https://developers.google.com/maps/documentation/javascript/reference?hl=fr#ControlPosition
 * 
 * @author redebernardi et Christian Renoulin
 */
Ext.define('MieuxTrierANantes.view.geo.MapOSM', {
			extend : 'Ext.Container',
			xtype : 'maposm_xtype',
			requires : ['Ext.util.Geolocation'],
			config : {
				title : 'Carte',
				iconCls : 'locate',
				// TRUE pour activer la geolocalisation a l'init de la carte
				detectLocation : true,
				// Latitude, longitude par défaut a l'init de la carte (avant la
				// geolocalisation eventuelle)
				defaultLocation : [47.21, -1.54], // Latitude, longitude par
				// défaut a l'init de la carte (avant la geolocalisation
				// eventuelle)
				// LIMITE SCROLL CARTE : Agglomeration NANTES / SAINT NAZAIRE
				bounds : {
					min : [47.84, -2.26],
					max : [47.11, -1.13]
				},
				defaultZoom : 14,
				minZoom : 11
			},
			// Les identifiants des couches
			idZoneLimitee : "zoneLimitee",
			idDistrisac : 'modco_distrisac',
			idDecheterie : 'modco_decheterie',
			idReemploi : 'smco_reemp',
			idConteneur : 'modco_conteneur',
			// Texte dans la couche contrôle de la couche 'zoneLimitee'
			labelZone5Kms : "Zone diam 5 km",
			// La longeur de la chaîne "Zone de 5 km"
			tailleChaineZone5Kms : 14,
			// le rayon de la zone limitée (en mètre)
			distanceZone : 2500,
			// distance entre le point de dernier dessin et le nouveau dessin
			distanceAvantRedessiner : 1000,
			// temps maximum pour recalculer la position (60 secondes)
			timeoutLocalisation : 60000,
			mesCouches : [],
			layermapping : [],
			controlLayer : null,

			constructor : function() {
				this.callParent(arguments);
			}
		});