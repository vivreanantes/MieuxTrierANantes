/**
 * Controleur de la partie Mode de collecte à domicile
 */
Ext.define("MieuxTrierANantes.controller.TrisacsController", {
	extend : "MieuxTrierANantes.controller.AbstractStructuresController",

	config : {
		refs : {
			structuresView : "trisac_xtype",
			trisacList : "TrisacList_xtype",
			trisacDetail : "TrisacDetails_xtype",
			trisacForm : "TrisacForm_xtype",
			trisacFormText : "#trisacFormText",
			trisacFormSelect : "#trisacFormSelect",
			trisacFormButton : '#trisacFormButton',
			homeButton : '#trisacshomebutton',
			mainView : 'main_xtype'
		},
		control : {

			trisacDetail : {
// updatedata : "onUpdateDataDetail"
			},

			trisacList : {
				initialize : "onInitTrisacsController",
				itemtap : "showStructuresDetail",
				refresh : "onListRefresh"
			},

			structuresView : {
				show : 'onShowTrisac'
			},

			trisacFormText : {
				keyup : 'onKeyUpTrisacFormText',
				change : "onTrisacStoreFilter",
				clearicontap : "onTrisacStoreFilter"
			},

			trisacFormSelect : {
				change : "onTrisacStoreFilter",
				initialize : "setOptionsSousZones"
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'TrisacDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton12'
			},

			trisacFormButton : {
				tap : 'onTrisacStoreFilter'
			},
			homeButton : {
				tap : 'onHomeButton'
			}
		}
	},

	onKeyUpTrisacFormText : function(textbox, event) {
		if (event.browserEvent.keyCode == 13) {
			this.filterElements();
		}
	},

	onPushBackButton12 : function() {
		// console.log("onPushBackButton12");
		// this.onPushBackButton();
	},
	/**
	 * A l'initialisation de la fenêtre
	 */
	onInitTrisacsController : function(list) {
		this.getTrisacFormSelect().setValue("all");
	},

	onShowTrisac : function() {
		var mainView = this.getMainView();
		if (mainView.active != null) {
			// Cas des liens qui ouvre la page
			var record = _getStructure(mainView.active);
			this.showStructuresDetail2(record);
			mainView.active = null;
		} else {
			// Cas normal : on affiche la page
			if (this.getTrisacList().getStore() == null) {
				var structureStore = Ext.create(
						"MieuxTrierANantes.store.StructureStore", {
							filters : [{
										property : "modesCollecte",
										value : /modco_distrisac/g
									}]
						});
				structureStore.setData(_structuresDatas);
				this.getTrisacList().setStore(structureStore);
				structureStore.load();
			}
			// Traduction
			this.structuresViewUpdateTextTranslated();
		}
	},

	/**
	 * Réalise les traduction de la page formulaire/liste de trisac
	 */
	structuresViewUpdateTextTranslated : function() {
		this.getTrisacFormText().setLabel(this
				.translateWithUpperFirstLetter("label_nom"));
		this.getTrisacFormSelect().setLabel(this
				.translateWithUpperFirstLetter("label_quartier"));
		this.getTrisacList().setEmptyText(this
				.translate("label_aucun_resultat"));
		this.getStructuresView().setDefaultBackButtonText(this
				.translateWithUpperFirstLetter("label_retour"));
	},

	// Méthodes invoquées par le formulaire
	onListRefresh : function(list, eOpts) {
		store = this.calculateDatas(list.getStore());
	},

	/**
	 * Filtre en fonction de la chaine saisie et du quartier sélectionné
	 */
	onTrisacStoreFilter : function() {
		this.filterElements();
	},

	filterElements : function() {
		if (this.getTrisacList() != null) {
			var text = this.getTrisacFormText();
			var selectQuartier = this.getTrisacFormSelect();
			var store = this.getTrisacList().getStore();
			if (store != null) {

				// FIXME : Ceci est un traitement trop long
				store.clearFilter(true);
				// Filtrer sans casse, en cherchant la chaine dans le nom, en
				// filtrant sur la catégorie var
				filterHomeCollectMod = Ext.create("Ext.util.Filter", {
					filterFn : function(item) {
						var escaperegex = Ext.String.escapeRegex;
						var stTextRexexp = new RegExp(escaperegex(text
										.getValue()), "ig");
						// var stQuartierRexexp = new
						// RegExp(selectQuartier.getValue());
						var stType = item.data["modesCollecte"];
						var stQuartier = item.data["sous_zone"];
						return (stType == 'modco_distrisac'
								&& stTextRexexp.test(item.data["nom"]) && (selectQuartier
								.getValue() === "all" || stQuartier === selectQuartier
								.getValue()));
					}
				});
				store.filter(filterHomeCollectMod);

			}
		}
	}

});
