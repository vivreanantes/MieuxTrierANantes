/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeContainer', {
	extend : 'Ext.Container',
	xtype : 'homeContainer_xtype',

	config : {
		layout : 'hbox',
		scrollable : true,
		style : 'background-color:white',
		items : [
				//
				{
			flex : 1,
			html : ''
		},
				//
				{
					xtype : 'container',
					minWidth : '230px',
					maxWidth : '600px',
					width : '70%',
					layout : 'vbox',
					items : [{
								xtype : 'homeZone1_xtype'
							}, {
								html : '',
								height : '10px',
								style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
							}, {
								xtype : 'homeZone2_xtype'
							}, {
								html : '',
								height : '10px',
								style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
							}, {
								xtype : 'homeZone3_xtype'
							}, {
								xtype : 'homeZone4_xtype'
							}, {
								html : '',
								flex : 1,
								style : 'background-image:url(resources/images/background.png);background-repeat:no-repeat;background-size:100% 300px;'
							}, {
								xtype : 'homeZone5_xtype'
							}]
				},
				//
				{
					flex : 1,
					html : '&nbsp;'
				}]
	}
});
