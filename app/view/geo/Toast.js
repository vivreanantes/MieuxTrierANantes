/**
 * Toast à la manière de ce qui existe déjà sur Android
 * 
 * Repris de l'exemple fourni par Sencha
 */
Ext.define('MieuxTrierANantes.view.geo.Toast', {
			extend : 'Ext.Panel',
			xtype : 'vantoast',
			config : {
				top : 0,
				left : 0,

				// Make it modal so you can click the mask to hide the overlay
				modal : true,
				hideOnMaskTap : true,

				// Make it hidden by default
				hidden : true,

				// Set the width and height of the panel
				width : Ext.os.deviceType == 'Phone' ? 200 : 300,
				height : Ext.os.deviceType == 'Phone' ? '60%' : 300,

				// Style the content and make it scrollable
				styleHtmlContent : true,
				scrollable : true,

				items : [{
							docked : 'top',
							xtype : 'toolbar',
							title : 'Information'
						}]

			}
		});
