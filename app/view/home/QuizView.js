Ext.define('MieuxTrierANantes.view.home.QuizView', {
	extend : 'Ext.Container',
	xtype : 'quizview_xtype',

	config : {
		layout : 'vbox',
		styleHtmlContent : true,
		scrollable : true,
		title : "Quiz",
		items : [{
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			items : [{
				html : " ",
				flex : 1,
				// Pour fonctionner sous Windows Phone (800 hauteur totale, dont 100 barre haut et bas)
				minHeight : 10
			}, {
				xtype : 'button',
				// iconCls : 'home', Ceci ne fonctionne pas sous Windows Phone (on remplace par icon)
				icon : 'resources/icons/home_mini.png',
				ui : 'round', // bouton arrondi
				align : 'right',
				id : 'quizhomebutton',
				disabled : false,
				width : '50px'
			}]
		}, {
			id : "quizview_contenu",
			styleHtmlContent : true,
			tpl : "{contenu}"
		}, {
			xtype : 'button',
			width : 200,
			id : "quizview_button",
			text : "Vérifier"
		}]
	}
});