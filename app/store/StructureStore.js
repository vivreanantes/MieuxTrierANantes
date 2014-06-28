Ext.define('MieuxTrierANantes.store.StructureStore', {
			extend : 'Ext.data.Store',			
			id : 'structurestore', 	
			config :{
				autoLoad : true,
				model : 'MieuxTrierANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'resources/datas/structures.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				}	
			}
		});
