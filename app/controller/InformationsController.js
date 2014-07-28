

Ext.define('MieuxTrierANantes.controller.InformationsController', {
			extend : 'MieuxTrierANantes.controller.AbstractController',

			config : {
				refs : {
					informations : 'informations_xtype',
					informationsList : 'informationsbuttonslist_xtype'
				},
				control : {

					informations : {
						activate : 'onActivate'
					},
					// fonctionne comme une CSS selecteur
					'informationsbuttonslist_xtype button' : {
						tap : 'onShowDetails'
					}
				}
			},
			onShowDetails : function(button, e, eOpts) {
				if (button.id === 'envoyez') {
					Ext.Viewport.add({
								xtype : 'commentmodal'
							});
				} else {
					this.showDetails(button._data.code);
				}
			},
			showDetails : function(elementId) {
				// Récupère l'élément
				var myElement = _getInfo(elementId);

				var description = myElement["description"]
						+ _getCommentsBloc(myElement["code"]);
				var title = myElement["libelle"];
				// Met l'élément dans le détail
				this.getInformations().push({
							xtype : 'panel',
							title : title,
							html : description,
							scrollable : true,
							styleHtmlContent : true
						}, {
							xtype : 'button',
							width : '200px',
							id : "commentez",
							text : "Commentez"
						});

			},

			onActivate : function(newActiveItem, container, oldActiveItem,
					eOpts) {
				var arItemsToShow = this.getArrayItemsToShowForButtons(
						_infosDatas, "fiche");

				var result = new Array();
				if (arItemsToShow.length > 0) {
					var theItems = arItemsToShow;
					for (var i = 0; i < theItems.length; i++) {
						if (theItems[i]["id"] != '') {
							var stLibelle = _cutWithBr(theItems[i]["libelle"]);
							result.push({
										code : theItems[i]["id"],
										label : stLibelle,
										image : theItems[i]["image"]
									});
						}
					}
				}

				var nbGarbagesMax = 39; // 39 éléments
				this.setDataInButtonsWithManyLines(this.getInformationsList(),
						"informationsButtonsPanel", result, nbGarbagesMax, 3);

				end = new Date().getTime();
			}

		});