Ext.define('MieuxTrierANantes.view.structures.StructuresDetails', {
			extend : 'Ext.Container',
			xtype : 'structuresDetails_xtype',

			config : {
				title : 'Détail de la structure',
				layout : 'vbox',
				scrollable : true,
				//  scrollable : {
				// 	direction : 'vertical',
				// 	directionLock : true
				// },
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
					// maxWidth:'300px',
							id : "structuresDetails_description",
							tpl : "{description}",
							data : {
								"description" : ""
							}
						}, {
							// maxWidth:'300px',
							id : "structuresDetails_advices"
						}, {
							// maxWidth:'300px',
							id : "structuresDetails_comments_1",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							// maxWidth:'300px',
							id : "structuresDetails_comments_2",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							// maxWidth:'300px',
							id : "structuresDetails_comments_3",
							tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
						}, {
							xtype : 'button',
							width : '200px',
							id : "commentez",
							text : "Commentez",
							data : {
								name : "name",
								description : "description"
							}
						}]
			}

		});