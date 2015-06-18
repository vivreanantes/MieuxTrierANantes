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
										flex : 1
									}, {
										xtype : 'button',
										iconCls : 'home',
										// ui : 'round', // bouton arrondi
										align : 'right',
										id : 'docshomebutton',
										disabled : false,
										width : '100px'
									}]
						}, {
							xtype : 'docslist_xtype',
							scrollable : 'vertical',
							flex : 1
						}/*
							 * , { html : 'tttt' }
							 */]
			}
		});