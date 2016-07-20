Ext.define('MieuxTrierANantes.view.garbages.GarbagesDetails', {
	extend : 'Ext.Container',
	xtype : 'garbagesDetails_xtype',
	scrollable : true,
	record : null,
	config : {
		title : 'ceci_sera_remplacer',
		styleHtmlContent : true,
		scrollable : true,
		layout : 'vbox',
		listeners : {
			element : 'element',
			delegate : 'a',
			tap : function(e) {
				_gestionLien(e);
			}
		},
		items : [{
			xtype : 'container',
			layout : 'hbox',
			items : [{
						id : "garbagesdetails_image",
						tpl : "{image}",
						styleHtmlContent : true,
						data : {
							image : ""
						}
					}, {
						xtype : 'container',
						layout : 'vbox',
						id : "garbagesdetails_recyclableetmodesdecollecte",
						items : [{
							id : "garbagesdetails_recyclable",
							tpl : "{recyclable_string}",
							data : {
								recyclable_string : ""
							}
						}, {
							id : "garbagesdetails_collectmod_1",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_2",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_3",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_4",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_5",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_6",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_7",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}, {
							id : "garbagesdetails_collectmod_8",
							xtype : "button",
							tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
							data : {
								label : "",
								image : ""
							}
						}]
					}]
		},

		{
			id : "garbagesdetails_description",
			// style : 'background-color: #119Eaa;',
			tpl : "<br/>{concerne_aussi}<b>Source</b> : <font color=red>{src}</font><br/>{sponsor}",
			data : {
				"concerne_aussi" : "Concerne aussi : divers"
			}
		},
		

		{
			id : "garbagesdetails_conseils"
		}, {
			// Le premier conseil
			xtype : 'container',
			layout : 'vbox',	
			width : '100%',
			id : "garbagesdetails_conseils_1",
			items : [{
						tpl : "<b>{nom}</b><br/>{descr}<br/>",
						id : "garbagesdetails_conseils_1_nom"
					}, {
						// xtype : 'label',
						id : "garbagesdetails_conseils_1_categ",
						html : "",
						listeners : {
							element : 'element',
							delegate : 'a',
							tap : function(e) {
								_gestionLien(e);
							}
						}
					}]
		}, {
			// Le deuxieme conseil
			xtype : 'container',
			layout : 'vbox',
			width : '100%',
			id : "garbagesdetails_conseils_2",
			items : [{
						tpl : "<b>{nom}</b><br/>{descr}<br/>",
						id : "garbagesdetails_conseils_2_nom"
					}, {
						// xtype : 'label',
						id : "garbagesdetails_conseils_2_categ",
						html : "",
						listeners : {
							element : 'element',
							delegate : 'a',
							tap : function(e) {
								_gestionLien(e);
							}
						}
					}]
		}, {
			// Le troisième conseil
			xtype : 'container',
			layout : 'vbox',
			width : '100%',
			id : "garbagesdetails_conseils_3",
			items : [{
						tpl : "<b>{nom}</b><br/>{descr}<br/>",
						id : "garbagesdetails_conseils_3_nom"
					}, {
						// xtype : 'label',
						id : "garbagesdetails_conseils_3_categ",
						html : "",
						listeners : {
							element : 'element',
							delegate : 'a',
							tap : function(e) {
								_gestionLien(e);
							}
						}
					}]
		}, {
			id : "garbagesdetails_commentaires"
		}, {
			id : "garbagesdetails_commentaires_1",
			tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
		}, {
			id : "garbagesdetails_commentaires_2",
			tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
		}, {
			id : "garbagesdetails_commentaires_3",
			tpl : "<b>{nom}</b><br/>{descr}<br/><br/>"
		}, {
			html : "<br/>"
		}, {
			xtype : 'button',
			width : '200px',
			id : "garbagesdetails_envoyer",
			text : "Commentez"
		}]

	}

});