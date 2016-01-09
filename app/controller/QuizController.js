Ext.define('MieuxTrierANantes.controller.QuizController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			home : 'home_xtype',
			quizView : 'quizview_xtype',
			quizviewButton : '#quizview_button',
			quizviewContenu : '#quizview_contenu'
		},
		control : {
			quizviewButton : {
				tap : 'clickQuizViewButton'
			},
			quizView : {
				activate : 'activateQuizView'
			}
		}
	},

	/**
	 * Montre un quiz
	 * @param {} indexElement le numéro du quiz
	 */
	show : function(indexElement) {
		var thisControler = this;
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}
		this.updateTextTranslatedQuizView();
		// this.quizView.items.items[1].setData(_quizsDatas[indexElement]);

		// TRELLO PB QUIZ SOUS WINDOWS PHONE
		var nom = this.getRecordValue(_quizsDatas[indexElement], "nom");
		var descr = this.getRecordValue(_quizsDatas[indexElement], "descr");
		var ok = this.getRecordValue(_quizsDatas[indexElement], "ok");
		var q1 = this.getRecordValue(_quizsDatas[indexElement], "q1");
		var q1i1 = this.getRecordValue(_quizsDatas[indexElement], "q1i1");
		var q1r1 = this.getRecordValue(_quizsDatas[indexElement], "q1r1");
		var q1r2 = this.getRecordValue(_quizsDatas[indexElement], "q1r2");
		var q1r3 = this.getRecordValue(_quizsDatas[indexElement], "q1r3");
		var q1e1 = this.getRecordValue(_quizsDatas[indexElement], "q1e1");
		var q2 = this.getRecordValue(_quizsDatas[indexElement], "q2");
		var q2i1 = this.getRecordValue(_quizsDatas[indexElement], "q2i1");
		var q2r1 = this.getRecordValue(_quizsDatas[indexElement], "q2r1");
		var q2r2 = this.getRecordValue(_quizsDatas[indexElement], "q2r2");
		var q2r3 = this.getRecordValue(_quizsDatas[indexElement], "q2r3");
		var q2e1 = this.getRecordValue(_quizsDatas[indexElement], "q2e1");
		var q3 = this.getRecordValue(_quizsDatas[indexElement], "q3");
		var q3i1 = this.getRecordValue(_quizsDatas[indexElement], "q3i1");
		var q3r1 = this.getRecordValue(_quizsDatas[indexElement], "q3r1");
		var q3r2 = this.getRecordValue(_quizsDatas[indexElement], "q3r2");
		var q3r3 = this.getRecordValue(_quizsDatas[indexElement], "q3r3");
		var q3e1 = this.getRecordValue(_quizsDatas[indexElement], "q3e1");
		var q4 = this.getRecordValue(_quizsDatas[indexElement], "q4");
		var q4i1 = this.getRecordValue(_quizsDatas[indexElement], "q4i1");
		var q4r1 = this.getRecordValue(_quizsDatas[indexElement], "q4r1");
		var q4r2 = this.getRecordValue(_quizsDatas[indexElement], "q4r2");
		var q4r3 = this.getRecordValue(_quizsDatas[indexElement], "q4r3");
		var q4e1 = this.getRecordValue(_quizsDatas[indexElement], "q4e1");
		var q5 = this.getRecordValue(_quizsDatas[indexElement], "q5");
		var q5i1 = this.getRecordValue(_quizsDatas[indexElement], "q5i1");
		var q5r1 = this.getRecordValue(_quizsDatas[indexElement], "q5r1");
		var q5r2 = this.getRecordValue(_quizsDatas[indexElement], "q5r2");
		var q5r3 = this.getRecordValue(_quizsDatas[indexElement], "q5r3");
		var q5e1 = this.getRecordValue(_quizsDatas[indexElement], "q5e1");
		var contenu = "<div align='center' style='font-size:14px;font-weight:bold'>"
				+ nom
				+ "</div>"
				+ "<form id='quizviewform'>"
				+ descr
				+ "<input type='hidden' name='ok' value='"
				+ ok
				+ "'/>"
				+ "<div class='qheader'>"
				+ "<img src="
				+ q1i1
				+ " height='80px' /><br/>1)"
				+ q1
				+ "</div>"
				+ "<div class='qselections'>"
				+ "<input type='checkbox' value='a' name='q1r1'> <span id='q1r1'>"
				+ q1r1
				+ "</span><br/>"
				+ "<input type='checkbox' value='b' name='q1r2'> <span id='q1r2'>"
				+ q1r2
				+ "</span><br/>"
				+ "<input type='checkbox' value='c' name='q1r3'> <span id='q1r3'>"
				+ q1r3
				+ "</span><br/>"
				+ "<span id='q1e1'> <span id='q1r1' style='font-weight:bold;'>"
				+ q1e1
				+ "</span>"
				+ "</div>"
				+ "<div class='qheader'>"
				+ "<img src="
				+ q2i1
				+ " height='80px' /><br/>2)"
				+ q2
				+ "</div>"
				+ "<div class='qselections'>"
				+ "<input type='checkbox' value='a' name='q2r1'> <span id='q2r1'>"
				+ q2r1
				+ "</span><br/>"
				+ "<input type='checkbox' value='b' name='q2r2'> <span id='q2r2'>"
				+ q2r2
				+ "</span><br/>"
				+ "<input type='checkbox' value='c' name='q2r3'> <span id='q2r3'>"
				+ q2r3
				+ "</span><br/>"
				+ "<span id='q2e1'> <span id='q1r1' style='font-weight:bold;'>"
				+ q2e1
				+ "</span>"
				+ "</div>"
				+ "<div class='qheader'>"
				+ "<img src="
				+ q3i1
				+ " height='80px' /><br/>3)"
				+ q3
				+ "</div>"
				+ "<div class='qselections'>"
				+ "<input type='checkbox' value='a' name='q3r1'> <span id='q3r1'>"
				+ q3r1
				+ "</span><br/>"
				+ "<input type='checkbox' value='b' name='q3r2'> <span id='q3r2'>"
				+ q3r2
				+ "</span><br/>"
				+ "<input type='checkbox' value='c' name='q3r3'> <span id='q3r3'>"
				+ q3r3
				+ "</span><br/>"
				+ "<span id='q3e1'> <span id='q1r1' style='font-weight:bold;'>"
				+ q3e1
				+ "</span>"
				+ "</div>"
				+ "<div class='qheader'>"
				+ "<img src="
				+ q4i1
				+ " height='80px' /><br/>4)"
				+ q4
				+ "<br/></div>"
				+ "<div class='qselections'>"
				+ "<input type='checkbox' value='a' name='q4r1'> <span id='q4r1'>"
				+ q4r1
				+ "</span><br/>"
				+ "<input type='checkbox' value='b' name='q4r2'> <span id='q4r2'>"
				+ q4r2
				+ "</span><br/>"
				+ "<input type='checkbox' value='c' name='q4r3'> <span id='q4r3'>"
				+ q4r3
				+ "</span><br/>"
				+ "<span id='q4e1'> <span id='q1r1' style='font-weight:bold;'>"
				+ q4e1
				+ "</span>"
				+ "</div>"
				+ "<div class='qheader'>"
				+ "<img src="
				+ q5i1
				+ " height='80px' /><br/>5)"
				+ q5
				+ "</div>"
				+ "<div class='qselections'>"
				+ "<input type='checkbox' value='a' name='q5r1'> <span id='q5r1'>"
				+ q5r1
				+ "</span><br/>"
				+ "<input type='checkbox' value='b' name='q5r2'> <span id='q5r2'>"
				+ q5r2
				+ "</span><br/>"
				+ "<input type='checkbox' value='c' name='q5r3'> <span id='q5r3'>"
				+ q5r3
				+ "</span><br/>"
				+ "<span id='q5e1'> <span id='q1r1' style='font-weight:bold;'>"
				+ q5e1
				+ "</span>"
				+ "</div>"
				+ "</form><br/>"
				+ "<span id='resultat' style='font-weight:bold;'>&nbsp;</span>"
				+ "<div id='qres1'><img src='resources/images/quiz/1.png' height='80px' /></div>"
				+ "<div id='qres2'><img src='resources/images/quiz/2.png' height='80px' /></div>"
				+ "<div id='qres3'><img src='resources/images/quiz/3.png' height='80px' /></div>"
				+ "<div id='qres4'><img src='resources/images/quiz/4.png' height='80px' /></div>"
				+ "<div id='qres5'><img src='resources/images/quiz/5.png' height='80px' /></div>";
		var contenueQuiz = {
			'contenu' : contenu
		}
		this.getQuizviewContenu().setData(contenueQuiz);

		// Affectation du titre
		// this.quizView.setTitle(_quizsDatas[indexElement]["nom"]);
		this.getHome().push(this.quizView);

	},

	clickQuizViewButton : function() {
		this.calculer();
	},

	/**
	 * Cache ou affiche toutes les réponses
	 * 
	 * @param {}
	 *            cacher
	 */
	cacherMontrerReponses : function(montrer) {
		var display = 'block';
		if (montrer == true) {
			display = 'none';
		}
		if (document.getElementById("q1e1") != null) {
			document.getElementById("q1e1").style.display = display;
			document.getElementById("q2e1").style.display = display;
			document.getElementById("q3e1").style.display = display;
			document.getElementById("q4e1").style.display = display;
			document.getElementById("q5e1").style.display = display;
			document.getElementById("qres1").style.display = 'none';
			document.getElementById("qres2").style.display = 'none';
			document.getElementById("qres3").style.display = 'none';
			document.getElementById("qres4").style.display = 'none';
			document.getElementById("qres5").style.display = 'none';
		}
	},

	calculer : function() {
		// efface les compteurs
		var taille = document.forms['quizviewform'].elements.length;
		// for (var i = 0; i < nums.length; i++)
		// nums[i] = 0;
		var a = document.forms['quizviewform'].elements[0].value.split(',');
		var nbOk = 0;
		var nbKo = 0;
		// le premier element est les reponses
		for (var i = 1; i < taille; i++) {
			var q = document.forms['quizviewform'].elements[i];
			var indexReponseOk = a.indexOf(q["name"]);
			// CORRECT : vrai coché
			if ((indexReponseOk > -1 && q["checked"] == true)) {
				nbOk++;
			}
			// PAS CORRECT : faux , pas coché
			else if (indexReponseOk == -1 && q["checked"] == false) {

			}
			// C'est une mauvaise reponse
			if (indexReponseOk == -1) {
				document.getElementById(q["name"]).style.textDecoration = "line-through";

			}
		}
		// todo prendre parmis le formulaire QuizView a la place de QuizForm
		var nbQ = _quizsDatas[0]["nbq"]
		// var nbTotalReponses = nbQ * 3;
		var nbKo = nbQ - nbOk;
		var message = this.translate("label_quelques_erreurs");
		if (nbKo == 0) {
			label_quelques_erreurs
			message = this.translate("label_aucune_erreur");
		} else if (nbOk == 0) {
			message = this.translate("label_tout_faux");
		} else if (nbKo < nbOk) {
			message = this.translate("label_plus_bonnes");
		}
		document.getElementById("resultat").innerHTML = message + nbOk + " / "
				+ nbQ;
		if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 3 || nbOk == 4) {
			document.getElementById("qres5").style.display = 'none';
		} else {
			document.getElementById("qres5").style.display = 'block';
		}
		if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 3 || nbOk == 5) {
			document.getElementById("qres4").style.display = 'none';
		} else {
			document.getElementById("qres4").style.display = 'block';
		}
		if (nbOk == 0 || nbOk == 1 || nbOk == 2 || nbOk == 4 || nbOk == 5) {
			document.getElementById("qres3").style.display = 'none';
		} else {
			document.getElementById("qres3").style.display = 'block';
		}
		if (nbOk == 0 || nbOk == 1 || nbOk == 3 || nbOk == 4 || nbOk == 5) {
			document.getElementById("qres2").style.display = 'none';
		} else {
			document.getElementById("qres2").style.display = 'block';
		}
		if (nbOk == 2 || nbOk == 3 || nbOk == 4 || nbOk == 5) {
			document.getElementById("qres1").style.display = 'none';
		} else {
			document.getElementById("qres1").style.display = 'block';
		}
		var titre = this.translate("label_results");
		Ext.Msg.show({
					title : titre,
					message : message + "<br/><img src='resources/images/quiz/"
							+ nbOk + ".png' height='80px' />",
					height : 280,
					width : 200,
					minWidth : 200,
					scrollable : true,
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.INFO
				});

	},

	updateTextTranslatedQuizView : function() {
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}
		this.quizView.items.items[2].setText(this
				.translateWithUpperFirstLetter("label_verify"));
	},

	activateQuizView : function(views, eOpts) {
		this.cacherMontrerReponses(true);
	}

});