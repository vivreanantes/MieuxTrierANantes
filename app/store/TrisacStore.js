Ext.define('MieuxTrierANantes.store.TrisacStore', {
			extend : 'Ext.data.Store',
			id : 'trisacstore',
			config : {
				autoLoad : true,
				model : 'MieuxTrierANantes.model.StructureModel',
				proxy : {
					type : 'ajax',
					url : 'resources/datas/structures.json',
					reader : {
						type : 'json',
						rootProperty : 'structures'
					}
				},
				filters : [{
							property : "modesCollecte",
							value : /modco_distrisac/
						}]
			}
		});