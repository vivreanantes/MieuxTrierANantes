Ext.define('MieuxTrierANantes.controller.HomeController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			home : 'home_xtype',
			homeZone4_1 : '#homeZone4_1',
			homeZone4_2 : '#homeZone4_2',
			homeZone4_3 : '#homeZone4_3',
			homeZone1_bouton : '#homeZone1_bouton',
			docsModal : 'docsmodal_xtype',
			homeGlobalSearchFormButton : '#homeGlobalSearchFormButton',
			quizView : 'quizview_xtype',
			docsModal : 'docsmodal_xtype',
			docsList : 'docslist_xtype',
			homeGlobalSearchList : 'homeglobalsearchlist_xtype',
			homeGlobalSearchFormText : '#homeGlobalSearchFormText',
			settingsFormQuartierTextfield : '#settingsFormQuartierTextfield',
			settingsFormVilleTextfield : '#settingsFormVilleTextfield',
			quizviewButton : '#quizview_button',
			settingsFormButton : '#settingsFormButton'
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
			homeZone1_bouton : {
				tap : 'onTapHomeZone1_bouton'
			},
			homeGlobalSearchFormButton : {
				tap : 'onTapSearchButton',
				keyup : 'onKeyUpSearchButton',
				change : "onChangeSearchButton",
				clearicontap : "onChangeSearchButton"
			},
			docsModal : {
				show : 'onShowDocsModal'
			},
			docsList : {
				show : 'onShowDocsList'
			},
			homeGlobalSearchList : {
				show : 'onShowHomeGlobalSearchList'
			},
			settingsFormQuartierTextfield : {
				initialize : 'setOptionsSousZones'
			},
			settingsFormVilleTextfield : {
				initialize : 'setOptionsZones'
			},
			quizviewButton : {
				tap : 'clickQuizViewButton'
			},
			quizView : {
				show : 'showQuizView'
			},
			settingsFormButton : {
				tap : 'clickSettingsFormButton'
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
							var i = 28;
							// var j = records[0];
							thisControler.getHome().items.items[0].items.items[1]
									.setData(records[0].getData());
							// On valorise le contenu de la zone
							// actualité
							/*
							 * thisControler.getHome().items.items[0].items.items[1].items.items[2].items.items[0]
							 * .setData(records[0].getData());
							 */
						}
					}
				});

		if (this.getHomeGlobalSearchList().getStore() == null) {
			var searchStore = Ext.create('MieuxTrierANantes.store.SearchStore');
			this.getHomeGlobalSearchList().setStore(searchStore);
			// homecollectmodStore.load();
		}
		var store = this.getHomeGlobalSearchList().getStore();
		if (store) {
			store.removeAll();
			var datas = _garbagesDatas;
			store.setData(datas);
			store.sync();
		}

		var o = 8;
	},

	onTapHomeZone4_1 : function(button, e, eOpts) {
		var thisControler = this;
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}
		this.quizView.items.items[0].setData(_quizsDatas["quiz1"]);
		// Affectation du titre
		this.quizView.setTitle(_quizsDatas["quiz1"]["nom"]);
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

	onTapHomeZone1_bouton : function(button, e, eOpts) {

		if (e.target.name == "settings") {
			// Crée la page si elle n'existe pas encore
			if (this.settingsView == null) {
				this.settingsView = Ext
						.create("MieuxTrierANantes.view.home.SettingsView");
			}
			this.getHome().push(this.settingsView);
		} else {
			var description = _labelsDatas["about"]["fr"];
			var nom = _labelsDatas["about_titre"]["fr"];
			Ext.Msg.show({
						title : nom,
						message : description,
						height : 400,
						width : 300,
						scrollable : true,
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.INFO
					});
		}
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
	},

	onShowHomeGlobalSearchList : function() {
	},

	onTapSearchButton : function() {
		this.filterElements();
	},

	onKeyUpSearchButton : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.filterElements();
		}
	},

	/**
	 * Filtre en fonction de la chaine saisie
	 */
	onChangeSearchButton : function() {
		this.filterElements();
	},

	/**
	 * La métrhode réalisant le filtre sur la recherche globale
	 */
	filterElements : function() {

		var store = this.getHomeGlobalSearchList().getStore();
		var texteSansAccents = _utilRetireAccent(this
				.getHomeGlobalSearchFormText().getValue());

		// true sinon cela plante dans la version android
		store.clearFilter(true);
		if (store != null) {
			thisController = this;

			// Filtrer sans casse, en cherchant la chaine dans le nom, en
			// filtrant sur la catégorie
			var filterGlobalSearch = Ext.create('Ext.util.Filter', {
						filterFn : function(item) {
							var escaperegex = Ext.String.escapeRegex;
							var texttest = new RegExp(
									escaperegex(texteSansAccents), 'ig');
							var motsCles_sansAccents = item.data["mots_cles"];
							return (texttest.test(motsCles_sansAccents));
						}
					});
			store.filter(filterGlobalSearch);
		}
	},

	clickSettingsFormButton : function(button, e) {
		// http://docs.sencha.com/touch/2.3.1/#!/api/Ext.data.proxy.LocalStorage
		var store = Ext.create('Ext.data.Store', {
					model : "MieuxTrierANantes.model.SettingsModel"
				});

		// loads any existing Search data from localStorage
		store.load();

		// now add some Searches
		store.add({
					mail : 'Sencha Touch'
				});
		store.add({
					mail : 'Ext JS'
				});

		// finally, save our Search data to localStorage
		store.sync();

	},

	clickQuizViewButton : function() {
		this.calculer();
		this.cacherMontrerReponses(false);
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
		}
	},

	calculer : function() {
		// efface les compteurs
		var taille = document.forms['quizviewform'].elements.length;
		//for (var i = 0; i < nums.length; i++)
		//	nums[i] = 0;
		var a = document.forms['quizviewform'].elements[0].value.split(',');
		var nbOk = 0;
		var nbKo = 0;
		// le premier element est les reponses
		for (var i = 1; i < taille; i++) {
			var q = document.forms['quizviewform'].elements[i];
			var indexReponseOk = a.indexOf(q["name"]);
			if ((indexReponseOk > -1 && q["checked"] == true)
					|| (indexReponseOk == -1 && q["checked"] == false)) {
				nbOk++;
			} else {
				nbKo++;
			}
			// C'est une mauvaise reponse
			if (indexReponseOk == -1) {
				document.getElementById(q["name"]).style.textDecoration = "line-through";

			}
		}
		var message = "Quelques erreurs";
		if (nbKo == 0) {
			message = "Bravo, aucune erreur !";
		} else if (nbOk == 0) {
			message = "Tout faut !";
		} else if (nbKo < nbOk * 3) {
			message = "Plus de bonnes que de mauvaises réponses";
		}
		document.getElementById("resultat").innerHTML = message;
	},

	showQuizView : function() {
		this.cacherMontrerReponses(true);
	}

});