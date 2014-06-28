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
			trisacFormSelect : "#trisacFormSelect"
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
				keyup : "onTrisacStoreFilter",
				change : "onTrisacStoreFilter",
				clearicontap : "onTrisacStoreFilter"
			},

			trisacFormSelect : {
				change : "onTrisacStoreFilter",
				initialize : "setOptionsQuartiersAdmin"
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'TrisacDetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton12'
			}
		}
	},

	onPushBackButton12 : function() {
		// console.log("onPushBackButton12");
		// this.onPushBackButton();
	},
	/**
	 * A l"initialisation de la fenêtre
	 */
	onInitTrisacsController : function(list) {
		this.getTrisacFormSelect().setValue("all");
	},

	onShowTrisac : function() {
		if (this.getTrisacList().getStore() == null) {
			var structureStore = Ext.create(
					"MieuxTrierANantes.store.StructureStore", {
						filters : [{
									property : "modesCollecte",
									value : /modco_distrisac/g
								}]
					});
			this.getTrisacList().setStore(structureStore);
			structureStore.load();
		}
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
		var text = this.getTrisacFormText();
		var selectQuartier = this.getTrisacFormSelect();
		/* CRN_MIGRATION
		var store = this.getTrisacList().getStore();
		if (store != null) {
		
			// FIXME : Ceci est un traitement trop long
			store.clearFilter(true);
			// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant sur la catégorie var
			filterHomeCollectMod = Ext.create("Ext.util.Filter", {
				filterFn : function(item) {
					var escaperegex = Ext.String.escapeRegex;
					var stTextRexexp = new RegExp(escaperegex(text.getValue()),
							"ig"); 
					// var stQuartierRexexp = new RegExp(selectQuartier.getValue());
					var stType = item.data["modesCollecte"];
					var stQuartier = item.data["quartier_admin"];
					return (stType == 'modco_distrisac'
							&& stTextRexexp.test(item.data["libelle"]) && (selectQuartier
							.getValue() === "all" || stQuartier === selectQuartier
							.getValue()));
				}
			});
			store.filter(filterHomeCollectMod);

		}*/

	}

});
