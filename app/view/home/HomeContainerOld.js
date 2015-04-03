/**
 * Conteneur avec 
 */
Ext.define('MieuxTrierANantes.view.home.HomeContainerOld', {
	extend : 'Ext.Container',
	xtype : 'homeContainer_xtype_old',

	config : {
		layout : 'vbox',
		title : 'Lieux de collecte et réemploi',
		layout : 'hbox',
		scrollable : true,
		items : [{
			xtype : 'container',
			width : '300px',
			layout : 'vbox',
			items : [{
				tpl : "<img src='resources/images/logo_mieuxtrieranantes.png' width='200px' ><br/><br/><p><b>{nom}</b></p>",
				styleHtmlContent : true,
				data : {
					id : "",
					content : ""
				},
				style : 'background-image:url(resources/images/background.png);background-repeat:no-repeat;background-size:100% 100%;'
			}, {
				layout : {
					type : 'hbox',
					align : 'strech',
					height : '35px'
				},
				items : [{
							xtype : 'textfield',
							name : 'name',
							width : '200px',
							id : 'homeCollectModsFormTextddd',
							placeHolder : "Ex : royal"
						}, {
							xtype : 'button',
							id : 'homeCollectModsFormButton',
							// icône en forme de loupes
							iconCls : 'search',
							iconMask : true
						}]
			}, {
				scrollable : 'vertical',
				flex : 1
			},
			// Le bandeau en bas
			{
				height : '100px',
				tpl : " ",
				styleHtmlContent : true,
				style : 'background-image:url(resources/images/bandeau.png);background-repeat:no-repeat;background-size:100% 100%;'
			}]
		}, {

			xtype : 'container',
			layout : 'vbox',
			items : [{
						xtype : 'button',
						iconCls : 'info',
						handler : function(button, e) {
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
					}, {
						xtype : 'button',
						iconCls : 'settings',
						handler : function(button, e) {
							var description = "Réglages";
							var nom = "Réglages";
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
					}, {}]
		}]
	}
});
