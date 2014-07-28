Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsList', {
	extend : 'Ext.List',
	xtype : 'homecollectmodslist_xtype',
	config : {
		iconCls : 'trash', // icône en forme de poubelle
		title : 'Modes de collecte à domicile',
		itemTpl : '{dcv}<br/>Collecte : {jcbj}'
	}

});