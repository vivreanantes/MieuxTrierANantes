/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsContainer', {
			extend : 'Ext.Container',
			xtype : 'HomeCollectModsContainer',

			config : {
				layout : 'vbox',
				title : "Collecte à domicile",
				items : [{
							xtype : 'homecollectmodsform_xtype',
							height : 100,
							scrollable : false
						},

						{
							xtype : 'homecollectmodslist_xtype',
							scrollable : 'vertical',
							flex : 1
						}

				]
			}

		});
