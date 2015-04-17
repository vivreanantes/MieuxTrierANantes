Ext.define('MieuxTrierANantes.model.SearchModel', {
			extend : 'Ext.data.Model',
			config : {
				fields : [{
							name : 'nom',
							type : 'string'
						}, {
							name : "mots_cles",
							type : 'string'
						}, {
							name : 'src',
							type : 'string'
						}]
			}
		});