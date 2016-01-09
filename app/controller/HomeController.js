Ext.define('MieuxTrierANantes.controller.HomeController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			home : 'home_xtype',
			homeZone4_1 : '#homeZone4_1',
			homeZone4_2 : '#homeZone4_2',
			homeZone4_3 : '#homeZone4_3',
			homeZone4_4 : '#homeZone4_4',
			homeZone4_11 : '#homeZone4_11',
			homeZone4_12 : '#homeZone4_12',
			homeZone4_13 : '#homeZone4_13',
			homeZone4_21 : '#homeZone4_21',
			homeZone4_22 : '#homeZone4_22',
			homeZone4_23 : '#homeZone4_23',
			homeZone3_1 : '#homeZone3_1',
			homeZone3_2 : '#homeZone3_2',
			homeContainer : '#homeContainer_xtype',
			homeZone1_bouton : '#homeZone1_bouton',
			homeButton : '#docshomebutton',
			quizHomeButton : '#quizhomebutton',
			globalSearchHomeButton : '#globalsearchhomebutton',
			docsModal : 'docsmodal_xtype',
			homeGlobalSearchFormButton : '#homeGlobalSearchFormButton',
			docsList : 'docslist_xtype',
			homeGlobalSearchFormText : '#homeGlobalSearchFormText',
			settingsFormQuartierTextfield : '#settingsFormQuartierTextfield',
			settingsFormVilleTextfield : '#settingsFormVilleTextfield',
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
			homeZone4_11 : {
				tap : 'onTapHomeZone4_11'
			},
			homeZone4_12 : {
				tap : 'onTapHomeZone4_12'
			},
			homeZone4_13 : {
				tap : 'onTapHomeZone4_13'
			},
			homeZone4_21 : {
				tap : 'onTapHomeZone4_21'
			},
			homeZone4_22 : {
				tap : 'onTapHomeZone4_22'
			},
			homeZone4_23 : {
				tap : 'onTapHomeZone4_23'
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
			/*
			 * quizviewButton : { tap : 'clickQuizViewButton' }, quizView : {
			 * activate : 'activateQuizView' },
			 */
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

		// Windows Phone : on desactive 2 boutons
		if (_isWhindowsPhone()) {
			thisControler.getHomeZone4_1().setDisabled(true);
			thisControler.getHomeZone4_1()
					.setStyle("text-decoration:line-through");
			thisControler.getHomeZone4_2().setDisabled(true);
			thisControler.getHomeZone4_2()
					.setStyle("text-decoration:line-through");
			thisControler.getHomeZone4_3().setDisabled(true);
			thisControler.getHomeZone4_3()
					.setStyle("text-decoration:line-through");
			// Windows Phone : on force la hauteur de la page
			this.getMainView().setHeight(window.innerHeight - 10);
		}

		this.updateTextTranslatedMain();

	},

	// transform object into array
	valuesToArray : function(obj) {
		return Object.keys(obj).map(function(key) {
					return obj[key];
				});
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
		this.getApplication()
				.getController("MieuxTrierANantes.controller.QuizController")
				.show(0);
	},

	onTapHomeZone4_2 : function(button, e, eOpts) {
		this.getApplication()
				.getController("MieuxTrierANantes.controller.QuizController")
				.show(1);
	},

	onTapHomeZone4_11 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(1);
	},
	onTapHomeZone4_12 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(2);
	},
	onTapHomeZone4_13 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(3);
	},
	onTapHomeZone4_21 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(4);
	},
	onTapHomeZone4_22 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(5);
	},
	onTapHomeZone4_23 : function(button, e, eOpts) {
		var mainView = this.getMainView();
		mainView.setActiveItem(6);
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
		// TODO actu : le détail
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
					scrollable : true,
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
			stGlobalLocale = getLocale();
			changeLocale();
			// RM_LA_LANGUE_04
			if (stGlobalLocale == "fr") {
				document.getElementById("flag-fr").style.display = 'none';
				document.getElementById("flag-gb").style.display = 'block';
			} else {
				document.getElementById("flag-fr").style.display = 'block';
				document.getElementById("flag-gb").style.display = 'none';
			}

			this.updateTextTranslatedMain();

		} else {
			stGlobalLocale = getLocale();
			var description = this.getSpecificLabel("about");
			var nom = this.getSpecificLabel("about_titre");
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

	updateTextTranslatedMain : function() {
		var homeContainer = this.getHome().items.items[0].items.items[1];
		var mainView = this.getMainView();
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
		// Les boutons
		this.setButtonLabel(this.getHomeZone4_11(), "label_dechets");
		this.setButtonLabel(this.getHomeZone4_12(), "label_carte");
		this.setButtonLabel(this.getHomeZone4_13(), "label_fiches");
		this.setButtonLabel(this.getHomeZone4_21(), "label_lieux");
		this.setButtonLabel(this.getHomeZone4_22(), "label_a_domicile");
		this.setButtonLabel(this.getHomeZone4_23(), "label_trisac");
		this.setButtonLabel(this.getHomeZone4_1(), "label_quiz_janvier");
		this.setButtonLabel(this.getHomeZone4_2(), "label_quiz_hellfest");
		this.setButtonLabel(this.getHomeZone4_3(),
				"label_home_docs_imprimables");
		var nom1 = this.getRecordValue(_newsDatas[0], "nom");
		this.descr1 = this.getRecordValue(_newsDatas[0], "descr");
		var nom2 = this.getRecordValue(_newsDatas[1], "nom");
		this.descr2 = this.getRecordValue(_newsDatas[1], "descr");
		var nom3 = this.getRecordValue(_newsDatas[2], "nom");
		this.descr3 = this.getRecordValue(_newsDatas[2], "descr");
		html = "<p style='line-height:22px'><a href='#' id='news1'>" + nom1
				+ "</a><br/><a href='#' id='news2'>" + nom2
				+ "</a><br/><a href='#' id='news3'>" + nom3 + "</a></p>"
		this.getHomeZone3_1().setHtml(html);
		this.getHome().setDefaultBackButtonText(this
				.translateWithUpperFirstLetter("label_retour"));
	},

	updateTextTranslatedNews : function() {
	},

	// Met le libelle dans le bouton (le bouton a un template avec le nom
	// data.label)
	setButtonLabel : function(button, label) {
		var dataTemp = {
			"label" : this.translateWithUpperFirstLetter(label)
		};
		button.setData(dataTemp)
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
	 * La méthode réalisant le filtre sur la recherche globale
	 */
	filterElements : function() {

		// Crée la page si elle n'existe pas encore
		if (this.globalSearchResult == null) {
			this.globalSearchResult = Ext
					.create("MieuxTrierANantes.view.home.GlobalSearchResult");
		}
		var temp = "";
		var locale = getLocale();
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

		var texteRecherche = this.getHomeGlobalSearchFormText().getValue();
		var arrayResultats = _getGlobalSearchResult(texteRecherche);

		var store = this.getHomeGlobalSearchList().getStore();
		if (store == null) {
			var store = Ext.create('MieuxTrierANantes.store.GlobalSearchStore');
			this.getHomeGlobalSearchList().setStore(store);
		}

		store.removeAll();
		store.setData(arrayResultats);
		store.sync();
	},

	/**
	 * Crée le store
	 */
	onShowGlobalSearchResultList : function() {
		this.updateTextTranslatedSearchResultList();
	},

	updateTextTranslatedSearchResultList : function() {
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

	itempTapHomeGlobalSearchList : function(list, index, node, record) {
		if (record.data["type"] == "Quiz") {
			this
					.getApplication()
					.getController("MieuxTrierANantes.controller.QuizController")
					.show(record.data["code"]);
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