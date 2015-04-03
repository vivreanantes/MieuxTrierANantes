/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone1', {
	extend : 'Ext.Container',
	xtype : 'homeZone1_xtype',
	config : {
		layout : 'hbox',
		scrollable : true,
		height : '120px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
			// Le logo
			width : '260px',
			html : "<img src='resources/images/logo_mieuxtrieranantes.png' width='50px'><br/>Pour aider les habitants de Nantes Métropole à trier.",
			styleHtmlContent : true
		}, {
			// xtype : 'label',
			id : "homeZone1_bouton",
			html : "<br/><a href=#><img src='resources/icons/info.png' name='info' /></a><br/><a href=#><img src='resources/icons/settings.png' name='settings' /></a>",
			listeners : {
				element : 'element',
				delegate : 'a',
				tap : function(e) {
					if (e.target.name == "settings") {
						// TODO fenêtre paramétrage
					} else {
						var description = _labelsDatas["about"]["fr"];
						var nom = _labelsDatas["about_titre"]["fr"];
						Ext.Msg.show({
									title : nom,
									message : description,
									height : 400,
									width : 300,
									scrollable : true,
									buttons : Ext.Msg.OK,
									icon : Ext.Msg.INFO
								});
					}
				}
			}
		}]
	}
});
