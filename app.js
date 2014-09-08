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
    name: 'MieuxTrierANantes',

    requires: [
        'Ext.MessageBox',
        'MieuxTrierANantes.utils.Functions'
    ],

    controllers: [
             'Main',
            'GeoController',
            'InformationsController',
            'StructuresController',
            'GarbagesController',
            'HomeCollectModsController',
            'TrisacsController',
            'CollectModsController'
    ],
    
	models : [
		'HomeCollectModModel',
		'StructureModel'
	],
			
	stores : [
		'HomeCollectModStore', 
		'TrisacStore',
		'StructureStore',
		'StructureGeoStore'
	],

    views: [
         'Main',
			// D�chets
			'garbages.Garbages',
			'garbages.GarbageButtonsPanel',
			'garbages.UsualCategoriesButtonsPanel',
			'garbages.GarbagesContainer',
			'garbages.GarbagesDetails',
			'garbages.GarbagesForm',
			// Carte
        	'geo.MapOSM',
			'geo.Map',
			'geo.Toast',
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
			// Calendar,
			// 'calendar.Calendar',
			/*'calendar.Ext.ux.TouchCalendarView',*/
			// Mode de collecte � domicile
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
			'structures.Structures',
			'structures.StructuresContainer',
			'structures.StructuresDetails',
			'structures.StructuresForm',
			'structures.StructuresList',
			// Trisac
			'trisac.Trisacs',
			'trisac.TrisacContainer',
			'trisac.TrisacDetails',
			'trisac.TrisacForm',
			'trisac.TrisacList'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('MieuxTrierANantes.view.Main'));
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
