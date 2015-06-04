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
				navigationBar : {
					items : [{
								xtype : 'button',
								iconCls : 'home',
								// ui : 'round', // bouton arrondi
								align : 'right',
								id : 'structurehomebutton'
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});