/**
 * Conteneur avec le pied de page
 */
Ext.define('MieuxTrierANantes.view.home.GlobalSearchResult', {
	extend : 'Ext.Container',
	xtype : 'globalSearchResult_xtype',

	config : {
		title : 'Résultats',
		layout : 'vbox',
		scrollable : true,
		styleHtmlContent : true,
		record : null,
		items : [{
					layout : {
						type : 'hbox',
						align : 'stretch'
					},
					items : [{
								html : "<div align='center' style='font-size:14px;font-weight:bold'>Résultats</div>",
								flex : 1
							}, {
								xtype : 'button',
								iconCls : 'home',
								// ui : 'round', // bouton arrondi
								align : 'right',
								id : 'globalsearchhomebutton',
								disabled : false,
								width : '100px'
							}]
				}, {
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
