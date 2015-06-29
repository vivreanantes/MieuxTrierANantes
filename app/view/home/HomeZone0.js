/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone1', {
	extend : 'Ext.Container',
	xtype : 'homeZone1_xtype',
	config : {
		layout : 'hbox',
		scrollable : false,
		height:'60px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
			// Le logo
			minWidth : '215px',
			width : '90%',
			html : "<table border='0' padding='0'><tr><td valign='top'><img src='resources/images/logo_mieuxtrieranantes.png' width='50px'></td><td valign='top'>Aider les habitants de Nantes Métropole à trier.</td></tr></table>",
			styleHtmlContent : true
		}, {
			// xtype : 'label',
			id : "homeZone1_bouton",
			minWidth : '20px',
			html : "<br/><a href=#><img src='resources/icons/info.png' name='info' /></a><div style='display:none'><a href=#><img src='resources/icons/settings.png' name='settings' /></a></div>",
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
