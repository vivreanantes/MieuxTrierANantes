/**
 * Vue des Modes de collecte (page principale)
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'homecollectmods_xtype',
			config : {
				autoDestroy : false,

				title : 'A domicile',
				items : [{
							xtype : 'homecollectmodscontainer_xtype'
						}],
				navigationBar : {
					items : [{
								xtype : 'button',
								// iconCls : 'home', Ceci ne fonctionne pas sous
								// Windows Phone (on remplace par icon)
								icon : 'resources/icons/home_mini.png',
								ui : 'round', // bouton arrondi
								align : 'right',
								id : 'homecollectmodshomebutton'
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});