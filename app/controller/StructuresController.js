/**
 * Controleur de la partie Structures
 */
Ext.define("MieuxTrierANantes.controller.StructuresController", {
	extend : "MieuxTrierANantes.controller.AbstractStructuresController",

	config : {
		refs : {
			structuresView : "structuresview_xtype",
			structuresList : "structuresList_xtype",
			structuresDetail : "structuresDetails_xtype",
			structuresForm : "structuresForm_xtype",
			structuresFormSelectQuartier : "#structuresFormSelectQuartier",
			structureFormText : "#structureFormText",
			structuresFormSelectType : "#structuresFormSelectType",
			structuresButtons : "#structuresButtons",
			structureFormButton : "#structureFormButton",
			homeButton : '#structurehomebutton',
			mainView : 'main_xtype'
		},
		control : {

			structuresList : {
				initialize : "onInitStructures",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},

			structuresView : {
				show : 'onShowStructures'
			},

			structuresFormSelectQuartier : {
				change : "onStructuresStoreFilter",
				initialize : "setOptionsZones",
				show : "selectFirstOptionsQuartier"
			},

			structuresFormSelectType : {
				change : "onStructuresStoreFilter"
			},

			structuresButtons : {
				toggle : "onStructuresStoreFilter"
			},

			structureFormText : {
				keyup : 'onKeyUpStructureFormText'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'structuresDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton11'
			},

			structureFormButton : {
				tap : 'onStructuresStoreFilter'
			},
			homeButton : {
				tap : 'onHomeButton'
			}
		}
	},

	onKeyUpStructureFormText : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.filterElements();
		}
	},

	onPushBackButton11 : function() {
		// console.log("onPushBackButton11");
		// this.onPushBackButton();
	},

	/**
	 * A l"initialisation de la fenêtre d"accueil
	 */
	onInitStructures : function(list) {
		// 1
		// var homecollectmodStore = Ext.create(
		// "MieuxTrierANantes.store.Structure2Store", {
		// filters : [{
		// property : "modesCollecte",
		// // le type correspond aux modes de collectes possibles
		// // voir
		// // http://quentinc.net/javascript/testeur-expressions-regulieres/
		// value :
		// /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants/g }]
		// });
		// list.setStore(homecollectmodStore);
		// 2$
		this.getStructuresFormSelectQuartier().setValue("all");
	},

	onShowStructures : function() {
		var mainView = this.getMainView();
		if (mainView.active != null) {
			// Cas des liens qui ouvre la page
			var record = _getStructure(mainView.active);
			this.showStructuresDetail2(record);
			mainView.active = null;
		} else {
			if (this.getStructuresList().getStore() == null) {
				var structureStore = Ext.create(
						"MieuxTrierANantes.store.StructureStore", {
							filters : [{
								property : "modesCollecte",
								value : /modco_ecopoint|modco_decheterie|modco_encombrants_resume|smco_reemp|ventevrac/g
							}]
						});
				// value :
				// /modco_ecopoint|modco_decheterie|modco_encombrants_resume|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempmeuble|smco_reempjouet|smco_reempinfo|smco_reemplivreCD|smco_reempvet|smco_conteneurlerelais|smco_reempdivers|smco_reemplunettes/g
				structureStore.setData(_structures1Datas);
				this.getStructuresList().setStore(structureStore);
				structureStore.load();
			}
			// Traduction
			this.structuresViewUpdateTextTranslated();
		}
	},

	/**
	 * Réalise les traduction de la page formulaire/liste
	 */
	structuresViewUpdateTextTranslated : function() {
		this.getStructureFormText().setLabel(this
				.translateWithUpperFirstLetter("label_dechet_nom"));
		this.getStructuresFormSelectQuartier().setLabel(this
				.translateWithUpperFirstLetter("label_quartier"));
		this.getStructuresFormSelectType().setLabel(this
				.translateWithUpperFirstLetter("label_type"));
	},

	onListRefresh : function(list, eOpts) {
		store = this.calculateDatas(list.getStore());
	}

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les évènements, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	,
	onStructuresStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {

		var selectQuartier = this.getStructuresFormSelectQuartier();
		var selectType = this.getStructuresFormSelectType();
		var text = _utilRetireAccent(this.getStructureFormText().getValue());
		var escaperegex = Ext.String.escapeRegex;
		var store = this.getStructuresList().getStore();
		if (store != null) {
			store.clearFilter(true); // true sinon cela plante dans la
			// version android
			var filterElements = Ext.create("Ext.util.Filter", {
				filterFn : function(item) {
					var stTypeRegexp = new RegExp(selectType.getValue());
					var stQuartier = item.data["zone"];
					var stType = item.data["modesCollecte"];
					var stDechetsNoAccents = this.getRecordValue(item.data,
							"mots_cles");
					var stLibelleNoAccents = _utilRetireAccentEtMinuscule(this
							.getRecordValue(item.data, "nom"));
					// Important : il faut recréer l'expression régulière à
					// chaque fois
					// sinon les résultats sont faux !
					var texttest = new RegExp(escaperegex(text), 'ig');
					return ((selectQuartier.getValue() === "all" || stQuartier === selectQuartier
							.getValue())
							&& (stTypeRegexp.test(stType)) && (texttest
							.test(stDechetsNoAccents) || texttest
							.test(stLibelleNoAccents)));
				}
			});
			store.filter(filterElements);
		}
	}

});