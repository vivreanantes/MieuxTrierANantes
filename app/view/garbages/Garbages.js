/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 */
Ext.define('MieuxTrierANantes.view.garbages.Garbages', {
	extend : 'Ext.navigation.View',
	xtype : 'garbages_xtype',
	config : {
		autoDestroy : false,
		title : 'Déchets2',
		items : [{
				xtype : 'garbagescontainer_xtype'
			}
		],
		navigationBar : {
			items : [{
					xtype : 'button',
					// iconCls : 'home', Ceci ne fonctionne pas sous Windows Phone (on remplace par icon)
					icon : 'resources/icons/home_mini.png',
					ui : 'round', // bouton arrondi
					align : 'right',
					id : 'garbagehomeButton',
					disabled : false
				}
			],
			docked : 'top'
		},
		defaultBackButtonText : "Retour"
	}
});