Ext.define('MieuxTrierANantes.view.reuses.ReusesList', {
	extend : 'Ext.List',
	xtype : 'reusesList_xtype',
	config : {
		// title : 'Modes de collecte à domicile',
		// TODO : initialiser ce template avec translate 
		itemTpl : '<I>{type}</I><br/><div>{libelle}<br/>{plagesHoraires_prochainsJours}</div>'
	}

	

});