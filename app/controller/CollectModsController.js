Ext.define('MieuxTrierANantes.controller.CollectModsController', {
			extend : 'MieuxTrierANantes.controller.AbstractController',
			id : 'collectModsController',
			config : {
				refs : {
					collectModsView : 'collectMods_xtype',
					collectModsList : 'collectModsButtonsPanel_xtype',
					collectModsDetails : 'collectModsDetails_xtype',
					buttonConteneurPapierCarton : '#modco_contpapiercarton'
				},
				control : {
					collectModsView : {
						activate : 'onActivate'
					},
					collectModsList : {
						// initialize : "onInitCollectModsList"
					},
					collectModsDetails : {
						back : 'onPushBackButton3'
					},
					// fonctionne comme une CSS selecteur
					'collectModsButtonsPanel_xtype button' : {
						tap : 'onShowDetails'
					},
					// fonctionne comme une CSS selector
					// (http://www.w3.org/TR/CSS2/selector.html)
					'collectModsDetails_xtype button' : {
						tap : 'onTapLinkButton'
					}
				}
			},
			
			onActivate : function(newActiveItem, container, oldActiveItem,
					eOpts) {
				//		// STORE dataCollectMods
		//		var dataCollectMods = this.getApplication().getController("MieuxTrierANantes.controller.GarbagesController").getCollectModList().getStore();
		//		var arItemsToShow = this.getDatasForButtons_old(dataCollectMods, "modco");

		var arItemsToShow = this.getArrayItemsToShowForButtons(_collectModsDatas, "modco");

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

		var nbMax = 18; // la page affiche 18 éléments
		this.setDataInButtonsWithManyLines(this.getCollectModsList(), "collectModsButtonsPanel", result, nbMax, 3);

		//	var arItems = this.getContentButtonsPanel(arItemsToShow);
		// 	this.removeAllAndSetItems(this.getCollectModsList(), arItems);
			},

			onTapLinkButton : function(button, e, eOpts) {
				this.manageLinkButtons(button._data["code"]);
			},
			
			onShowDetails : function(button, e, eOpts) {
				this.showDetails(button.id);
			},

			showDetails : function(elementId) {

				// Crée la page si elle n'existe pas encode
				if (this.collectModsDetails == null) {
					this.collectModsDetails = Ext
							.create("MieuxTrierANantes.view.collectMod.CollectModsDetails");
				}

				// Récupère l'élément
				var collectModFromStore = _getCollectMod(elementId);

				// Ajout de la description
				var descriptionTraduit = "";
				if (collectModFromStore["description"] != "") {
					descriptionTraduit = collectModFromStore["description"]
							+ "<br/><br/>";
				}
				this.setDataElement(this.collectModsDetails,
						"collectModsDetails_description", {
							'description' : descriptionTraduit
						})

				// Ajout des conseils
				var conseils = "";
				if (collectModFromStore["conseils"] !== "") {
					conseils = collectModFromStore["conseils"] + ",";
				}
				var arsItemsAdvices = _getAdvicesBlock(conseils);
				this.setItemsElement(this.collectModsDetails,
						"collectModsDetails_advices", arsItemsAdvices);

				// Affectation du titre
				var title = "<I>"
						+ _translateWithUpperFirstLetter("label_modeDeCollecte")
						+ "</I> "
						+ _stringUpperFirstLetter(collectModFromStore["libelle"]);
				this.collectModsDetails.setTitle(title);
				
				// Ajout des commentaires
				var code = collectModFromStore["code"];
				this.setItemsElement(this.collectModsDetails,
						"collectModsDetails_comments", this
								.getItemsComments(code, title));


				// Bind the record onto the show contact view
				this.collectModsDetails.setData(collectModFromStore.data);

				this.getCollectModsView().push(this.collectModsDetails);

			}/*,
			onInitCollectModsList : function(container) {
			}*/

		});
