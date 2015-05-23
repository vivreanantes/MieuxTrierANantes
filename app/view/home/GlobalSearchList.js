/**
 * Liste des modes de collectes à domicile
 */

Ext.define('MieuxTrierANantes.view.home.GlobalSearchList', {
	extend : 'Ext.List',
	xtype : 'homeglobalsearchlist_xtype',
	config : {
		ui : 'dark',
		itemTpl : "<strong>{nom}</strong><br/><a href='http://{url}' target=_new>{url}</a>"
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