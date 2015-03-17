Ext.define('MieuxTrierANantes.view.structures.StructuresDetails', {
			extend : 'Ext.Container',
			xtype : 'structuresDetails_xtype',

			config : {
				title : 'Détail de la structure',
				layout : 'vbox',
				scrollable : true,
				styleHtmlContent : true,
				record : null,
				listeners : {
					element : 'element',
					delegate : 'a',
					tap : function(e) {
						_gestionLien(e);
					}
				},
				items : [{
							id : "structuresDetails_description",
							tpl : "{description}",
							data : {
								"description" : ""
							}
						}, {
							id : "structuresDetails_advices"
						}, {
							id : "structuresDetails_comments_1",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							id : "structuresDetails_comments_2",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							id : "structuresDetails_comments_3",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							xtype : 'button',
							width : '200px',
							id : "commentez",
							text : "Commentez"
						}]
			}

		});