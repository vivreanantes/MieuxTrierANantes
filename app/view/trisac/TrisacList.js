Ext.define('MieuxTrierANantes.view.trisac.TrisacList', {
	extend : 'Ext.List',
	xtype : 'TrisacList_xtype',
	config : {
		iconCls : 'action', // icône en forme de ?
		itemTpl : '<div>{type}<br/>{nom}<br/>{plagesHoraires_prochainsJours}</div>'
	}
});