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
							minWidth : '220px',
							width : '300px',
							layout : 'vbox',
							items : [{
										xtype : 'homeZone1_xtype'
									}, {
										xtype : 'homeZone2_xtype'
									}, {
										xtype : 'homeZone3_xtype'
									}, {
										xtype : 'homeZone4_xtype'
									}, {
										xtype : 'homeZone5_xtype'
									}, {
										xtype : 'homeZone6_xtype'
									}]
						},
						//
						{
							flex : 1,
							html : '&nbsp;'
						}]
			}
		});
