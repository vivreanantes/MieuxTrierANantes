/**
 * Conteneur avec un bouton de recherche et la liste des modes de collectes à
 * domicile filtrée par cette recherche en dessous
 */
Ext.define('MieuxTrierANantes.view.trisac.TrisacContainer', {
			extend : 'Ext.Container',
			xtype : 'TrisacContainer_xtype',

			config : {
				layout : 'vbox',
				title : 'Distribution de Trisac',
				items : [{
							xtype : 'TrisacForm_xtype',
							height : 140,
							scrollable : false
						}, {
							xtype : 'TrisacList_xtype',
							scrollable : 'vertical',
							flex : 1
						}]
			}
		});
