Ext.define('MieuxTrierANantes.store.HomeCollectModStore', {
			extend : 'Ext.data.Store',			
			id : 'homecollectmodstore', 	
			config :{
				autoLoad : false,
				model : 'MieuxTrierANantes.model.HomeCollectModModel',
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