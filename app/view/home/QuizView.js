Ext.define('MieuxTrierANantes.view.home.QuizView', {
	extend : 'Ext.Container',
	xtype : 'quizview_xtype',

	config : {
		layout : 'vbox',
		styleHtmlContent : true,
		items : [{
			tpl : "<font face='Arial'><big>{nom}</big></font><br/>{descr}</p>"
					+ "<div class='qheader'>"
					+ "<img src={q1i1} /><br/>1) {q1}</div>"
					+ "<div class='qselections'>"
					+ "<input type='radio' value='a' name='q1r1'>{q1r1}<br>"
					+ "<input type='radio' value='b' name='q1r2'>{q1r2}<br>"
					+ "<input type='radio' value='c' name='q1r3'>{q1r3}<br>"
					+ "<span class='qexplic'>{q1e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q2i1} /><br/>2) {q2}</div>"
					+ "<div class='qselections'>"
					+ "<input type='radio' value='a' name='q2r1'>{q2r1}<br>"
					+ "<input type='radio' value='b' name='q2r2'>{q2r2}<br>"
					+ "<input type='radio' value='c' name='q2r3'>{q2r3}<br>"
					+ "<span class='qexplic'>{q2e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q3i1} /><br/>3) {q3}</div>"
					+ "<div class='qselections'>"
					+ "<input type='radio' value='a' name='q3r1'>{q3r1}<br>"
					+ "<input type='radio' value='b' name='q3r2'>{q3r2}<br>"
					+ "<input type='radio' value='c' name='q3r3'>{q3r3}<br>"
					+ "<span class='qexplic'>{q3e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q4i1} /><br/>4) {q4}<br/></div>"
					+ "<div class='qselections'>"
					+ "<input type='radio' value='a' name='q4r1'>{q4r1}<br>"
					+ "<input type='radio' value='b' name='q4r2'>{q4r2}<br>"
					+ "<input type='radio' value='c' name='q4r3'>{q4r3}<br>"
					+ "<span class='qexplic'>{q4e1}</span>"
					+ "</div>"
					+ "<div class='qheader'>"
					+ "<img src={q5i1} /><br/>5) {q5}</div>"
					+ "<div class='qselections'>"
					+ "<input type='radio' value='a' name='q5r1'>{q5r1}<br>"
					+ "<input type='radio' value='b' name='q5r2'>{q5r2}<br>"
					+ "<input type='radio' value='c' name='q5r3'>{q5r3}<br>"
					+ "<span class='qexplic'>{q5e1}</span>"
					+ "</div>"
		}]
	}
});