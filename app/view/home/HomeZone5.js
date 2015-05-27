/**
 * Conteneur avec le pied de page
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone5', {
	extend : 'Ext.Container',
	xtype : 'homeZone5_xtype',
	config : {
		layout : 'hbox',
		scrollable : true,
		 height: 100,
		tpl : "ooo",
		styleHtmlContent : true,
		items : [
					{
		html : "<img src='resources/images/bandeau.png' width='300px'>"}],
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
	}
});