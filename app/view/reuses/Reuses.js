/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('MieuxTrierANantes.view.reuses.Reuses', {
			extend : 'Ext.navigation.View',
			requires: ['MieuxTrierANantes.view.reuses.ReusesContainer'],
			xtype : 'reusesView_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'reply', // icône en forme de flèche vers la gauche
				title : 'Récup',
				items : [{
							xtype : 'reusesContainer_xtype'
						}
				],
				defaultBackButtonText : "Retour"
			}
		});