/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('MieuxTrierANantes.controller.GarbagesController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',
	requires : ['MieuxTrierANantes.view.garbages.GarbagesContainer',
			'MieuxTrierANantes.view.garbages.GarbagesForm'/*
			 * ,
			 * 'MieuxTrierANantes.view.garbages.GarbagesList'
			 */],
	config : {
		refs : {
			garbagesView : 'garbages_xtype',
			garbagesContainer : 'garbagescontainer_xtype',
			// garbagesList : 'garbagesList_xtype',
			garbageDetail : 'garbagesDetails_xtype',
			garbagesForm : 'garbagesForm_xtype',
			garbagesFormText : '#garbagesFormText',
			garbagesFormSelect : '#garbagesFormSelect',
			garbagesFormButton : '#garbagesFormButton',
			garbagesButtonsPanel : 'garbagesButtonsPanel_xtype',
			usualCategoriesButtonsPanel : 'usualCategoriesButtonsPanel_xtype',
			homeButton : '#garbagehomeButton',
			mainView : 'main_xtype'
			// advicesList : 'advicesList_xtype',
			// collectModList : 'collectModList_xtype',
			// usualCategoriesList2 : 'usualCategoriesList2_xtype',
			// informationsList : 'informationsList_xtype'
		},
		control : {
			collectModsView : {},
			/*
			 * collectModsList : { initialize : "onInitCollectModsList" },
			 */
			usualCategoriesButtonsPanel : {
				initialize : 'onInitUsualCategoriesButtonsPanel',
				show : 'onShowUsualCategoriesButtonsPanel'
			},
			/*
			 * usualSubCategoriesButtonsPanel : { initialize :
			 * 'onInitUsualSubCategoriesButtonsPanel' },
			 */
			/*
			 * garbagesList : { itemtap : 'showGarbagesDetail_old' },
			 */

			garbagesView : {
				push : 'onGarbagesViewPush',
				// onActivate : 'onActivate',
				onShow : 'onShow',
				activate : 'onActivateGarbagesView',
				back : 'onPushBackButton1'
			},

			garbagesFormText : {
				keyup : 'onKeyUpGarbagesFormText'
				// sur le départ de la zône
				// change : 'onTapGarbagesFormButton'
				// clearicontap : 'onGarbageStoreFilter'
			},
			garbagesForm : {
				tap : 'tempo',
				click : 'tempo'
			},
			'.moreinfo' : {
				tap : function() {
					alert('Tapped on more info!');
				}
			},

			garbagesFormSelect : {

}			,
			garbagesFormButton : {
				tap : 'onTapGarbagesFormButton',
				back : 'onPushBackButton2'
			},/*
			 * advicesList : { initialize : 'onInitGarbagesAdvices' },
			 */
			/*
			 * wasteTreatmentsCategoriesList : { initialize :
			 * 'onInitGarbagesWasteTreatmentsCategoriesList' },
			 */
			/*
			 * collectModList : { initialize : 'onInitGarbagesCollectModList' },
			 */
			/*
			 * informationsList : { // initialize :
			 * 'onInitGarbagesInformationsList' },
			 */
			/*
			 * usualCategoriesList2 : { // initialize :
			 * 'onInitGarbagesUsualCategoryList' },
			 */
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualCategoriesButtonsPanel_xtype button' : {
				tap : 'onShowDetails',
				back : 'onPushBackButton3'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'usualSubCategoriesButtonsPanel_xtype button' : {
				tap : 'onShowDetails',
				back : 'onPushBackButton4'
			},
			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'garbagesButtonsPanel_xtype button' : {
				tap : 'showGarbagesDetail',
				back : 'onPushBackButton5'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'garbagesDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton6'
			},
			homeButton : {
				tap : 'onHomeButton'
			}
		}
	},

	tempo : function(e) {
		if (e.target.tagName !== 'A') {
			return;
		};
		e.preventDefault();
		var href = e.target.getAttribute('href');
	},

	onKeyUpGarbagesFormText : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.onTapGarbagesFormButton();
			// TODO cacher le clavier
			// Ext.getCmp('garbagesFormButton').blur();
		}
	},

	onPushBackButton1 : function() {
		console.log("onPushBackButton1");
		this.onPushBackButton();

		// Retour sur la page principale de "déchets"
		// this.getGarbagesView().setActiveItem(0);
		// this.manageBackButton("garbages_xtype", true);

	},
	onPushBackButton2 : function() {
		// console.log("onPushBackButton2");
		// this.onPushBackButton();
	},
	onPushBackButton3 : function() {
		// console.log("onPushBackButton3");
		// this.onPushBackButton();
	},
	onPushBackButton4 : function() {
		// console.log("onPushBackButton4");
		// this.onPushBackButton();
	},
	onPushBackButton5 : function() {
		// console.log("onPushBackButton5");
		// this.onPushBackButton();
	},
	onPushBackButton6 : function() {
		// console.log("onPushBackButton6");
		// this.onPushBackButton();
	},

	onShow : function(newActiveItem, container, oldActiveItem, eOpts) {
		// this.garbageViewUpdateTextTranslated();
	},

	/**
	 * Réalise les traduction de la page formulaire/liste
	 */
	garbageViewUpdateTextTranslated : function() {
		this.getGarbagesFormText().setLabel(this
				.translateWithUpperFirstLetter("label_dechet"));
		// 1112 Ceci ne sert à rien
		this.getGarbagesContainer().setTitle("fff");
		this.getGarbagesView().setDefaultBackButtonText(this
				.translateWithUpperFirstLetter("label_retour"));
	},

	onActivateGarbagesView : function(newActiveItem, container, oldActiveItem,
			eOpts) {
		this.top();

	},

	top : function() {

		// on initialise la liste des boutons si cela n'a pas encore eu lieu.
		var labelElt1 = this.getUsualCategoriesButtonsPanel().items.items[0].items.items[0]._data.label;

		if (labelElt1 === "") {
			this.putInButtonsPanel("cu");
		} else if (labelElt1 === "Plastique Brique" && getLocale() === "en") {
			// on passe en anglais
			this.putInButtonsPanel("cu");
		} else if (labelElt1 === "Plastic Brick" && getLocale() === "fr") {
			// on passe en français
			this.putInButtonsPanel("cu");
		}

		var mainView = this.getMainView();
		// mainView.type = "Fiche";
		// (mainView.type == "Déchet" || typeof mainView.type == 'undefined') {
		// 1. On est sur la page déchet
		if (mainView.active != null) {
			// Cas des liens qui ouvre la page
			this.showGarbagesDetail2(mainView.active);
			mainView.active = null;
		}/*
		 * else { this.putInButtonsPanel("cu"); }
		 */

		this.garbageViewUpdateTextTranslated();
	},

	onPushBackButton : function() {
		// TODO : back une seule fois
		/*
		 * if (this.getMainView().getActiveItem().id.indexOf("garbages_xtype") !=
		 * -1) { var garbageView = this.getGarbagesView(); if
		 * (garbageView.getActiveItem().id .indexOf("garbagescontainer_xtype") ==
		 * -1) {
		 * 
		 * garbageView.getNavigationBar().fireEvent('back', this); } }
		 */
	},
	/*
	 * onActivate : function(newActiveItem, container, oldActiveItem, eOpts) {
	 * this.suspendEvents(); mainView.setActiveItem(2); },
	 */

	putInButtonsPanel : function(stringFilter) {

		// utilisation de _usualCategoriesDatas
		var arItemsToShow = this.getArrayItemsToShowForButtons(
				_usualCategoriesDatas, stringFilter);

		var result = new Array();
		if (arItemsToShow.length > 0) {

			var theItems = arItemsToShow;
			for (var i = 0; i < theItems.length; i++) {
				result.push({
							code : theItems[i].id,
							// nom est déja mis en francais ou en anglais
							label : theItems[i].nom,
							image : theItems[i].image
						});
			}
		}

		var nbGarbagesMax = 18; // la page UsualCategoriesButtonsPanel.js
		// affiche
		// 18 éléments
		this.setDataInButtonsWithManyLines(this
						.getUsualCategoriesButtonsPanel(),
				"usualCategoriesButtonsPanel", result, nbGarbagesMax, 3);
	},

	onTapLinkButton : function(button, e, eOpts) {

		// this.saveBackButton("garbages_xtype", false);
		// this.manageLinkButtons(button._data["code"]);

		var arButtonsId = button._data["code"].split(_SEPARATOR);
		if (arButtonsId[0] === "collectMods_xtype") {
			if (arButtonsId.length > 1) {
				var element = _getCollectMod(arButtonsId[1]);
				if (element != null) {
					// var description = element['description'] + '<br/><a
					// href="#" class="moreinfo" onclick="return
					// false;">rr</a>';
					// var description = element['description'];
					var nom = this.getRecordValue(element, "nom");
					var descr = this.getRecordValue(element, "descr");
					Ext.Msg.show({
								title : nom,
								message : descr,
								height : 400,
								width : 300,
								// Ceci pose un pb sous IE
								// scrollable : true,
								buttons : Ext.Msg.OK,
								icon : Ext.Msg.INFO,
								listeners : {
									element : 'element',
									delegate : 'a',
									tap : function(e) {
										_gestionLien(e);
									}
								}
							});

				}
			}
		} else if (arButtonsId[0] === "comments_xtype") {
			// this.ouvertureModaleCommenter();
			Ext.Viewport.add({
						xtype : 'commentmodal_xtype'
					});
		}

	},

	onShowDetails : function(button, e, eOpts) {
		// Suppression des sous-catégories de toxique
		// La catégorie "cu_toxique" possède des sous-catégories
		// if (button._data["code"] == "cu_toxique") {
		// this.showSubCategory(button._data["code"]);
		// } else {
		// this.showDetails(button._data["code"]);
		// }
		this.showDetails(button._data["code"]);
		// this.saveBackButton("garbages_xtype", true);
	},

	/**
	 * Invoqué lorsque l'on clique sur un bouton d'une catégorie usuelle
	 * 
	 * @param {}
	 *            collectModId
	 */
	showDetails : function(collectModId) {
		this.getGarbagesFormText().setValue("");
		this.getGarbagesFormSelect().setValue(collectModId);
		this.filter();
		this.getGarbagesView().push(this.garbagesButtonsPanel);
		// this.saveBackButton("garbages_xtype", true);
	},

	showSubCategory : function(collectModId) {

		// var usualCategoryStore = this.getUsualCategoriesList2().getStore();
		// var arItemsToShow = this.getDatasForButtons(usualCategoryStore,
		// "cu_toxique");
		// var arItems = this.getContentButtonsPanel(arItemsToShow);
		// this.getUsualCategoriesButtonsPanel().setItems(arItems);

		this.putInButtonsPanel("cu_toxique");
	},

	onInitUsualCategoriesButtonsPanel : function(container) {
		// _gestionLienExterne();

	},

	/*
	 * 
	 */
	onShowUsualCategoriesButtonsPanel : function() {
		// Efface le champ texte de l'écran recherche
		this.getGarbagesFormText().setValue("");
	},

	getArrayFromString : function(string) {
		string = string.replace(", /g", ",").replace(" ,/g", ",");
		return string.split(',');
	},

	/**
	 * Initialisation de la liste des conseils
	 */
	/*
	 * onInitGarbagesAdvices : function(list) { var store =
	 * Ext.create('MieuxTrierANantes.store.AdviceStore'); list.setStore(store); },
	 */

	/**
	 * Initialisation de la liste des catégories de traitement
	 */
	/*
	 * onInitGarbagesWasteTreatmentsCategoriesList : function(list) { var store =
	 * Ext .create('MieuxTrierANantes.store.WasteTreatmentsCategoriesStore');
	 * list.setStore(store); },
	 */

	/**
	 * Initialisation de la liste des modes de collectes
	 */
	/*
	 * onInitGarbagesCollectModList : function(list) { var store =
	 * Ext.create('MieuxTrierANantes.store.CollectModStore');
	 * list.setStore(store); },
	 */

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	/*
	 * onInitGarbagesInformationsList : function(list) { var store =
	 * Ext.create('MieuxTrierANantes.store.InformationsStore');
	 * list.setStore(store); },
	 */

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	/*
	 * onInitGarbagesUsualCategoryList : function(list) { var store =
	 * Ext.create('MieuxTrierANantes.store.CategorieUsuelleStore');
	 * list.setStore(store); },
	 */
	onGarbagesViewPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	showGarbagesDetail : function(button, e, eOpts) {
		this.showGarbagesDetail2(button._data["code"]);
	},

	showGarbagesDetail2 : function(code) {
		// Récupère l'élément
		var record = _getGarbage(code);
		var thisController = this;
		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('MieuxTrierANantes.view.garbages.GarbagesDetails');

				// Windows Phone : on force la largeur de la page
				/*
				 * if (_isWhindowsPhone()) {
				 * this.garbageDetail.setMaxWidth(window.innerWidth - 50); }
				 */
			}
			var title = this.getRecordValue(record, "nom");
			this.garbageDetail.setTitle(title);

			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "";
			conseils = record["cons"];
			modesDeCollecte = record["modco"];
			treatmentCategories = record["recyc"];
			/*
			 * if (record["cons"] !== '') { conseils = record["cons"] + ","; } //
			 * conseils de catégories de traitement if
			 * (record["categorie_traitement"] !== '') { var
			 * dataWasteTreatmentsCategories = this
			 * .getWasteTreatmentsCategoriesList().getStore() .getData();
			 * dataWasteTreatmentsCategories.each(function(recordCategories) {
			 * if (recordCategories.raw["code"] ===
			 * record["categorie_traitement"]) { conseils +=
			 * recordCategories.raw["cons"]; modesDeCollecte +=
			 * recordCategories.raw["modesCollecte"]; treatmentCategories +=
			 * recordCategories.raw["recyclable"]; } }); }
			 */
			if (treatmentCategories === "OUI") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='green' size=4>"
						+ this.translate("label_OUI") + "</FONT>";
			} else if (treatmentCategories === "NON") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='red' size=4>"
						+ this.translate("label_NON") + "</FONT>";
			} else if (treatmentCategories === "PAS_POUBELLE") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='orange' size=4>"
						+ this.translate("label_NON") + "</FONT>"
						+ this.translate("label_pas_poubelle");
			} else if (treatmentCategories === "OUI_ET_NON") {
				treatmentCategories = this.translate("label_recyclable")
						+ " : " + "<FONT COLOR='orange' size=4>"
						+ this.translate("label_pour_collecte_bac_jaune")
						+ "</FONT>";
			} else {
				treatmentCategories = "";
			}
			treatmentCategories = _stringUpperFirstLetter(treatmentCategories);
			// Modes de collecte
			this.garbageDetail.items.items['0'].items.items['1'].items.items['0']
					.setData({
								recyclable_string : treatmentCategories
										+ "<br/><br/>"
										+ this
												.translate("label_modes_de_collecte")
										+ " :"
							});
			var modesDeCollecteTraduit = "";

			var arItemsToShow = new Array();
			/*
			 * arItemsToShow.push({ "html" : treatmentCategories + "<br/><br/>Modes
			 * de collecte :", "id" : "garbagesdetails_recyclable" });
			 * 
			 */
			if (modesDeCollecte) {
				var arModesDeCollecte = modesDeCollecte.split(',');
				// On parcours les modes de collecte
				if (arModesDeCollecte.length > 0) {

					for (var j = 0; j < _collectModsDatas.length; j++) {
						for (var i = 0; i < arModesDeCollecte.length; i++) {
							if (_collectModsDatas[j]["code"] === arModesDeCollecte[i]) {
								var imageValue = _collectModsDatas[j]["image"];

								var codeValue = "collectMods_xtype"
										+ _SEPARATOR
										+ _collectModsDatas[j]["code"];
								var libelleBouton = this.getRecordValue(
										_collectModsDatas[j], "libelleBouton");
								var libelleValue = _stringUpperFirstLetter(libelleBouton);
								arItemsToShow.push({
											image : imageValue,
											code : codeValue,
											label : libelleValue
										});

							}
						}
					}

				}
			}
			if (modesDeCollecteTraduit !== "") {
				modesDeCollecteTraduit = "<BR/>"
						+ this.translate(label_modes_de_collecte) + ": "
						+ modesDeCollecteTraduit;
			}

			/*
			 * this.garbageDetail .setTpl("<table border='0'><tr>" + '<td><img
			 * src=resources/images/{image} height=120 /></td>' + '<td>' +
			 * treatmentCategories + '<br/>' + modesDeCollecteTraduit + '</td>' + "</tr></table>" + "<div>" +
			 * descriptionTraduit + "</div>" +
			 */
			// image
			var imageComplet = "<img src='resources/images/" + record["image"]
					+ "' width='100px' />";
			// this.setDataElement(this.garbageDetail,"garbagesdetails_image",
			// {'image' : imageComplet})
			this.garbageDetail.items.items['0'].items.items['0'].setData({
						'image' : imageComplet
					})
			// garbagesdetails_recyclable
			// this.garbageDetail.items.items['0'].items.items['1'].items.items['0'].setData({'recyclable_string':treatmentCategories
			// })
			// garbagesdetails_recyclableetmodesdecollecte
			// var items = "{ xtype : 'container', layout : 'vbox', id :
			// 'garbagesdetails_recyclableetmodesdecollecte', items : [ { id :
			// 'garbagesdetails_recyclable', html: 'recyclable : <FONT
			// COLOR=green size=4>OUI</FONT>'<br/><br/>Modes de collecte :'}]}"
			// Affecte les modes de collecte

			// this.garbageDetail.items.items['0'].items.items['1'].setItems(arItemsToShow);
			var nbElementsMax = 8; // la page GarbagesDetails.js affiche 8
			// éléments
			this.setDataInButtons(
					this.garbageDetail.items.items['0'].items.items['1'],
					"garbagesdetails_collectmod", arItemsToShow, nbElementsMax);
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_recyclableetmodesdecollecte",
			// arItemsToShow);
			// Ajout de la description
			var descriptionTraduit = "";
			var descr = this.getRecordValue(record, "descr");
			if (descr != "") {
				descriptionTraduit = this.translate("label_concerne_aussi")
						+ " : " + descr + "<br/>";
			}
			var source = "Non mentionné";
			if (record["src"] != undefined && record["src"] != "") {
				source = record["src"] + "<br/>";
			}
			var sponsorTraduit = "";
			var sponsor = this.getRecordValue(record, "sponsor");
			if (sponsor != "") {
				sponsorTraduit = this.translate("label_sponsor_kkbb")
						+ " : " + sponsor + "<br/>";
			}
			this.setDataElement(this.garbageDetail,
					"garbagesdetails_description", {
						'concerne_aussi' : descriptionTraduit,
						'src' : source,
						'sponsor' : sponsorTraduit
					})

			// Ajout des conseils
			var nbElementsMax = 3; // la page GarbagesDetails.js affiche 3
			// éléments
			var arsConseils = this.getArrayItemsToShowAdvices(conseils);
			this.setDatasConseils(this.garbageDetail.items,
					"garbagesdetails_conseils", "nom", "categ",
					arsConseils.les_libelles, arsConseils.les_boutons,
					arsConseils.le_html, nbElementsMax);

			// Ajout des commentaires OK
			var code = record["code"];
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_commentaires", this.getItemsComments(code,
			// title));
			var arsCommentaires = this.getArrayItemsToShowComments(code, title);
			var nbElementsMax = 3;
			// la page GarbagesDetails.js affiche 3 éléments
			this.setDataInButtons(this.garbageDetail,
					"garbagesdetails_commentaires",
					arsCommentaires.les_libelles, nbElementsMax);

			// Changement libellé "commentez"
			// envoyer
			var index = this.garbageDetail.items.keys
					.indexOf("garbagesdetails_envoyer");
			var dataTemp = {
				name : "Comment post about " + title,
				description : "description"
			};
			this.garbageDetail.items.items[index].setData(dataTemp);
			this.garbageDetail.items.items[index].setText(this
					.translateWithUpperFirstLetter("label_commentez"));

			/*
			 * var arsItemsComments = this.getItemsComments(record["code"],
			 * title) this.setItemsElement(this.garbageDetail,
			 * "garbagesdetails_commentaires", arsItemsComments);
			 */

			// Bind the record onto the show contact view
			this.garbageDetail.setData(record);

			// Push the show contact view into the navigation view
			this.getGarbagesView().push(this.garbageDetail);

		}
	},

	// Méthodes invoquées par le formulaire
	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	/*
	 * onGarbageStoreFilter : function() { // if (this.garbagesList == null) { //
	 * this.garbagesList = Ext //
	 * .create('MieuxTrierANantes.view.garbages.GarbagesList'); // } // var
	 * title = this.translate("label_resultat_recherche"); //
	 * this.garbagesList.setTitle(title); //
	 * this.getGarbagesFormSelect().setValue(""); // this.filter(); //
	 * this.getGarbagesView().push(this.garbagesList);
	 * this.getGarbagesFormSelect().setValue("all"); this.filter();
	 * this.getGarbagesView().push(this.garbagesButtonsPanel); },
	 */

	onTapGarbagesFormButton : function(button, e, eOpts) {
		this.getGarbagesFormSelect().setValue('all');
		this.filter();
		this.getGarbagesView().push(this.garbagesButtonsPanel);
	},

	filter : function() {
		var start = new Date().getTime();
		var result = new Array();
		var text = _utilRetireAccentEtMinuscule(this.getGarbagesFormText()
				.getValue());
		var category = this.getGarbagesFormSelect();
		var escaperegex = Ext.String.escapeRegex;

		for (var j = 0; j < _garbagesDatas.length; j++) {
			// Important : il faut recréer l'expression régulière à chaque fois
			// sinon les résultats sont faux !
			// var text = text.getValue());
			var texttest = new RegExp(escaperegex(text), 'ig');
			// RM_LA_LANGUE_06
			var mots_cles = this.getRecordValue(_garbagesDatas[j], "mots_cles");
			if ((_garbagesDatas[j]["cat_usuel"] === category.getValue() || category
					.getValue() === "all")
					&& texttest.test(mots_cles)) {
				// Ajoute les <br/>
				var stLibelle = _cutWithBr(this.getRecordValue(
						_garbagesDatas[j], "nom"));
				result.push({
							code : _garbagesDatas[j]["code"],
							label : stLibelle,
							image : _garbagesDatas[j]["image"]
						});
			}
		}

		if (this.garbagesButtonsPanel == null) {
			this.garbagesButtonsPanel = Ext
					.create('MieuxTrierANantes.view.garbages.GarbageButtonsPanel');
		}

		var nbGarbagesMax = 39; // la page GarbageButtonsPanel.js affiche 39

		// éléments
		this.setDataInButtonsWithManyLines(this.garbagesButtonsPanel,
				"garbagesButtonsPanel_garbage", result, nbGarbagesMax, 3);

		this.garbagesButtonsPanel.setTitle(this
				.translateWithUpperFirstLetter("label_dechets"));
	}

});
