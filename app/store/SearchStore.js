Ext.define('MieuxTrierANantes.store.SearchStore', {
			extend : 'Ext.data.Store',
			id : 'searchstore',
			config : {
				autoLoad : false,
				model : 'MieuxTrierANantes.model.SearchModel',
				proxy : {
					type : 'ajax',
					url : 'resources/datas/modes_collecte_a_domicile.json',
					reader : {
						type : 'json',
						rootProperty : 'modes_collecte_a_domicile'
					}
				}
			}
		});