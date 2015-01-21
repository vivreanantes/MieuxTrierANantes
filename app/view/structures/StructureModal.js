Ext.define('MieuxTrierANantes.view.comments.StructuresModal', {
	extend : 'Ext.Panel',
	alias : 'widget.stuctural_xtype',

	config : {
		centered : true,
		height : "420px",
		itemId : 'modalPanel',
		width : "300px",
		hideOnMaskTap : true,
		modal : true,
		scrollable : true,
		layout : 'vbox',
		title : "Lieu",
		scrollable : 'true',
		items : [{
					xtype : "label",
					html : "<p>Cliquer en dehors de la modale pour la fermer.</p>"
				}, {
					xtype : 'commentsForm_xtype',
					height : "350px",
					scrollable : false
				}]
	}

});