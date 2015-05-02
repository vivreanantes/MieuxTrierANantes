/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone2', {
	extend : 'Ext.Container',
	xtype : 'homeZone2_xtype',

	config : {
		layout : 'hbox',
		scrollable : true,
		height : '50px',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [{
					html : ' ',
					flex : 1
				}, {
					// Le bouton recherche
					xtype : 'textfield',
					name : 'name',
					width : '200px',
					id : 'homeGlobalSearchFormText',
					// padding : '6 0 0 0',
					// border : 3,
					style : 'border:3;padding:6 0 0 0;border-color: #6C9804; border-style: solid;',
					// le contenu de la zone est centré
					fieldStyle : 'text-align: center;',
					placeHolder : "Ex : miroir, emmaüs..."

				}, {

					xtype : 'button',
					id : 'homeGlobalSearchFormButton',
					width : '35px',
					// icône en forme de loupes
					iconCls : 'search',
					iconMask : true
				}, {
					html : ' ',
					flex : 1
				}]
	}
});
