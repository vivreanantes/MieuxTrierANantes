/**
 * Conteneur avec le pied de page
 */
Ext.define('MieuxTrierANantes.view.home.GlobalSearchResult', {
	extend : 'Ext.Container',
	xtype : 'globalSearchResult_xtype',

	config : {
		title : 'Mode de collecte',
		layout : 'vbox',
		scrollable : true,
		styleHtmlContent : true,
		record : null,
		items : [{
					xtype : "homeglobalsearchlist_xtype",
					// height:'300px'
				flex : 1
				}]
	}
		/*
		 * config : { //layout : 'hbox', //scrollable : true, //styleHtmlContent :
		 * true, items : [{ xtype : "homeglobalsearchlist_xtype" }] //, style :
		 * 'background-image:url(resources/images/background.png);background-repeat:repeat-y;background-size:100%;' }
		 */
	});
