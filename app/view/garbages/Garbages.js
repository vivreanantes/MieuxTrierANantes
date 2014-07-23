/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 */
Ext.define('MieuxTrierANantes.view.garbages.Garbages', {
			extend : 'Ext.navigation.View',
			xtype : 'garbages_xtype',
			config : {
				autoDestroy : false,
				title:'Déchets',
				items : [{
							xtype : 'garbagescontainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});