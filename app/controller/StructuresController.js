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
			structureFormButton : "#structureFormButton"

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
		// 		"MieuxTrierANantes.store.Structure2Store", {
		// 			filters : [{
		// 				property : "modesCollecte",
		// 				// le type correspond aux modes de collectes possibles
		// 				// voir
		// 				// http://quentinc.net/javascript/testeur-expressions-regulieres/
		// 				value : /modco_ecopoint|modco_ecotox|modco_decheterie|modco_encombrants/g					}]
		// 		});
		// list.setStore(homecollectmodStore);
		// 2$
		this.getStructuresFormSelectQuartier().setValue("all");
	},

	
	onShowStructures : function() {
		if (this.getStructuresList().getStore()==null) {
			var structureStore = Ext.create("MieuxTrierANantes.store.StructureStore", {
				filters : [{
					property : "modesCollecte",
					value : /modco_ecopoint|modco_decheterie|modco_encombrants_resume|smco_reemp/g
				}]
			});
					// value : /modco_ecopoint|modco_decheterie|modco_encombrants_resume|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempmeuble|smco_reempjouet|smco_reempinfo|smco_reemplivreCD|smco_reempvet|smco_conteneurlerelais|smco_reempdivers|smco_reemplunettes/g
			this.getStructuresList().setStore(structureStore);
			structureStore.load();
		}
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
		if (store!=null) {
			store.clearFilter(true);  // true sinon cela plante dans la version android
			var filterElements = Ext.create("Ext.util.Filter", {
				filterFn : function(item) {
					var stTypeRegexp = new RegExp(selectType.getValue());
					var stQuartier = item.data["zone"];
					var stType = item.data["modesCollecte"];
					var stDechetsNoAccents = item.data["mots_cles"];
					var stLibelleNoAccents = _utilRetireAccentEtMinuscule(item.data["nom"]);
					// Important : il faut recréer l'expression régulière à chaque fois
			// 		sinon les résultats sont faux !
					var texttest = new RegExp(escaperegex(text), 'ig');
					return (
						(selectQuartier.getValue() === "all" || stQuartier === selectQuartier.getValue()) 
						  && (stTypeRegexp.test(stType))
						  && ( texttest.test(stDechetsNoAccents) || texttest.test(stLibelleNoAccents) ) );
				}
			});
			store.filter(filterElements);
		}
	}

});