/**
 * Liste des modes de collectes à domicile
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsList', {
			extend : 'Ext.List',
			xtype : 'homecollectmodslist_xtype',
			config : {
				// icône en forme de poubelle
				iconCls : 'trash',
				title : 'Modes de collecte à domicile',
				itemTpl : '{dcv}<br/>{jcbj}'
			}
		});