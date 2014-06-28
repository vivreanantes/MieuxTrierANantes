Ext.define('MieuxTrierANantes.view.structures.StructuresList', {
	extend : 'Ext.List',
	xtype : 'structuresList_xtype',
	config : {
		itemTpl : '<div><i>{type}</i><br/>{libelle}<br/>{plagesHoraires_prochainsJours}</div>'
	}

	

});