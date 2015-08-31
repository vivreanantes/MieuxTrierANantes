/**
 * Liste des modes de collectes à domicile
 */

Ext.define('MieuxTrierANantes.view.home.GlobalSearchList', {
	extend : 'Ext.List',
	xtype : 'homeglobalsearchlist_xtype',

	config : {
		ui : 'dark',
		itemTpl : "<img src='resources/images/{image}' width='80px' align='left' /><i>{type}</i><strong>{nom}</strong>",
		cls : 'x-categories'
	}
		/*
	itemTpl: 'ggg{title}',
	data: [
	{ title: 'Item 1' },
	{ title: 'Item 2' },
	{ title: 'Item 3' },
	{ title: 'Item 4' }
	]*/
		/*config : {
	// icône en forme de poubelle
	iconCls : 'trash',
	title : 'Modes de collecte à domicile',
	itemTpl : 'ffff{mots_cles}'
	}*/
});