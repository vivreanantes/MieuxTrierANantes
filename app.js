/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
 */

Ext.application({
	name : 'MieuxTrierANantes',

	requires : ['Ext.MessageBox'/*, 'MieuxTrierANantes.utils.Functions'*/],

	controllers : ['GeoController', 'InformationsController',
			'StructuresController', 'GarbagesController',
			'HomeCollectModsController', 'TrisacsController',
			'CollectModsController', 'HomeController'],

	models : ['HomeCollectModModel', 'StructureModel', 'HomeModel', 'SettingsModel', 'DocsModel', 'GlobalSearchModel'],

	stores : ['HomeCollectModStore', 'TrisacStore', 'StructureStore',
			'StructureGeoStore', 'HomeStore', 'DocsStore', 'GlobalSearchStore'],

	views : [
			'Main',
			// Dechets
			'garbages.Garbages',
			'garbages.GarbageButtonsPanel',
			'garbages.UsualCategoriesButtonsPanel',
			'garbages.GarbagesContainer',
			'garbages.GarbagesDetails',
			'garbages.GarbagesForm',
			// Carte
			'geo.MapOSM',
			// 'geo.Map',
			// 'geo.Toast_old',
			// Modes de collecte
			'collectMod.CollectMods',
			'collectMod.CollectModsButtonsPanel',
			'collectMod.CollectModsDetails',
			// Commentaires
			'comments.Comments',
			'comments.CommentsContainer',
			'comments.CommentsForm',
			'comments.CommentsDetails',
			'comments.CommentsModal',
			// News
			'home.Home',
			'home.HomeContainer',
			'home.HomeZone1',
			'home.HomeZone2',
			'home.HomeZone3',
			'home.HomeZone4',
			'home.HomeZone5',
			'home.GlobalSearchResult',
			'home.SettingsForm',
			'home.SettingsView',
			'home.DocsList',
			'home.DocsModal',
			'home.QuizView',
			'home.GlobalSearchList',
			// Calendar,
			// 'calendar.Calendar',
			/*'calendar.Ext.ux.TouchCalendarView',*/
			// Mode de collecte a domicile
			'homecollectmods.HomeCollectMods',
			'homecollectmods.HomeCollectModsContainer',
			'homecollectmods.HomeCollectModsDetails',
			'homecollectmods.HomeCollectModsForm',
			'homecollectmods.HomeCollectModsList',
			// Jeu
			'game.Guess',
			// Informations
			'information.Informations',
			'information.InformationsButtonsPanel',
			// A propos
			'about.Description',
			// Calendrier
			// 'calendar.Calendar',
			// 'calendar.Events',
			'structures.Structures', 'structures.StructuresContainer',
			'structures.StructuresDetails', 'structures.StructuresForm',
			'structures.StructuresList',
			// Trisac
			'trisac.Trisacs', 'trisac.TrisacContainer', 'trisac.TrisacDetails',
			'trisac.TrisacForm', 'trisac.TrisacList'
			],

	icon : {
		'57' : 'resources/icons/Icon.png',
		'72' : 'resources/icons/Icon~ipad.png',
		'114' : 'resources/icons/Icon@2x.png',
		'144' : 'resources/icons/Icon~ipad@2x.png'
	},

	isIconPrecomposed : true,

	startupImage : {
		'320x460' : 'resources/startup/320x460.jpg',
		'640x920' : 'resources/startup/640x920.png',
		'768x1004' : 'resources/startup/768x1004.png',
		'748x1024' : 'resources/startup/748x1024.png',
		'1536x2008' : 'resources/startup/1536x2008.png',
		'1496x2048' : 'resources/startup/1496x2048.png'
	},

	launch : function() {

		// Destroy the #appLoadingIndicator element
		Ext.fly('appLoadingIndicator').destroy();

		// Cordova
		document.addEventListener("deviceready",
				this.onEvenementCordovaDeviceReady, false);
		document.addEventListener("backbutton",
				this.onEvenementCordovaBackButton, false);

		// Initialize the main view
		Ext.Viewport.add(Ext.create('MieuxTrierANantes.view.Main'));
	},

	onEvenementCordovaBackButton : function(e) {
		e.preventDefault();
		// Ext.Msg.confirm("Confirmation", "Voulez-vous fermer l'application ?",
		//		function(btn, text) {
		//			if (btn == 'Yes') {
		//				// Ceci ne fonctionne pas.
		//				navigator.app.exitApp();
		//				app.exitApp();
		//			}
		//		});
	},

	onEvenementCordovaDeviceReady : function() {
		// alert('onDeviceReady');
		// onSuccess Callback
		// This method accepts a Position object, which contains the
		// current GPS coordinates
		//
		var geolocationSuccess = function(position) {

			var msg = 'Latitude: ' + position.coords.latitude + '\n'
					+ 'Longitude: ' + position.coords.longitude + '\n'
					+ 'Altitude: ' + position.coords.altitude + '\n'
					+ 'Accuracy: ' + position.coords.accuracy + '\n'
					+ 'Altitude Accuracy: ' + position.coords.altitudeAccuracy
					+ '\n' + 'Heading: ' + position.coords.heading + '\n'
					+ 'Speed: ' + position.coords.speed + '\n' + 'Timestamp: '
					+ position.timestamp + '\n';
			// Ext.Msg.alert("Geolocalisation CORDOVA", msg);

		};

		navigator.geolocation.getCurrentPosition(geolocationSuccess);
	},

	onUpdated : function() {
		/* 20150203 Ext.Msg
				.confirm(
						"Application Update",
						"This application has just successfully been updated to the latest version. Reload now?",
						function(buttonId) {
							if (buttonId === 'yes') {
								window.location.reload();
							}
						});
		*/
	}
});

/* Pour les news */
Ext.Loader.setConfig({ disableCaching: false });
