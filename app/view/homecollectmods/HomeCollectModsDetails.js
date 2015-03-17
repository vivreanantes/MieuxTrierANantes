Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsDetails', {
	extend : 'Ext.Container',
	xtype : 'homecollectmodsdetails_xtype',

	config : {
		title : 'Collecte à domicile',
		layout : 'hbox',
		scrollable : true,		
		items : [{
			xtype : 'container',
			layout : 'vbox',
			listeners : {
				element : 'element',
				delegate : 'a',
				tap : function(e) {
					_gestionLien(e);
				}
			},
			items : [{
						id : 'homecollectmodsdetails_description',
						tpl : "<b>Adresse</b> : {dcv}{ci}<br/>Collecte : {jcbj} </b><br/><br/><b>Source</b> : <font color=red>{src}</font></I><br/><br/>",
						data : {
							image : ""
						}
					}, {
						// Le premier conseil
						xtype : 'container',
						layout : 'vbox',
						width : '100%',
						id : "homecollectmodsdetails_conseils_1",
						items : [{
							tpl : "<br/><br/><b>{libelle}</b><br/>{description}<br/>",
							id : "homecollectmodsdetails_conseils_1_libelle"
						}, {
							xtype : 'label',
							id : "homecollectmodsdetails_conseils_1_bouton",
							tpl : "Voir <i>fiche {nom}</i>"
						}]
					}, {
						// Le deuxieme conseil
						xtype : 'container',
						layout : 'vbox',
						width : '100%',
						id : "homecollectmodsdetails_conseils_2",
						items : [{
							tpl : "<br/><br/><b>{libelle}</b><br/>{description}<br/>",
							id : "homecollectmodsdetails_conseils_2_libelle"
						}, {
							xtype : 'label',
							id : "homecollectmodsdetails_conseils_2_bouton",
							text : "Voir <i>fiche {nom}</i>"
						}]
					}]
		}, {
			xtype : 'container',
			layout : 'vbox',
			id : "homecollectmodsdetails_modesdecollecte",
			items : [{
						styleHtmlContent : true,
						html : "Modes de collecte : "
					}, {
						id : "homecollectmodsdetails_collectmod_1",
						xtype : "button",
						tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
						data : {
							label : "",
							image : ""
						}
					}, {
						id : "homecollectmodsdetails_collectmod_2",
						xtype : "button",
						tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
						data : {
							label : "",
							image : ""
						}
					}, {
						id : "homecollectmodsdetails_collectmod_3",
						xtype : "button",
						tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
						data : {
							label : "",
							image : ""
						}
					}, {
						id : "homecollectmodsdetails_collectmod_4",
						xtype : "button",
						tpl : "<img src='resources/images/{image}' width='20px' /> {label}",
						data : {
							label : "",
							image : ""
						}
					}]
		}]
	}
});