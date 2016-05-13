/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone1', {
	extend : 'Ext.Container',
	xtype : 'homeZone1_xtype',
	config : {
		layout : 'hbox',
		scrollable : false,
		height : '70px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
			// Le logo
			minWidth : '115px',
			id : "homeZone0_bouton",
			width : '80%',
			html : "<table border='0' padding='0'><tr><td valign='top'>"
					+ "<img src='resources/images/nantes/logo_mieuxtrieranantes.png' width='50px'>"
					+ "</td><td valign='top'>"
					+ "<div align='center' style='font-size:14px;font-weight:bold'>Mieux trier à Nantes</div>"
					+ "<div align='center'>Aider les habitants de Nantes Métropole à trier.</div>"
					+ "</td></tr></table>",
			styleHtmlContent : true,
			listeners : {
				element : 'element',
				delegate : 'a',
				tap : function(e) {
					_gestionLien(e);
				}
			}
		}, {
			// xtype : 'label',
			id : "homeZone1_bouton",
			minWidth : '20px',
			html : "<a href=#><img src='resources/icons/info.png' name='info' /></a><br/><a href=#><img src='resources/images/images_externes_libres/flag-fr.png' width='30px' name='flag' id='flag-fr' /><img src='resources/images/images_externes_libres/flag-gb.png' width='30px' name='flag' style='display:none' id='flag-gb' /></a><div style='display:none'><a href=#><img src='resources/icons/settings.png' name='settings' /></a></div>",
			listeners : {
				element : 'element',
				delegate : 'a',
				tap : function(e, t) {
					this.fireEvent('tap', this, e, t);
				}
			}
		}]
	}
});
