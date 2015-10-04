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
			tpl : "<div align='center' style='font-size:14px;font-weight:bold'>{nom}</div>"
					+ "<form id='quizviewform'>{descr}"
					+ "<input type='hidden' name='ok' value='{ok}'/>"
					+ "<div class='qheader'>"
					+ "<img src={q1i1} height='80px' /><br/>1) {q1}</div>"
					+ "<div class='qselections'>"
					+ "<input type='checkbox' value='a' name='q1r1'><span id='q1r1'> {q1r1}</span><br/>"
					+ "<input type='checkbox' value='b' name='q1r2'><span id='q1r2'> {q1r2}</span><br/>"
					+ "<input type='checkbox' value='c' name='q1r3'><span id='q1r3'> {q1r3}</span><br/>"
					+ "<span id='q1e1'><span id='q1r1' style='font-weight:bold;'> {q1e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q2i1} height='80px' /><br/>2) {q2}</div>"
					+ "<div class='qselections'>"
					+ "<input type='checkbox' value='a' name='q2r1'><span id='q2r1'> {q2r1}</span><br/>"
					+ "<input type='checkbox' value='b' name='q2r2'><span id='q2r2'> {q2r2}</span><br/>"
					+ "<input type='checkbox' value='c' name='q2r3'><span id='q2r3'> {q2r3}</span><br/>"
					+ "<span id='q2e1'><span id='q1r1' style='font-weight:bold;'> {q2e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q3i1} height='80px' /><br/>3) {q3}</div>"
					+ "<div class='qselections'>"
					+ "<input type='checkbox' value='a' name='q3r1'><span id='q3r1'> {q3r1}</span><br/>"
					+ "<input type='checkbox' value='b' name='q3r2'><span id='q3r2'> {q3r2}</span><br/>"
					+ "<input type='checkbox' value='c' name='q3r3'><span id='q3r3'> {q3r3}</span><br/>"
					+ "<span id='q3e1'><span id='q1r1' style='font-weight:bold;'> {q3e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q4i1} height='80px' /><br/>4) {q4}<br/></div>"
					+ "<div class='qselections'>"
					+ "<input type='checkbox' value='a' name='q4r1'><span id='q4r1'> {q4r1}</span><br/>"
					+ "<input type='checkbox' value='b' name='q4r2'><span id='q4r2'> {q4r2}</span><br/>"
					+ "<input type='checkbox' value='c' name='q4r3'><span id='q4r3'> {q4r3}</span><br/>"
					+ "<span id='q4e1'><span id='q1r1' style='font-weight:bold;'> {q4e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q5i1} height='80px' /><br/>5) {q5}</div>"
					+ "<div class='qselections'>"
					+ "<input type='checkbox' value='a' name='q5r1'><span id='q5r1'> {q5r1}</span><br/>"
					+ "<input type='checkbox' value='b' name='q5r2'><span id='q5r2'> {q5r2}</span><br/>"
					+ "<input type='checkbox' value='c' name='q5r3'><span id='q5r3'> {q5r3}</span><br/>"
					+ "<span id='q5e1'><span id='q1r1' style='font-weight:bold;'> {q5e1}</span>"
					+ "</div>"
					+ "</form><br/>"
					+ "<span id='resultat' style='font-weight:bold;'>&nbsp;</span>"
					+ "<div id='qres1'><img src='resources/images/quiz/1.png' height='80px' /></div>"
					+ "<div id='qres2'><img src='resources/images/quiz/2.png' height='80px' /></div>"
					+ "<div id='qres3'><img src='resources/images/quiz/3.png' height='80px' /></div>"
					+ "<div id='qres4'><img src='resources/images/quiz/4.png' height='80px' /></div>"
					+ "<div id='qres5'><img src='resources/images/quiz/5.png' height='80px' /></div>"
		}, {
			xtype : 'button',
			width : 200,
			id : "quizview_button",
			text : "Vérifier"
		}]
	}
});