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
				navigationBar : {
					items : [{
						xtype : 'button',
						iconCls: 'home',
						// ui: 'round', // bouton arrondi
						align : 'right',
						id : 'trisacshomebutton'
					}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});