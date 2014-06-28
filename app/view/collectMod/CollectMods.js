/**
 * Page des modes de collecte
 * 
 * @author Christian Renoulin
 */
Ext.define('MieuxTrierANantes.view.collectMod.CollectMods', {
			extend : 'Ext.navigation.View',
			xtype : 'collectMods_xtype',
			config : {
				autoDestroy : false,
				iconCls : 'trash', // icône en forme de poubelle
				title : 'Modes',
				items : [{
							xtype : 'collectModsButtonsPanel_xtype'
						}],
				defaultBackButtonText : "Retour"
			}
		});