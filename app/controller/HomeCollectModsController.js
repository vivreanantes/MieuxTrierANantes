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
			homeCollectModsFormText : '#homeCollectModsFormText'
			// , collectModList : 'collectModList_xtype'
		},
		control : {

			homeCollectModDetail : {
			},

			homeCollectModsList : {
				initialize : 'onInitHomeCollectMods',
				itemtap : 'showHomeCollectModsDetail'

			},

			homeCollectModsView : {
				// On maitient ce control pour pouvoir faire this.getHomeCollectModsView().
				show : 'onShowHomeCollectModsView'
			},

			homeCollectModsFormText : {
				keyup : 'onHomeCollectModStoreFilter',
				change : 'onHomeCollectModStoreFilter',
				clearicontap : 'onHomeCollectModStoreFilter'
			},

			// fonctionne comme une CSS selector
			// (http://www.w3.org/TR/CSS2/selector.html)
			'homecollectmodsdetails_xtype button' : {
				tap : 'onTapLinkButton',
				back : 'onPushBackButton9'
			}
		}
	},
	
	onPushBackButton9 : function() {
			// console.log("onPushBackButton9");
			// this.onPushBackButton();
	},

	/**
	 * A l'initialisation de la fenêtre
	 */
	onInitHomeCollectMods : function(list) {
		// var homecollectmodStore = Ext.create('MieuxTrierANantes.store.HomeCollectModStore');
		// list.setStore(homecollectmodStore);

	},
	
	onShowHomeCollectModsView : function() {
		if (this.getHomeCollectModsList().getStore()==null) {
			var homecollectmodStore = Ext.create(
				'MieuxTrierANantes.store.HomeCollectModStore');
			this.getHomeCollectModsList().setStore(homecollectmodStore);
			homecollectmodStore.load();
		}

		// list.setStore(homecollectmodStore);
	},

	onHomeCollectModsViewPush : function(view, item) {

	},

	showHomeCollectModsDetail : function(list, index, node, record) {

		if (record) {
			if (!this.homeCollectModDetail) {
				this.homeCollectModDetail = Ext
						.create('MieuxTrierANantes.view.homecollectmods.HomeCollectModsDetails');
				// var stSrc = "<b>Source</b> : <font color=red>OpenDataNantes 09/2013</font></I><br/><br/>";
				this.homeCollectModDetail.items.items['0'].setTpl('');
					// '<UL><LI>si vous êtes en <B>"sac bleu et sac jaune"</B> (appelés "Trisac") : les sacs sont à déposer dans le même bac, les déchets recyclables dans le sac jaune, les déchets non recyclables dans le sac bleu.</LI>'+
					// '<LI>si vous êtes en <B>"bac bleu et bac jaune"</B> : les déchets recyclables est à déposer dans le bac jaune, les déchets non recyclables dans le bac bleu.</LI></UL> {src}');
			}
			
			// Récupère les modes de collecte
			var thisController = this;
			var arModesDeCollecte = record.raw["mco"].split(',');
			var arItemsToShow = new Array();

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
			var nbGarbagesdetailsCollectmodsMax = 4;
			thisController.setDataInButtons(
					thisController.homeCollectModDetail.items.items['1'],
					"homecollectmodsdetails_collectmod", arItemsToShow,
					nbGarbagesdetailsCollectmodsMax);

			// Ajout des conseils
			var conseils = record.data["cons"];
			var nbElementsMax = 2; // la page HomeCollectModsDetails.js affiche 2 éléments
			var arsConseils = this.getArrayItemsToShowAdvices(conseils);
			for (var j = 0; j < arsConseils.length; j++) {
				arsConseils
				
			}
			this.setDatasConseils(this.homeCollectModDetail.items.items['0'].items,
					"homecollectmodsdetails_conseils", "libelle", "bouton",
					arsConseils.les_libelles, arsConseils.les_boutons, nbElementsMax);

					
					
			// Bind the record onto the show contact view
			this.homeCollectModDetail.items.items['0'].items.items['0'].setData(record.data);

			// Push the show contact view into the navigation view
			this.getHomeCollectModsView().push(this.homeCollectModDetail);
		}
	},

	// Méthodes invoquées par le formulaire

	/**
	 * Filtre sur les déchets, en fonction de la chaine saisie et de la
	 * catégorie sélectionnée
	 */
	onHomeCollectModStoreFilter : function() {

		var text = this.getHomeCollectModsFormText();
		var store = this.getHomeCollectModsList().getStore();
		store.clearFilter(true); // true sinon cela plante dans la version android
		if (store!=null) {

			thisController = this;
			
			// Filtrer sans casse, en cherchant la chaine dans le nom, en filtrant
			// sur la catégorie
			var filterHomeCollectMod = Ext.create('Ext.util.Filter', {
				filterFn : function(item) {
					var escaperegex = Ext.String.escapeRegex;
					var texteSansAccents = _utilRetireAccent(text.getValue());
					var texttest = new RegExp(escaperegex(texteSansAccents), 'ig');
					var nomVoie_sansAccents = item.data['nvsa'];
					return (texttest.test(nomVoie_sansAccents));
				}
			});
			store.filter(filterHomeCollectMod);
		}
	},
	
	onTapLinkButton : function(button, e, eOpts) {
		var arButtonsId = button._data["code"].split(_SEPARATOR);
		if (arButtonsId[0]==="collectMods_xtype") {
			if (arButtonsId.length > 1) {
				var element = _getCollectMod(arButtonsId[1]);
				if (element!=null) {
					Ext.Msg.alert(element['libelle'], element['description'], Ext.emptyFn);
				}
			}
		} else {
			this.manageLinkButtons(button._data["code"]);
		}
	}

});
