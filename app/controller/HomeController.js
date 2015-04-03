Ext.define('MieuxTrierANantes.controller.HomeController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			home : 'home_xtype',
			homeZone4_1 : '#homeZone4_1',
			homeZone4_2 : '#homeZone4_2',
			homeZone4_3 : '#homeZone4_3',
			homeZone4_4 : '#homeZone4_4',
			docsModal : 'docsmodal_xtype',
			homeZone2FormButton : '#homeZone2FormButton',
			quizView : 'quizview_xtype',
			docsModal : 'docsmodal_xtype',
			docsList : 'docslist_xtype'
		},
		control : {
			home : {
				show : 'onShowHome'
			},
			homeZone4_1 : {
				tap : 'onTapHomeZone4_1'
			},
			homeZone4_2 : {
				tap : 'onTapHomeZone4_2'
			},
			homeZone4_3 : {
				tap : 'onTapHomeZone4_3'
			},
			homeZone4_4 : {
				tap : 'onTapHomeZone4_4'
			},
			homeZone2FormButton : {
				tap : 'onTapHomeZone2FormButton'
			},
			docsModal : {
				show : 'onShowDocsModal'
			},
			docsList : {
				show : 'onShowDocsList'
			}
		}

	},

	onShowHome : function() {
		var thisControler = this;

		// About

		// Actualités
		Ext.create('MieuxTrierANantes.store.HomeStore', {
					listeners : {
						load : function(self, records) {
							// On valorise le contenu de la zone
							// actualité
							/*
							 * thisControler.getHome().items.items[0].items.items[1].items.items[2].items.items[0]
							 * .setData(records[0].getData());
							 */
						}
					}
				});
	},

	onTapHomeZone2FormButton : function() {
		var thisControler = this;

	},
	onTapHomeZone4_1 : function(button, e, eOpts) {
		var thisControler = this;
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}
		// Bind the record onto the show contact view
		this.quizView.items.items[0].setData({
			nom : "Quiz janvier 2015 (5 questions)",
			descr : "Tester vos connaissances sur le tri sur Nantes Métropole. Quiz spécial janvier (5 questions).",
			image : "resources/images/quiz/issiontrix-quiz-1.jpg",
			nbq : "5",
			q1 : "Que faire de la couronne que j'ai gagné ? Elle est propre.",
			q1r1 : "je la laisse sur ma tête",
			q1r2 : "le carton/papier ne se recycle pas",
			q1r3 : "je la recycle (bac jaune ou sac jaune)",
			q1i1 : "resources/images/quiz/couronne.png",
			q1e1 : "Tout le carton/papier se recycle, sauf s'il est souillé (sali)",
			q1ok : "a",
			q2 : "La fève de la galette...",
			q2r1 : "j'avale",
			q2r2 : "je jette ! (sac bleu ou bac bleu)",
			q2r3 : "je recycle !",
			q2i1 : "resources/images/quiz/issiontrix-feve-1.png",
			q2e1 : "Les fèves sont en porcelaine. Donc elle se jette (c'est uniquement le verre ménager qui se recycle).",
			q2ok : "a",
			q3 : "Le logo 'point vert' de Eco-emballage signifie...",
			q3r1 : "que l'emballage est recyclable",
			q3r2 : "que l'emballage est fabriqué à partir de matières recyclables",
			q3r3 : "que le fabriquant verse une contribution à Eco-Emballage, Adelphe ou Cyclamed",
			q3i1 : "resources/images/quiz/point-vert.png",
			q3e1 : "L'ancien logo 'point vert' signifie que le fabriquant verse une contribution à l'une de ces trois sociétés : Eco-Emballage, Adelphe ou Cyclamed; ceci ne signifie pas que le produit est recyclable.",
			q3ok : "a",
			q4 : "Le nouveau logo Triman apparu en janvier 2015.",
			q4r1 : "signifie qu'il existe des consignes de tri",
			q4r2 : "que le fabricant paye pour avoir ce logo",
			q4r3 : "que l'emballage est fabriqué à partir de matières recyclables",
			q4i1 : "resources/images/quiz/triman.png",
			q4e1 : "Le nouveau logo 'Triman' représente une personne tendant la main vers trois flèches. Il signifie qu'il existe des consignes de tri",
			q4ok : "a",
			q5 : "Que faire du bouchon en liège ?",
			q5r1 : "Je le recycle (bac jaune ou sac jaune)",
			q5r2 : "Je jette (bac bleu ou sac bleu) ou je le donne à l'asso Les Bouchons d'Amour",
			q5r3 : "Je jette (bac bleu ou sac bleu) ou je le donne à l'association Action Cancer 44",
			q5i1 : "resources/images/quiz/bouchon-1.png",
			q5e1 : "Pour les bouchons en liège (qui ne se recyclent pas) c'est l'association 'Action Cancer 44' qui les récupèrent.",
			q5ok : "a"
		});
		this.getHome().push(this.quizView);
	},
	onTapHomeZone4_2 : function(button, e, eOpts) {
		var thisControler = this;
	},
	onTapHomeZone4_3 : function(button, e, eOpts) {

		// Crée la page si elle n'existe pas encore
		if (this.docsModal == null) {
			this.docsModal = Ext
					.create("MieuxTrierANantes.view.home.DocsModal");
		}
		this.getHome().push(this.docsModal);
	},
	onTapHomeZone4_4 : function(button, e, eOpts) {
		var thisControler = this;
	},

	onShowDocsModal : function() {
		if (this.getDocsList().getStore() == null) {
			var homecollectmodStore = Ext
					.create('MieuxTrierANantes.store.DocsStore');
			this.getDocsList().setStore(homecollectmodStore);
		}
	},

	onShowDocsList : function() {
		var temp = 8;
	}
});