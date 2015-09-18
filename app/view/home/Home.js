/**
 * Vue principale
 */
Ext.define('MieuxTrierANantes.view.home.Home', {
			extend : 'Ext.navigation.View',
			xtype : 'home_xtype',
			config : {
				autoDestroy : false,
				items : [{
							xtype : 'homeContainer_xtype'
						}],
				// on cache le titre
				navigationBar : {
					hidden : true
				},
				defaultBackButtonText : "Retour"
			}
		});