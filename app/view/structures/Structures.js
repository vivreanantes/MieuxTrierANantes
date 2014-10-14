/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('MieuxTrierANantes.view.structures.Structures', {
			extend : 'Ext.navigation.View',
			xtype : 'structuresview_xtype',
			id : 'structuresview_id',
			config : {
				autoDestroy : false,
				iconCls : 'structureclass',
				title : 'Lieux',
				items : [
					{
						xtype : 'structuresContainer_xtype'
					}
				],
				defaultBackButtonText : "Retour"
			}
		});