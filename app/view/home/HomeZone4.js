/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone4', {
	extend : 'Ext.Container',
	xtype : 'homeZone4_xtype',

	config : {
		layout : 'hbox',
		scrollable : true,
		height:'50px',
		// docked : 'top',
		// style : 'background-image:url(resources/images/background.png);background-repeat:no-repeat;background-size:100% 100%;',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
					id : "homeZone4_1",
					xtype : "button",
					text : 'Quiz<br/>Janvier'
				}, {
					id : "homeZone4_2",
					xtype : "button",
					text : 'Quiz<br/>Hellfest'
				}, {
					id : "homeZone4_3",
					xtype : "button",
					text : 'Docs'
				}, {
					flex : 1
				}]
	}
});
