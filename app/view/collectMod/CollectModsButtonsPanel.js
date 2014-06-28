/**
 * Modes de collecte : page avec boutons
 * 
 * @author Christian Renoulin
 */
Ext.define('MieuxTrierANantes.view.collectMod.CollectModsButtonsPanel', {
			extend : 'Ext.Container',
			xtype : 'collectModsButtonsPanel_xtype',
			config : {
				title : 'Modes de collecte',
				scrollable : true,
				layout : {
					type : 'vbox'	
				}
			}
		}
);