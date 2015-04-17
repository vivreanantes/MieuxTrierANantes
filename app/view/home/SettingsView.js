Ext.define('MieuxTrierANantes.view.home.SettingsView', {
			extend : 'Ext.Container',
			xtype : 'settingsView_xtype',
			config : {
				scrollable : true,
				layout : 'vbox',
				title : "Réglages",
				scrollable : 'true',
				items : [{
							xtype : 'settingsForm_xtype',
							scrollable : 'vertical',
							flex : 1,
							width : '300px'
						}]
			}
		});