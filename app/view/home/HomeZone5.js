/**
 * Conteneur avec le pied de page
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone6', {
	extend : 'Ext.Container',
	xtype : 'homeZone6_xtype',
	config : {
		layout : 'hbox',
		scrollable : true,
		height : '50px',
		styleHtmlContent : true,
		items : [{
					html : " "
				}],
		style : 'background-image:url(resources/images/background.png);background-repeat:repeat-y;background-size:100%;'
	}
});
