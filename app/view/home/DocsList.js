/**
 * Liste des documents imprimables
 */
Ext.define('MieuxTrierANantes.view.home.DocsList', {
	extend : 'Ext.List',
	xtype : 'docslist_xtype',
	config : {
		ui : 'dark',
		itemTpl : "<strong>{nom}</strong><br/><a href='http://{url}' target=_new>{url}</a>"
	}
});
