/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone3', {
	extend : 'Ext.Container',
	xtype : 'homeZone3_xtype',
	style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:no-repeat;background-size:100% 100%;',
	config : {
		layout : 'vbox',
		scrollable : true,
		height : '100px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
					id : "homeZone3_1",
					html : "Les actualités non récupérées",
					width : '300px',
					styleHtmlContent : true,
					listeners : {
						element : 'element',
						delegate : 'a',
						tap : function(e, t) {
							this.fireEvent('tap', this, e, t);
						}
					}

				}, {
					id : "homeZone3_2",
					html : "<a href='#'><span id='buttonquiz1' />Quiz Janvier</span></a> - "
							+ "<a href='#'><span id='buttonquiz2' />Quiz Hellfest</span></a>",
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