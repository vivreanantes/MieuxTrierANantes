Ext.define('MieuxTrierANantes.view.home.DocsModal', {
			extend : 'Ext.Container',
			xtype : 'docsmodal_xtype',

			config : {
				scrollable : true,
				layout : 'vbox',
				scrollable : 'true',
				items : [{
							layout : {
								type : 'hbox',
								align : 'stretch'
							},
							items : [{
										html : "<div align='center' style='font-size:14px;font-weight:bold'>Documents imprimables</div>",
										flex : 1,
										// Pour fonctionner sous Windows Phone (280 largeur totale)
										minWidth : '230px'
									}, {
										xtype : 'button',
										// iconCls : 'home', Ceci ne fonctionne pas sous Windows Phone (on remplace par icon)
										icon : 'resources/icons/home_mini.png',
										ui : 'round', // bouton arrondi
										align : 'right',
										id : 'docshomebutton',
										disabled : false,
										width : '50px'
									}]
						}, {
							xtype : 'docslist_xtype',
							scrollable : 'vertical',
							flex : 1,
							// Pour fonctionner sous Windows Phone (800 hauteur totale, dont 100 barre haut et bas)
							minHeight : 650
						}/*
							 * , { html : 'tttt' }
							 */]
			}
		});