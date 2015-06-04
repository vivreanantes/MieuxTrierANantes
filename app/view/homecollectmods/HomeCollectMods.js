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
								iconCls : 'home',
								// ui : 'round', // bouton arrondi
								align : 'right',
								id : 'homecollectmodshomebutton'
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});