/**
 * Vue des Distribution Trisacs (page principale)
 */
Ext.define('MieuxTrierANantes.view.trisac.Trisacs', {
			extend : 'Ext.navigation.View',
			xtype : 'trisac_xtype',

			config : {
				autoDestroy : false,
				iconCls : 'distrisacclass',
				title:'Trisac',
				items : [{
							xtype : 'TrisacContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});