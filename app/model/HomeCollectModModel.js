Ext.define('MieuxTrierANantes.model.HomeCollectModModel', {
			extend : 'Ext.data.Model',

			config : {
				fields : [{
							name : 'dcv',
							type : 'string'
						}, {
							name : "mots_cles",
							type : 'string'
						}, {
							name : 'ci',
							type : 'string'
						}, {
							name : 'jcbj',
							type : 'string'
						}, {
							name : 'jcbj_en',
							type : 'string'
						}, {
							name : 'mco',
							type : 'string'
						}, {
							name : 'src',
							type : 'string'
						}, {
							name : 'cons',
							type : 'string'
						}]
			}

		});