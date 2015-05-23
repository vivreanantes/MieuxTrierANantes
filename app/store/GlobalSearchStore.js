Ext.define('MieuxTrierANantes.store.GlobalSearchStore', {
			id : 'searchstore',
			extend : 'Ext.data.Store',
			config : {
				autoLoad : true,
				model : 'MieuxTrierANantes.model.DocsModel',
				proxy : {
					type : 'ajax',
					url : 'resources/datas/docs.json',
					reader : {
						type : 'json',
						rootProperty : 'docs'
					}
				}
			}

		});