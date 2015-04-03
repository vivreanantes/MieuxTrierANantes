/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone3', {
	extend : 'Ext.Container',
	xtype : 'homeZone3_xtype',
	style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:no-repeat;background-size:100% 100%;',
	config : {
		layout : 'hbox',
		scrollable : true,
		height : '50px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [/*{
					tpl : "<p><b>{nom}</b></p>",
					width : '300px',
					styleHtmlContent : true,
					data : {
						id : "",
						content : ""
					}
				},*/
				{
					 xtype: 'list',
					 itemTpl: 'DocsStore{nom}<br/>{descr}'
					 // store : 'DocsStore'
				}
				]
	}
});
