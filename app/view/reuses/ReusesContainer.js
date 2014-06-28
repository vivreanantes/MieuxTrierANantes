/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('MieuxTrierANantes.view.reuses.ReusesContainer', {
			extend : 'Ext.Container',
			requires: ['MieuxTrierANantes.view.reuses.ReusesForm','MieuxTrierANantes.view.reuses.ReusesList'],
			xtype : 'reusesContainer_xtype',
			config : {
				layout : 'vbox',
				title : "Récupération",
				items : [{
							xtype : 'reusesForm_xtype',
							height : 120,
							scrollable : false
						}, {
							xtype : 'reusesList_xtype',
							scrollable : 'vertical',
							flex : 1
						}]
			}
		});
