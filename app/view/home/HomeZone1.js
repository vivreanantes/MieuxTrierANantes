/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone1', {
	extend : 'Ext.Container',
	xtype : 'homeZone1_xtype',
	config : {
		layout : 'hbox',
		scrollable : true,
		height : '80px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
			// Le logo
			width : '260px',
			html : "<table border='0'><tr><td><img src='resources/images/logo_mieuxtrieranantes.png' width='50px'></td><td>Pour aider les habitants de Nantes Métropole à trier.</tr></table>",
			styleHtmlContent : true
		}, {
			// xtype : 'label',
			id : "homeZone1_bouton",
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
