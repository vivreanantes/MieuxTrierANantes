/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeContainer', {
	extend : 'Ext.Container',
	xtype : 'homeContainer_xtype',

	config : {

		layout : 'hbox',
		items : [{
					flex : 1,
					html : '&nbsp;',
					style : 'background-color:#AEDC53',
					// Pour fonctionner sous Windows Phone (800 hauteur totale, dont 100 barre haut et bas)
					minHeight : 10
				}, {

					minWidth : '230px',
					maxWidth : '600px',
					width : '90%',
					layout : 'vbox',
					items : [{
								xtype : 'homeZone1_xtype'
							}, {
								html : '',
								height : '5px',
								style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
							}, {
								xtype : 'homeZone2_xtype'
							}, {
								html : '',
								height : '10px',
								style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
							}, {
								xtype : 'homeZone3_xtype'
							}, {
								xtype : 'homeZone4_xtype'
							}, /*
								 * { html : '', height : '150px', style :
								 * 'background-image:url(resources/images/background.png);background-repeat:no-repeat;background-size:100%
								 * 150px' },
								 */{
								html : '',
								flex : 1,
								style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;'
							}, {
								xtype : 'homeZone5_xtype'
							}]
				},
				//
				{
					flex : 1,
					html : '&nbsp;',
					style : 'background-color:#AEDC53'
				}]
	}
});