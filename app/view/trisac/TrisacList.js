Ext.define('MieuxTrierANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList_xtype',
	config : {
		iconCls : 'action', // icône en forme de ?
		title : 'Modes de collecte à domicile',
		itemTpl : '<div>{type}<br/>{libelle}<br/>{plagesHoraires_prochainsJours}</div>'
	}
});