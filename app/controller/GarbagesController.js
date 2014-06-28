/**
 * Controleur de la partie Accueil de l'application
 */
Ext.define('MieuxTrierANantes.controller.GarbagesController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',
	requires : ['MieuxTrierANantes.view.garbages.GarbagesContainer',
			'MieuxTrierANantes.view.garbages.GarbagesForm'/*,
			'MieuxTrierANantes.view.garbages.GarbagesList'*/],
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
			usualCategoriesButtonsPanel : 'usualCategoriesButtonsPanel_xtype'
			// advicesList : 'advicesList_xtype',
			// collectModList : 'collectModList_xtype',
			// usualCategoriesList2 : 'usualCategoriesList2_xtype',
			// informationsList : 'informationsList_xtype'
		},
		control : {
			collectModsView : {},
			/*collectModsList : {
				initialize : "onInitCollectModsList"

			},*/
			usualCategoriesButtonsPanel : {
				initialize : 'onInitUsualCategoriesButtonsPanel',
				show : 'onShowUsualCategoriesButtonsPanel'
			},
			/*
			 * usualSubCategoriesButtonsPanel : { initialize :
			 * 'onInitUsualSubCategoriesButtonsPanel' },
			 */
			/*garbagesList : {
				itemtap : 'showGarbagesDetail_old'
			},*/

			garbagesView : {
				push : 'onGarbagesViewPush',
				show : 'onActivate',
				back : 'onPushBackButton1'
			},

			garbagesFormText : {
			// keyup : 'onGarbageStoreFilter',
			// change : 'onGarbageStoreFilter',
			// clearicontap : 'onGarbageStoreFilter'
			},
			garbagesFormSelect : {

}			,
			garbagesFormButton : {
				tap : 'onTapGarbagesFormButton',
				back : 'onPushBackButton2'
			},/*
			advicesList : {
				initialize : 'onInitGarbagesAdvices'
			},*/
			/*
			 * wasteTreatmentsCategoriesList : { initialize :
			 * 'onInitGarbagesWasteTreatmentsCategoriesList' },
			 */
			/*
			 * collectModList : { initialize : 'onInitGarbagesCollectModList' },
			 */
			/*informationsList : {
				// initialize : 'onInitGarbagesInformationsList'
			},*/
			/*usualCategoriesList2 : {
				// initialize : 'onInitGarbagesUsualCategoryList'
			},*/
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
			}

		}
	},

	onPushBackButton1 : function() {
		// console.log("onPushBackButton1");
		// this.onPushBackButton();

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

	onActivate : function(newActiveItem, container, oldActiveItem, eOpts) {
		this.putInButtonsPanel("cu");
	},

	putInButtonsPanel : function(stringFilter) {

		// utilisation de _usualCategoriesDatas
		var arItemsToShow = this.getArrayItemsToShowForButtons(
				_usualCategoriesDatas, stringFilter);

		var result = new Array();
		if (arItemsToShow.length > 0) {

			var theItems = arItemsToShow;
			for (var i = 0; i < theItems.length; i++) {

				var stLibelle = _cutWithBr(theItems[i]["libelle"]);
				result.push({
							code : theItems[i].id,
							label : stLibelle,
							image : theItems[i].image
						});
			}
		}

		var nbGarbagesMax = 18; // la page UsualCategoriesButtonsPanel.js affiche
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
					Ext.Msg.alert(element['libelle'], element['description'],
							Ext.emptyFn);
				}
			}
		} else if (arButtonsId[0] === "comments_xtype") {
			// Ext.Viewport.add({xtype:'commentsModal_xtype'});
			Ext.Viewport.add({xtype : 'commentmodal'});
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
	/*onInitGarbagesAdvices : function(list) {
		var store = Ext.create('MieuxTrierANantes.store.AdviceStore');
		list.setStore(store);
	},*/

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
	 * Ext.create('MieuxTrierANantes.store.CollectModStore'); list.setStore(store); },
	 */

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	/*onInitGarbagesInformationsList : function(list) {
		var store = Ext.create('MieuxTrierANantes.store.InformationsStore');
		list.setStore(store);
	},*/

	/**
	 * Initialisation de la liste des fiches explicatives de collectes
	 */
	/*onInitGarbagesUsualCategoryList : function(list) {
		var store = Ext.create('MieuxTrierANantes.store.CategorieUsuelleStore');
		list.setStore(store);
	},*/
	onGarbagesViewPush : function(view, item) {

		// this.garbagesList().deselectAll();

	},

	showGarbagesDetail : function(button, e, eOpts) {

		// Récupère l'élément
		var record = _getGarbage(button._data["code"]);

		var thisController = this;
		if (record) {
			if (!this.garbageDetail) {
				this.garbageDetail = Ext
						.create('MieuxTrierANantes.view.garbages.GarbagesDetails');
			}
			/* "<I>" + this.translate("label_dechet") + "</I> + " */
			var title = record["nom"];
			this.garbageDetail.setTitle(title);

			var conseils = "";
			var modesDeCollecte = "";
			var treatmentCategories = "";
			conseils = record["conseils"];
			modesDeCollecte = record["modco"];
			treatmentCategories = record["rec"];
			/*
			 * if (record["conseils"] !== '') { conseils =
			 * record["conseils"] + ","; } // conseils de catégories de
			 * traitement if (record["categorie_traitement"] !== '') { var
			 * dataWasteTreatmentsCategories = this
			 * .getWasteTreatmentsCategoriesList().getStore() .getData();
			 * dataWasteTreatmentsCategories.each(function(recordCategories) {
			 * if (recordCategories.raw["code"] ===
			 * record["categorie_traitement"]) { conseils +=
			 * recordCategories.raw["conseils"]; modesDeCollecte +=
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
			treatmentCategories =_stringUpperFirstLetter(treatmentCategories);

			// Modes de collecte
			this.garbageDetail.items.items['0'].items.items['1'].items.items['0']
					.setData({
								recyclable_string : treatmentCategories
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
							var libelleValue = _stringUpperFirstLetter(_collectModsDatas[j]["libelleBouton"]);
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
				modesDeCollecteTraduit = "<BR/>Modes de collecte : "
						+ modesDeCollecteTraduit;
			}

			/*
			 * this.garbageDetail .setTpl("<table border='0'><tr>" + '<td><img
			 * src=resources/images/{image} height=120 /></td>' + '<td>' +
			 * treatmentCategories + '<br/>' + modesDeCollecteTraduit + '</td>' + "</tr></table>" + "<div>" +
			 * descriptionTraduit + "</div>" +
			 */
			// image
			var imageComplet = "<img src='resources/images/"
					+ record["image"] + "' width='100px' />";
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
					"garbagesdetails_collectmod", arItemsToShow,
					nbElementsMax);
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_recyclableetmodesdecollecte",
			// arItemsToShow);
			// Ajout de la description
			var descriptionTraduit = "";
			if (record["description"] != "") {
				descriptionTraduit = this.translate("label_concerne_aussi")
						+ " : " + record["description"] + "<br/><br/>";
			}
			this.setDataElement(this.garbageDetail,
					"garbagesdetails_description", {
						'concerne_aussi' : descriptionTraduit
					})
			// this.garbageDetail.items.items['1'].setData()
			// garbagesdetails_conseils
			// this.garbageDetail.items.items['2'].setData({'conseils_string' :
			// conseilTraduit})

			// Ajout des conseils
			var nbElementsMax = 3; // la page GarbagesDetails.js affiche 3 éléments
			var arsConseils = this.getArrayItemsToShowAdvices(conseils);
			this.setDatasConseils(this.garbageDetail.items,
					"garbagesdetails_conseils", "libelle", "bouton",
					arsConseils.les_libelles, arsConseils.les_boutons, nbElementsMax);
	
			// Ajout des commentaires OK
			var code = record["code"];
			// this.setItemsElement(this.garbageDetail,
			// "garbagesdetails_commentaires", this.getItemsComments(code,
			// title));
			var arsCommentaires = this.getArrayItemsToShowComments(code,
					title);
			var nbElementsMax = 3;
			// la page GarbagesDetails.js affiche 3 éléments
			this.setDataInButtons(this.garbageDetail,
					"garbagesdetails_commentaires",
					arsCommentaires.les_libelles, nbElementsMax);
			var index = this.garbageDetail.items.keys
					.indexOf("garbagesdetails_envoyer");
			this.garbageDetail.items.items[index].setData({
						code : arsCommentaires.le_titre
					});
			/*
			 * var arsItemsComments =
			 * this.getItemsComments(record["code"], title)
			 * this.setItemsElement(this.garbageDetail,
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
	 * .create('MieuxTrierANantes.view.garbages.GarbagesList'); // } // var title =
	 * this.translate("label_resultat_recherche"); //
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
		var result = new Array();

		/*if (this.garbagesList == null) {
			this.garbagesList = Ext
					.create('MieuxTrierANantes.view.garbages.GarbagesList');
		}*/

		var text = _utilRetireAccent(this.getGarbagesFormText().getValue());
		var category = this.getGarbagesFormSelect();
		var escaperegex = Ext.String.escapeRegex;
		
		for (var j = 0; j < _garbagesDatas.length; j++) {
			// Important : il faut recréer l'expression régulière à chaque fois
			// sinon les résultats sont faux !
			// var text = text.getValue());
			var texttest = new RegExp(escaperegex(text), 'ig');
			var descNoAccents = _garbagesDatas[j]["descNoAccents"];
			if ((_garbagesDatas[j]["categoriesUsuelles"] === category.getValue() || category
					.getValue() === "all")
					&& texttest.test(descNoAccents)) {
				// Ajoute les <br/>
				var stLibelle = _cutWithBr(_garbagesDatas[j]["nom"]);
				result.push({
							code : _garbagesDatas[j]["code"],
							label : stLibelle,
							image : _garbagesDatas[j]["image"]
						});
			}
		}

		/*
		 * var arItemsToShow = this.getGarbagesList().getStore().getData();
		 * 
		 * if (arItemsToShow.length > 0) { // var text =
		 * this.getGarbagesFormText(); var text =
		 * _utilRetireAccent(this.getGarbagesFormText().getValue()); var
		 * category = this.getGarbagesFormSelect(); var escaperegex =
		 * Ext.String.escapeRegex; // var texttest = new
		 * RegExp(escaperegex(text.getValue()), 'ig'); // var temp =
		 * text.getValue(); // var texttest = new RegExp(/vaisselle/gi);
		 * 
		 * var categorietest = new RegExp(category.getValue());
		 * 
		 * var theItems = arItemsToShow.items; for (var i = 0; i <
		 * theItems.length; i++) { var aData = theItems[i].data; // Important :
		 * il faut recréer l'expression régulière à chaque fois sinon les
		 * résultats sont faux ! var texttest = new RegExp(escaperegex(text),
		 * 'ig'); var descNoAccents = aData["descNoAccents"]; if
		 * ((aData["categorie_usuelle"] === category.getValue() || category
		 * .getValue() === "all") && texttest.test(descNoAccents)) { // Ajoute
		 * les <br/> var stLibelle = _cutWithBr(aData["nom"]); result.push({ //
		 * id : aData["code"], //code : aData["code"], code : aData["code"], //
		 * libelle : stLibelle, label : stLibelle, image : aData["image"] }); } } }
		 */
		if (this.garbagesButtonsPanel == null) {
			this.garbagesButtonsPanel = Ext
					.create('MieuxTrierANantes.view.garbages.GarbageButtonsPanel');
		}


		// this.removeAllAndSetItems(this.garbagesButtonsPanel, arItems);
		var nbGarbagesMax = 39; // la page GarbageButtonsPanel.js affiche 39
		// éléments
		this.setDataInButtonsWithManyLines(this.garbagesButtonsPanel,
				"garbagesButtonsPanel_garbage", result, nbGarbagesMax, 3);

	}

});
