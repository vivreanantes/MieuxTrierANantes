/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define('MieuxTrierANantes.controller.HomeCollectModsController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			homeCollectModsView : 'homecollectmods_xtype',
			homeCollectModsList : 'homecollectmodslist_xtype',
			homeCollectModDetail : 'homecollectmodsdetails_xtype',
			homeCollectModsForm : 'homecollectmodsform_xtype',
			homeCollectModsFormText : '#homeCollectModsFormText',
			homeCollectModsFormButton : '#homeCollectModsFormButton',
			homeButton : '#homecollectmodshomebutton',
			mainView : 'main_xtype'
		},
		control : {

			homeCollectModDetail : {},

			homeCollectModsList : {
				itemtap : 'showHomeCollectModsDetail'
			},

			homeCollectModsView : {
				// On maitient ce control pour pouvoir faire
				// this.getHomeCollectModsView().
				show : 'onShowHomeCollectModsView',
				activate : 'onActivateHomeCollectModsList'
			},

			homeCollectModsFormText : {
				keyup : 'onKeyUpHomeCollectModsFormText'
				// change : 'onHomeCollectModStoreFilter',
				// clearicontap : 'onHomeCollectModStoreFilter'
			},
			homeCollectModsFormButton : {
				tap : 'onHomeCollectModStoreFilter'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'homecollectmodsdetails_xtype button' : {
				tap : 'onTapLinkButton'
			},
			homeButton : {
				tap : 'onHomeButton'
			}
		}
	},

	/**
	 * Renvoie une information
	 */
	getHomeCollectMods : function(idElement) {

		var dcv = "";
		var jcbj = "";
		var mco = "";
		var mots_cles = "";
		var src = "";
		var cons = "";

		for (j in _homeCollectModsDatas) {
			if (_homeCollectModsDatas[j]["code"] === idElement) {
				dcv = _homeCollectModsDatas[j]["dcv"];
				jcbj = _homeCollectModsDatas[j]["jcbj"];
				mco = _homeCollectModsDatas[j]["mco"];
				mots_cles = _homeCollectModsDatas[j]["mots_cles"];
				src = _homeCollectModsDatas[j]["src"];
				cons = _homeCollectModsDatas[j]["cons"];
			}
		}
		return {
			"code" : idElement,
			"dcv" : dcv,
			"jcbj" : jcbj,
			"mco" : mco,
			"mots_cles" : mots_cles,
			"src" : src,
			"cons" : cons
		}
	},

	onActivateHomeCollectModsList : function() {
		var mainView = this.getMainView();
		if (mainView.active != null) {

			var myElement = this.getHomeCollectMods(mainView.active);
			this.showDetail(myElement);
			mainView.active = null;

		}
	},

	onKeyUpHomeCollectModsFormText : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.onHomeCollectModStoreFilter();
		}
	},

	onShowHomeCollectModsView : function() {
		// this.miseAJourDatasSelonHash(null);

		if (this.getHomeCollectModsList().getStore() == null) {
			var store = Ext
					.create('MieuxTrierANantes.store.HomeCollectModStore');
			this.getHomeCollectModsList().setStore(store);
		}
	
	},
	
	updateTextTranslated : function() {
		// this.homeCollectModDetail.setTitle(this.translate("label_collete_a_domicile"));
	},


	/**
	 * Met à jour le data du store selon le hash (compare les 2 premiers
	 * caractères
	 */
	miseAJourDatasSelonHash : function(texteSansAccents) {
		if (texteSansAccents == null) {
			var value = this.getHomeCollectModsFormText().getValue();
			texteSansAccents = _utilRetireAccentEtMinuscule(value);
		}
		var datas = [];
		if (texteSansAccents.length > 1) {
			datas = this.getHomeCollectModsForHash(texteSansAccents
					.substr(0, 2));
		}
		var store = this.getHomeCollectModsList().getStore();
		if (store) {
			store.removeAll();
			store.setData(datas);
			store.sync();
		}
	},

	getHomeCollectModsForHash : function(hash) {

		var arItemsToShow = new Array();
		// var input = _hashHomeCollectModsDatas;
		var codes = _hashHomeCollectModsDatas[hash];
		if (codes != null) {
			// for (var type in input) {
			// type = "aa", input[type][0] = "3793
			for (var i = 0; i < codes.length; i++) {
				var code = codes[i];
				var element = _homeCollectModsDatas[code];
				if (element != null) {
					arItemsToShow.push(element[0]);
					// store.add(element);
				}
			}
		}
		return arItemsToShow;
	},

	showHomeCollectModsDetail : function(list, index, node, record) {
		this.showDetail(record.data);
	},

	showDetail : function(record) {
		if (record) {
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('MieuxTrierANantes.view.homecollectmods.HomeCollectModsDetails');
				this.homeCollectModDetail.items.items['0'].setTpl('');
			}
			this.updateTextTranslated();

			// Récupère les modes de collecte
			var thisController = this;
			var arModesDeCollecte = record["mco"].split(',');
			var arItemsToShow = new Array();

			for (var j = 0; j < _collectModsDatas.length; j++) {
				for (var i = 0; i < arModesDeCollecte.length; i++) {
					if (_collectModsDatas[j]["code"] === arModesDeCollecte[i]) {
						var imageValue = _collectModsDatas[j]["image"];
						var codeValue = "collectMods_xtype" + _SEPARATOR
								+ _collectModsDatas[j]["code"];
						var libelleValue = _stringUpperFirstLetter(_collectModsDatas[j]["libelleBouton"]);
						arItemsToShow.push({
									image : imageValue,
									code : codeValue,
									label : libelleValue
								});
					}
				}
			}
			var nbGarbagesdetailsCollectmodsMax = 4;
			thisController.setDataInButtons(
					thisController.homeCollectModDetail.items.items['1'],
					"homecollectmodsdetails_collectmod", arItemsToShow,
					nbGarbagesdetailsCollectmodsMax);

			// Ajout des conseils
			var conseils = record["cons"];
			var nbElementsMax = 2; // la page HomeCollectModsDetails.js affiche
			// 2 éléments
			var arsConseils = this.getArrayItemsToShowAdvices(conseils);
			/*
			 * for (var j = 0; j < arsConseils.length; j++) { arsConseils }
			 */
			this.setDatasConseils(
					this.homeCollectModDetail.items.items['0'].items,
					"homecollectmodsdetails_conseils", "nom", "categ",
					arsConseils.les_libelles, arsConseils.les_boutons,
					arsConseils.le_html, nbElementsMax);

			// Bind the record onto the show contact view
			this.homeCollectModDetail.items.items['0'].items.items['0']
					.setData(record);

			// Push the show contact view into the navigation view
			this.getHomeCollectModsView().push(this.homeCollectModDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les rues, selon la chaine saisie.
	 */
	old_onHomeCollectModStoreFilter : function() {
		var value = this.getHomeCollectModsFormText().getValue();
		var texteSansAccents = _utilRetireAccentEtMinuscule(value);

		this.miseAJourDatasSelonHash(texteSansAccents);
		var store = this.getHomeCollectModsList().getStore();
		// true sinon cela plante dans la version android
		store.clearFilter(true);
		if (store != null) {
			thisController = this;

			// Filtrer sans casse, en cherchant la chaine dans le nom, en
			// filtrant sur la catégorie
			var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
						filterFn : function(item) {
							var escaperegex = Ext.String.escapeRegex;
							var texttest = new RegExp(
									escaperegex(texteSansAccents), 'ig');
							var nomVoie_sansAccents = item.data["mots_cles"];
							return (texttest.test(nomVoie_sansAccents));
						}
					});
			store.filter(filterHomeCollectMod);
		}
	},

	/**
	 * Filtre sur les rues, selon la chaine saisie.
	 */
	onHomeCollectModStoreFilter : function() {
		var value = this.getHomeCollectModsFormText().getValue();
		var texteSansAccents = _utilRetireAccentEtMinuscule(value);
		var tempo = [];
		var locale = this.getLocale();
		this.ajouteDatasSelonFiltreSurHash(tempo, _hashADomicileDatas,
				_homeCollectModsDatas, texteSansAccents, locale,
				"homecollectmods");
		var store = this.getHomeCollectModsList().getStore();
		store.removeAll();
		store.setData(tempo);
		store.sync();
	},

	onTapLinkButton : function(button, e, eOpts) {
		var arButtonsId = button._data["code"].split(_SEPARATOR);
		if (arButtonsId[0] === "collectMods_xtype") {
			if (arButtonsId.length > 1) {
				var element = _getCollectMod(arButtonsId[1]);
				if (element != null) {
					Ext.Msg
							.alert(element['nom'], element["descr"],
									Ext.emptyFn);
				}
			}
		} else {
			this.manageLinkButtons(button._data["code"]);
		}
	}

});
