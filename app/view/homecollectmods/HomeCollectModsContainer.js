/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsContainer', {
			extend : 'Ext.Container',
			xtype : 'homecollectmodscontainer_xtype',
			config : {
				layout : 'vbox',
				title : "Collecte à domicile",
				items : [{
							xtype : 'homecollectmodsform_xtype',
							height : 120,
							scrollable : false
						}, {
							xtype : 'homecollectmodslist_xtype',
							scrollable : 'vertical',
							flex : 1,
							// Pour fonctionner sous Windows Phone (800 hauteur totale, dont 100 barre haut et bas)
							minHeight : 580
						}]
			}
		});
