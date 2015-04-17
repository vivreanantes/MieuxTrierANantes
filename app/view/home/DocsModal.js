Ext.define('MieuxTrierANantes.view.home.DocsModal', {
			extend : 'Ext.Container',
			xtype : 'docsmodal_xtype',

			config : {
				scrollable : true,
				layout : 'vbox',
				scrollable : 'true',
				title : "Documents (imprimables et listing)",
				items : [{
							xtype : 'docslist_xtype',
							scrollable : 'vertical',
							flex : 1
						}/*
						 * , { html : 'tttt' }
						 */]
			}
		});