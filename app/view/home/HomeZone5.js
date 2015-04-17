/**
 * Conteneur avec le pied de page
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone6', {
	extend : 'Ext.Container',
	xtype : 'homeZone6_xtype',
	config : {
		layout : 'hbox',
		scrollable : true,
		height : '150px',
		styleHtmlContent : true,
		items : [{
					xtype : "homeglobalsearchlist_xtype"
				}],
		style : 'background-image:url(resources/images/background.png);background-repeat:repeat-y;background-size:100%;'
	}
});
