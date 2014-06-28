Ext.define('MieuxTrierANantes.view.collectMod.CollectModsDetails', {
			extend : 'Ext.Container',
			xtype : 'collectModsDetails_xtype',

			config : {
				title : 'Mode de collecte',
				layout : 'vbox',
				scrollable : true,
				styleHtmlContent : true,
				record : null,
				items : [{
							id : "collectModsDetails_description",
							tpl : "{description}",
							data : {
								"description" : ""
							}
						}, {
							id : "collectModsDetails_advices"
						}, {
							id : "collectModsDetails_comments"
						}]		
			}

		});