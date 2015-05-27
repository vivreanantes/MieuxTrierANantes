Ext.define('MieuxTrierANantes.store.GlobalSearchStore', {
			id : 'searchstore',
			extend : 'Ext.data.Store',
			config : {
				autoLoad : true,
				model : 'MieuxTrierANantes.model.GlobalSearchModel'/*,
				proxy : {
					type : 'ajax',
					url : 'resources/datas/docs.json',
					reader : {
						type : 'json',
						rootProperty : 'docs'
					}
				}*/
			}

		});