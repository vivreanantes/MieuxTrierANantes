Ext.define('MieuxTrierANantes.store.StructureGeoStore', {
			extend : 'Ext.data.Store',			
			id : 'structuregeostore', 	
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
