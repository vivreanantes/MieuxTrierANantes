

Ext.define('MieuxTrierANantes.controller.InformationsController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	config : {
		refs : {
			informations : 'informations_xtype',
			informationsList : 'informationsbuttonslist_xtype',
			homeButton : '#informationhomebutton',
			mainView : 'main_xtype'
		},
		control : {

			informations : {
				activate : 'onActivate'
			},
			// fonctionne comme une CSS selecteur
			'informationsbuttonslist_xtype button' : {
				tap : 'onShowDetails'
			},
			homeButton : {
				tap : 'onHomeButton'
			}
		}
	},

	onShowDetails : function(button, e, eOpts) {
		if (button.id === 'envoyez') {
			Ext.Viewport.add({
						xtype : 'commentmodal_xtype'
					});
		} else {
			this.showDetails(button._data.code);
		}
	},
	showDetails : function(elementId) {
		// Récupère l'élément
		var myElement = _getInfo(elementId);
		// Calcule 'description' (la description + les commentaires)
		var description = getDescriptionCompleteInfo(myElement);
		var un_titre = this.getRecordValue(myElement, "nom");
		var un_code = this.getRecordValue(myElement, "code");
		// Met l'élément dans le détail
		this.getInformations().push({
					xtype : 'panel',
					title : un_titre,
					html : description,
					scrollable : true,
					listeners : {
						element : 'element',
						delegate : 'a',
						tap : function(e) {
							_gestionLien(e);
						}
					},
					styleHtmlContent : true
				}, {
					xtype : 'button',
					width : '200px',
					id : "commentez",
					text : "Commentez",
					code : un_code
				});
		this.getInformations().setDefaultBackButtonText(this
				.translateWithUpperFirstLetter("label_retour"));

	},

	onActivate : function(newActiveItem, container, oldActiveItem, eOpts) {

		// on initialise la liste des boutons si cela n'a pas encore eu lieu.
		var labelElt1 = this.getInformationsList().items.items[0].items.items[0]._data.label;

		if (labelElt1 === "") {
			var arItemsToShow = this.getArrayItemsToShowForButtons(_infosDatas,
					"fiche");

			var result = new Array();
			if (arItemsToShow.length > 0) {
				var theItems = arItemsToShow;
				for (var i = 0; i < theItems.length; i++) {
					if (theItems[i]["id"] != '') {
						var stLibelle = _cutWithBr(this.getRecordValue(
								theItems[i], "nom"));
						result.push({
									code : theItems[i]["id"],
									label : stLibelle,
									image : theItems[i]["image"]
								});
					}
				}
			}
			var nbGarbagesMax = 42; // 42 éléments
			this.setDataInButtonsWithManyLines(this.getInformationsList(),
					"informationsButtonsPanel", result, nbGarbagesMax, 3);
		}

		var mainView = this.getMainView();
		if (mainView.active != null) {
			// Cas des liens qui ouvre la page
			this.showDetails(mainView.active);
			mainView.active = null;
			// TRELLO_EXTERNE tempo à tester.
			// mainView.setActiveItem(3);
		}
	}
});