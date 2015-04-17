/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 */
Ext.define('MieuxTrierANantes.view.garbages.Garbages', {
			extend : 'Ext.navigation.View',
			xtype : 'garbages_xtype',
			// id : 'garbages_id',
			config : {
				autoDestroy : false,
				title:'Déchets',
				items : [{
							xtype : 'garbagescontainer_xtype'
						}
				],
				navigationBar : {
					items : [{
								xtype : 'button',
								iconCls : 'home',
								ui : 'round', // bouton arrondi
								align : 'right',
								id : 'garbagehomeButton',
								disabled: true
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});