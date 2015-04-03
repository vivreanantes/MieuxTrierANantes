Ext.define('MieuxTrierANantes.view.home.SettingsView', {
			extend : 'Ext.form.Panel',
			xtype : 'widget.settingsView_xtype',
			config : {
				centered : true,
				height : "420px",
				itemId : 'modalPanel',
				width : "300px",
				hideOnMaskTap : true,
				modal : true,
				scrollable : true,
				layout : 'vbox',
				title : "Réglages",
				scrollable : 'true',
				items : [{
							xtype : 'settingsForm_xtype',
							scrollable : false
						}]
			}

		});