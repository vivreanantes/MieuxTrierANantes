/**
 * Liste des modes de collectes à domicile
 */
Ext.define('MieuxTrierANantes.view.home.GlobalSearchList', {
			extend : 'Ext.List',
			xtype : 'homeglobalsearchlist_xtype',
			config : {
				// icône en forme de poubelle
				iconCls : 'trash',
				title : 'Résultats',
				itemTpl : '{nom} - '
			}
		});