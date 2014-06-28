/**
 * Vue des Distribution Events (page principale)
 */
Ext.define('MieuxTrierANantes.view.structures.Structures', {
			extend : 'Ext.navigation.View',
			xtype : 'structuresview_xtype',
			// id : 'structuresView_xtype',
			config : {
				autoDestroy : false,
				// iconCls : 'structureclass',
				icon : 'search',
				title : 'Lieux',
				items : [
					{
						xtype : 'structuresContainer_xtype'
					}
				],
				defaultBackButtonText : "Retour"
			}
		});