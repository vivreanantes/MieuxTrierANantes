/**
 * Liste des modes de collectes à domicile
 */

Ext.define('MieuxTrierANantes.view.home.GlobalSearchList', {
			extend : 'Ext.List',
			xtype : 'homeglobalsearchlist_xtype',
			config : {
				itemTpl : 'ddddddddddd<div>{nom}</div>'
			}
		});