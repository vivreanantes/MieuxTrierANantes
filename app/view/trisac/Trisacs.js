/**
 * Vue des Distribution Trisacs (page principale)
 */
Ext.define('MieuxTrierANantes.view.trisac.Trisacs', {
			extend : 'Ext.navigation.View',
			xtype : 'trisac_xtype',
			// id : 'trisac_id',
			config : {
				autoDestroy : false,
				title:'Trisac',
				items : [{
							xtype : 'TrisacContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});