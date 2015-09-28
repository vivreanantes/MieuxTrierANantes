Ext.define('MieuxTrierANantes.controller.HomeController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			home : 'home_xtype',
			homeZone4_1 : '#homeZone4_1',
			homeZone4_2 : '#homeZone4_2',
			homeZone4_3 : '#homeZone4_3',
			homeZone4_4 : '#homeZone4_4',
			homeZone3_1 : '#homeZone3_1',
			homeZone3_2 : '#homeZone3_2',
			homeContainer : '#homeContainer_xtype',
			homeZone1_bouton : '#homeZone1_bouton',
			homeButton : '#docshomebutton',
			quizHomeButton : '#quizhomebutton',
			globalSearchHomeButton : '#globalsearchhomebutton',
			docsModal : 'docsmodal_xtype',
			homeGlobalSearchFormButton : '#homeGlobalSearchFormButton',
			quizView : 'quizview_xtype',
			docsList : 'docslist_xtype',
			homeGlobalSearchFormText : '#homeGlobalSearchFormText',
			settingsFormQuartierTextfield : '#settingsFormQuartierTextfield',
			settingsFormVilleTextfield : '#settingsFormVilleTextfield',
			quizviewButton : '#quizview_button',
			settingsFormButton : '#settingsFormButton',
			globalSearchResult : 'globalSearchResult_xtype',
			homeGlobalSearchList : 'homeglobalsearchlist_xtype',
			mainView : 'main_xtype',
			nav : 'navigation'
		},
		control : {
			home : {
				show : 'onShowHome',
				initialize : 'onInitializeHome',
				activate : 'onActivateHome'

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
			homeZone3_1 : {
				tap : 'onTapHomeZone3_1'
			},
			homeZone3_2 : {
				tap : 'onTapHomeZone3_2'
			},
			homeZone1_bouton : {
				tap : 'onTapHomeZone1_bouton'
			},
			homeGlobalSearchFormText : {
				keyup : 'onKeyUpHomeGlobalSearchFormText'
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
				activate : 'activateQuizView'
			},
			settingsFormButton : {
				tap : 'clickSettingsFormButton'
			},

			globalSearchResult : {
				show : 'onShowGlobalSearchResultList'
			},

			homeGlobalSearchList : {
				itemtap : "itempTapHomeGlobalSearchList"
			},
			homeButton : {
				tap : 'onHomeButton2'
			},
			quizHomeButton : {
				tap : 'onHomeButton2'
			},
			globalSearchHomeButton : {
				tap : 'onHomeButton2'
			},
			nav : {
				pop : 'addBackButtonListener',
				initialize : 'initializeNav'
			}
		}

	},

	onActivateHome : function(newActiveItem, container, oldActiveItem, eOpts) {

		// TRELLO_EXTERNE tempo à tester.
		var t = location.search.substring(1).split('&');
		for (var i = 0; i < t.length; i++) {
			var x = t[i].split('=');
			this.showActiveItemInPage(x[0], x[1]);
		}

		if (container.getActiveItem().id.indexOf("homeContainer_xtype") == -1) {
			var homeView = this.getHome();
			homeView.getNavigationBar().fireEvent('back', this);
		}
	},
	onShowHome : function() {
		var thisControler = this;
		// this.getHome().push(this.homeContainer);

		// Actualités
		Ext.create('MieuxTrierANantes.store.HomeStore', {
			listeners : {
				load : function(self, records) {
					var i = 28;
					// var j = records[0];
					// On valorise le contenu de la zone actualité UNIQUEMENT si
					// on a pu récupérée le record.
					if (typeof records[0] != 'undefined') {
						var nom1 = records[0].getData()["nom1"];
						var nom2 = records[0].getData()["nom2"];
						var nom3 = records[0].getData()["nom3"];
						thisControler.descr1 = records[0].getData()["descr1"];
						thisControler.descr2 = records[0].getData()["descr2"];
						thisControler.descr3 = records[0].getData()["descr3"];
						html = "<p style='line-height:22px'><a href='#' id='news1'>"
								+ nom1
								+ "</a><br/><a href='#' id='news2'>"
								+ nom2
								+ "</a><br/><a href='#' id='news3'>"
								+ nom3 + "</a></p>"
						thisControler.getHomeZone3_1().setHtml(html);
					}
				}
			}
		});

		/*
		 * if (this.getHomeGlobalSearchList().getStore() == null) { var
		 * searchStore = Ext.create('MieuxTrierANantes.store.SearchStore');
		 * this.getHomeGlobalSearchList().setStore(searchStore);
		 * searchStore.load(); } var store =
		 * this.getHomeGlobalSearchList().getStore(); if (store) {
		 * store.removeAll(); var datas = _garbagesDatas; store.setData(datas);
		 * store.sync(); }
		 */
	},

	onInitializeHome : function() {

	},

	onHomeButton2 : function() {
		// Si je suis sur la page 'home', je mets le bouton back
		if (this.getMainView().getActiveItem().id.indexOf("home_xtype") != -1) {
			if (this.getHome().getActiveItem().id
					.indexOf("homeContainer_xtype") == -1) {
				var homeView = this.getHome();
				homeView.getNavigationBar().fireEvent('back', this);
			}
		}
	},

	onTapHomeZone4_1 : function(button, e, eOpts) {
		this.show2(0);
	},

	onTapHomeZone4_2 : function(button, e, eOpts) {
		this.show2(1);
	},

	show2 : function(indexElement) {
		var thisControler = this;
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}
		this.quizView.items.items[1].setData(_quizsDatas[indexElement]);
		// Affectation du titre
		// this.quizView.setTitle(_quizsDatas[indexElement]["nom"]);
		this.getHome().push(this.quizView);
	},

	onTapHomeZone4_3 : function(button, e, eOpts) {
		this.showDocList();
	},

	onTapHomeZone4_4 : function(button, e, eOpts) {
		e.target = {
			href : "http://mieuxtrieranantes.fr/docs/listing_reemploi.xls"
		};

		// this.showDocList();
		_gestionLien(e);
	},

	showDocList : function() {
		// Crée la page si elle n'existe pas encore
		if (this.docsModal == null) {
			this.docsModal = Ext
					.create("MieuxTrierANantes.view.home.DocsModal");
		}
		this.getHome().push(this.docsModal);

	},

	/**
	 * Ouvre une fenêtre de détail d'une actualité.
	 */
	onTapHomeZone3_1 : function(button, e, eOpts) {
		if (e.target.id == "news1") {
			var desc = this.descr1;
		} else if (e.target.id == "news2") {
			var desc = this.descr2;
		} else if (e.target.id == "news3") {
			var desc = this.descr3;
		}
		var nom = e.target.innerText;
		Ext.Msg.show({
					title : nom,
					message : desc,
					height : 400,
					width : 300,
					// Ceci pose un pb sous IE
					// scrollable : true,
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.INFO
				});
	},
	/**
	 * Un quiz
	 */
	onTapHomeZone3_2 : function(button, e, eOpts) {
		// Crée la page si elle n'existe pas encore
		if (this.quizView == null) {
			this.quizView = Ext.create("MieuxTrierANantes.view.home.QuizView");
		}

		if (e.target.id == "buttonquiz1") {
			this.quizView.items.items[0].setData(_quizsDatas[0]);
		} else if (e.target.id == "buttonquiz2") {
			this.quizView.items.items[0].setData(_quizsDatas[1]);
		}

		// Affectation du titre
		this.quizView.setTitle(_quizsDatas[0]["nom"]);
		this.getHome().push(this.quizView);
	},

	onTapHomeZone1_bouton : function(button, e, eOpts) {

		if (e.target.name == "settings") {
			// Crée la page si elle n'existe pas encore
			if (this.settingsView == null) {
				this.settingsView = Ext
						.create("MieuxTrierANantes.view.home.SettingsView");
			}
			this.getHome().push(this.settingsView);
		} else if (e.target.name == "flag") {
			// Si pas défini ou si francais on met anglais, sinon on met en
			// francais.

			var mainView = this.getMainView();
			// mainView.items.items[2].setTitle();

			if (typeof stGlobalLocale == 'undefined') {
				stGlobalLocale = "fr";
			}
			if (stGlobalLocale == "fr") {
				stGlobalLocale = "en";
				document.getElementById("flag-fr").style.display = 'none';
				document.getElementById("flag-gb").style.display = 'block';
			} else {
				stGlobalLocale = "fr";
				document.getElementById("flag-fr").style.display = 'block';
				document.getElementById("flag-gb").style.display = 'none';
			}
			var homeContainer = this.getHome().items.items[0].items.items[1];
			homeContainer.items.items[0].items.items[0].setHtml(this
					.translate("label_tpl_aider"));
			homeContainer.items.items[2].items.items[1].setPlaceHolder(this
					.translate("label_global_button_placeholder"));
			mainView.getTabBar().items.items[1].setText(this
					.translateWithUpperFirstLetter("label_dechets"));
			mainView.getTabBar().items.items[2].setText(this
					.translateWithUpperFirstLetter("label_carte"));
			mainView.getTabBar().items.items[3].setText(this
					.translateWithUpperFirstLetter("label_fiches"));
			mainView.getTabBar().items.items[4].setText(this
					.translateWithUpperFirstLetter("label_lieux"));
			mainView.getTabBar().items.items[5].setText(this
					.translateWithUpperFirstLetter("label_a_domicile"));
			mainView.getTabBar().items.items[6].setText(this
					.translateWithUpperFirstLetter("label_trisac"));
			// TODO ceci ne fonctionne pas traduction boutons
			homeContainer.items.items[5].items.items[0].setTpl(this
					.translate("label_home_button_0"));
			homeContainer.items.items[5].items.items[1].setTpl(this
					.translate("label_home_button_1"));
			homeContainer.items.items[5].items.items[2].setTpl(this
					.translate("label_home_button_2"));
			homeContainer.items.items[5].items.items[3].setTpl(this
					.translate("label_home_button_3"));

		} else {

			var description = _labelsDatas["about"][stGlobalLocale];
			var nom = _labelsDatas["about_titre"]["fr"];
			Ext.Msg.show({
						title : nom,
						message : description,
						height : 400,
						width : 300,
						// Ceci pose un pb sous IE
						// scrollable : true,
						buttons : Ext.Msg.OK,
						icon : Ext.Msg.INFO
					});
		}
	},

	onShowDocsModal : function() {
		if (this.getDocsList().getStore() == null) {
			var store = Ext.create('MieuxTrierANantes.store.DocsStore');
			this.getDocsList().setStore(store);
		}
	},

	onShowDocsList : function() {
		var temp = 8;
	},

	onTapSearchButton : function() {
		this.filterElements();
	},

	onKeyUpSearchButton : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.filterElements();
		}
	},
	onKeyUpHomeGlobalSearchFormText : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.filterElements();
			// TODO cacher le clavier
			// Ext.getCmp('garbagesFormButton').blur();
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

		// Crée la page si elle n'existe pas encore
		if (this.globalSearchResult == null) {
			this.globalSearchResult = Ext
					.create("MieuxTrierANantes.view.home.GlobalSearchResult");
		}
		var temp = "";
		var locale = this.getLocale();
		if (locale == "en") {
			temp = "_en";
		}
		this
				.getHomeGlobalSearchList()
				.setItemTpl("<img src='resources/images/{image}' height='40px' align='left' />&nbsp;<i>{type"
						+ temp
						+ "}</i>&nbsp;<strong>{nom"
						+ temp
						+ "}</strong>");

		this.getHome().push(this.globalSearchResult);

		var texteNoAccents = _utilRetireAccentEtMinuscule(this
				.getHomeGlobalSearchFormText().getValue());

		var store = this.getHomeGlobalSearchList().getStore();
		if (store == null) {
			var store = Ext.create('MieuxTrierANantes.store.GlobalSearchStore');
			this.getHomeGlobalSearchList().setStore(store);
		}
		var tempo = [];
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashGarbagesDatas,
				_garbagesDatas, texteNoAccents, locale, "garbages");
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashFichesDatas,
				_infosDatas, texteNoAccents, locale, "fiches");
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashDocsDatas, _docsDatas,
				texteNoAccents, locale, "docs");
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashStructuresDatas,
				_structures1Datas, texteNoAccents, locale, "structures");
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashTrisacsDatas,
				_structures1Datas, texteNoAccents, locale, "trisacs");
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashADomicileDatas,
				_homeCollectModsDatas, texteNoAccents, locale,
				"homecollectmods");

		// utilPushArray(_garbagesDatas, tempo);
		// utilPushArray(_infosDatas, tempo);
		// utilPushArray(_structures1Datas, tempo);
		// utilPushArray(_quizsDatas, tempo);
		/*
		 * var cles = _hashGarbagesDatas[0][texteNoAccents]; if (cles !=
		 * undefined) { var codesDechets = cles.split(','); var taille =
		 * codesDechets.length; for (var j = 1; j < taille; j++) { var
		 * codeDechet = codesDechets[j]; for (var k = 0; k <
		 * _garbagesDatas.length; k++) { if (_garbagesDatas[k]["code"] ==
		 * codeDechet) { // _garbagesDatas[k]["type"] = "Déchet";
		 * tempo.push(_garbagesDatas[k]); } } } }
		 */
		store.removeAll();
		store.setData(tempo);
		store.sync();
	},

	/**
	 * Crée le store
	 */
	onShowGlobalSearchResultList : function() {
		this.updateTextTranslated();
	},

	updateTextTranslated : function() {
		// Crée la page si elle n'existe pas encore
		if (this.globalSearchResult == null) {
			this.globalSearchResult = Ext
					.create("MieuxTrierANantes.view.home.GlobalSearchResult");
		}
		this.globalSearchResult.setTitle(this.translate("label_results"));
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
		// this.cacherMontrerReponses(false);
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
		var message = "Quelques erreurs.";
		if (nbKo == 0) {
			message = "Bravo, aucune erreur ! ";
		} else if (nbOk == 0) {
			message = "Tout faux ! ";
		} else if (nbKo < nbOk) {
			message = "Plus de bonnes que de mauvaises réponses : ";
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

		Ext.Msg.show({
					title : "Résultats",
					message : message + "<br/><img src='resources/images/quiz/"
							+ nbOk + ".png' height='80px' />",
					height : 280,
					width : 200,
					minWidth : 200,
					// Ceci pose un pb sous IE
					// scrollable : true,
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.INFO
				});

	},

	activateQuizView : function(views, eOpts) {
		this.cacherMontrerReponses(true);
	},

	itempTapHomeGlobalSearchList : function(list, index, node, record) {
		if (record.data["type"] == "Quiz") {
			this.show2(record.data["code"]);
		} else {
			this.showActiveItemInPage(record.data["page"], record.data["code"]);
		}
	},

	// http://blog.dev001.net/post/95273889750/sencha-touch-integrating-android-back-button-by
	initializeNav : function() {
		var viewport = this;

		// listen to hardware back button
		document.addEventListener("backbutton", function() {
					var nav = viewport.getNav();
					if (nav.getInnerItems().length > 1)
						nav.getNavigationBar().fireEvent('back');
					else
						navigator.app.exitApp();
				}, false);

		// HACK: override back button listener
		this.getNav().getNavigationBar().removeListener('back',
				nav.onBackButtonTap, nav);
		this.addBackButtonListener();
	},

	addBackButtonListener : function() {
		var nav = this.getNav();
		var navBar = nav.getNavigationBar();
		navBar.on({
					back : nav.onBackButtonTap,
					scope : nav,
					single : true
				});
	}

});