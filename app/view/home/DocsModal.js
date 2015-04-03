Ext.define('MieuxTrierANantes.view.home.DocsModal', {
			extend : 'Ext.Container',
			xtype : 'docsmodal_xtype',

			config : {
				scrollable : true,
				layout : 'vbox',
				scrollable : 'true',
				items : [{
							html : 'Liste des documentations imprimables disponibles'
						}, {
							xtype : 'docslist_xtype',
							scrollable : 'vertical',
							flex : 1
						}/*
						 * , { html : 'tttt' }
						 */]
			}
		});