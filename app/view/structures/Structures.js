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
								// iconCls : 'home', Ceci ne fonctionne pas sous Windows Phone (on remplace par icon)
								icon : 'resources/icons/home_mini.png',
								ui : 'round', // bouton arrondi
								align : 'right',
								id : 'structurehomebutton'
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"
			}
		});