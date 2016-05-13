
/**
 * Controleur abstrait de l'application
 */
Ext.define('MieuxTrierANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller',

	/*
	 * Traduit un libellé. Si on ne le trouve pas, renvoie la clé.
	 */
	translate : function(stKey) {
		var stLocale = getLocale();
		// 2. Sinon on prend dans les labels communs.
		// invoque la fonction définie dans translation.js
		return _translate(stKey, stLocale);
	},

	/*
	 * Traduit un libellé specifique (valeur par défaut : français). Si on ne le
	 * trouve pas, renvoie la clé.
	 */
	getSpecificLabel : function(stKey) {
		var stLocale = getLocale();
		return _translateSpecificLabels(stKey, stLocale);
	},

	/**
	 * Réalise la traduction et met la première lettre en majuscule.
	 */
	translateWithUpperFirstLetter : function(text) {
		return _translateWithUpperFirstLetter(text, getLocale());
	},

	/**
	 * Renvoie la valeur d'un des champs, selon la langue.<br/> Exemple :
	 * getRecordValue(record,'nom') renvoie 'car' si locale vaut 'en'.
	 */
	getRecordValue : function(record, key) {
		return getRecordValue(record, key);
	},

	IMAGE_DIR : "resources/images/",

	ouvertureModaleLieu : function(idLieu) {
		Ext.Msg
				.show(
						'Name',
						"<form id='myform' action='http://www.mieuxtrieranantes.fr/scripts_php/send_mail.php' accept-charset='UTF-8'"
								+ "Email * : "
								+ "<input type='text' id='commentsFormEmailfield' />"
								+ "<br />"
								+ "Commentaire "
								+ "<input type='text' id='commentsFormTextareafield' value='Commentaires sur l application ou la filière tri' />"
								+ "</form>");

		Ext.create('MyApp.view.Login').show();
	},

	ouvertureModaleCommenter : function(message) {
		// http://stackoverflow.com/questions/18229486/how-can-i-include-two-textboxes-in-ext-msg-show
		/*
		 * Ext.Msg.show('Name', "<form id='myform'
		 * action='www.mieuxtrieranantes.fr/scripts_php/send_mail.php'
		 * accept-charset='UTF-8'" + "Email * : " + "<input type='text'
		 * id='commentsFormEmailfield' />" + "<br />" + "Commentaire " + "<input
		 * type='text' id='commentsFormTextareafield' value='Commentaires sur l
		 * application ou la filière tri' />" + "</form>", function(text) { var
		 * value1 = document.getElementById('commentsFormEmailfield').value; var
		 * value1 = document.getElementById('commentsFormTextareafield').value;
		 * document.forms["myform"].submit(); });
		 */
		Ext.create('MyApp.view.Login').show();
		/*
		 * Ext.Msg.show({ title : "Commentaires sur l application et la filière
		 * tri", width : "300px", height : "450px", buttons : Ext.Msg.OKCANCEL,
		 * message : "<form id='myform'
		 * action='www.mieuxtrieranantes.fr/scripts_php/send_mail.php'
		 * accept-charset='UTF-8'" + "Email * : " + "<input type='text'
		 * id='commentsFormEmailfield' value='test@test.fr' />" + "<br />" +
		 * "Commentaire " + "<input type='text' id='commentsFormTextareafield'
		 * value='Commentaires sur l application ou la filière tri' />" + "</form>",
		 * fn : function(button) { var value1 =
		 * document.getElementById('commentsFormEmailfield').value; var value2 =
		 * document .getElementById('commentsFormTextareafield').value;
		 * document.forms["myform"].submit(); } });
		 */
	},

	/**
	 * Remet la page d'accueil en premier.
	 */
	onHomeButton : function() {

		var mainView = this.getMainView();
		if (mainView != null) {
			mainView.setActiveItem(0);
			// TODO
			// je reviens sur la page de depart
			/*
			 * if
			 * (this.getHome().getActiveItem().id.indexOf("homeContainer_xtype") ==
			 * -1) { var homeView = this.getHome();
			 * homeView.getNavigationBar().fireEvent('back', this); }
			 */

		}
	},

	setDataInButtonsWithManyLines : function(panel, prefix, arItems,
			nbMaxElements, nbElementsPerLine) {

		var start = new Date().getTime();

		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var nbLine = Math.floor(i / nbElementsPerLine);
			// Si la ligne n'existe pas
			if (panel.items.items[nbLine] == null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys
						.indexOf(prefixComplet);
			}
			if (item != -1) {
				panel.items.items[nbLine].items.items[item].setData(element);
				panel.items.items[nbLine].items.items[item].setHidden(false);
			}
		};

		end = new Date().getTime();
		time = end - start;
		// console.log("setDataInButtonsWithManyLines etape 1 : " + time);

		for (var i = idElementToChange; i < nbMaxElements; i++) {
			// Cache les éléments restants
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var nbLine = Math.floor(i / nbElementsPerLine);
			// Si la ligne n'existe pas
			if (panel.items.items[nbLine] == null) {
				item = -1;
			} else {
				var item = panel.items.items[nbLine].items.keys
						.indexOf(prefixComplet);
			}
			if (item != -1) {
				panel.items.items[nbLine].items.items[item].setHidden(true);
			}
		}

		end = new Date().getTime();
		time = end - start;
		// console.log("setDataInButtonsWithManyLines etape 2 : " + time);
	},

	setDataInButtons : function(panel, prefix, arItems, nbMaxElements) {

		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var idElementToChange = i + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet);
			if (item != -1) {
				panel.items.items[item].setData(element);
				panel.items.items[item].setHidden(false);
			}
		};
		// Cache les éléments restants
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			var idElementToChange = idElementToChange + 1;
			var prefixComplet = prefix + "_" + idElementToChange;
			var item = panel.items.keys.indexOf(prefixComplet);
			if (item != -1) {
				panel.items.items[item].setHidden(true);
			}
		}
	},
	/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "commentaires" d'une page
	 * 
	 * @params commentsString chaine de caractère correspondant au code de
	 *         l'élément dont on recherche des commentaires (ex :
	 *         "dec_bouchons")
	 */
	getItemsComments : function(commentsString, title) {
		var result = new Array();

		// On parcourt les remarques de la faq
		for (j in _commentsDatas) {
			if (_commentsDatas[j]["elements"] != null) {

				if (_commentsDatas[j]["elements"] != null) {
					var arElementsFaq = _commentsDatas[j]["elements"].replace(
							", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arElementsFaq) {

						if (arElementsFaq[i] === commentsString) {
							result.push({
								html : "<img src='resources/icons/chat2.png' /><B>"
										+ _commentsDatas[j]["nom"]
										+ "</B><BR/>"
										+ _commentsDatas[j]["descr"] + "<br/>"
							});
						}

					}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "")
				.replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " ("
				+ commentsString + ")";
		result.push({
					xtype : 'button',
					width : 200,
					id : "garbagesdetails_informations",
					text : "Envoyer un commentaire",
					data : {
						code : codeValue
					}
				}

		);
		return result;
	},

	/**
	 * Affecte les items (les éléments fils d'un container) à un élement dont
	 * l'identifiant est elementId de l'élément view.
	 */
	setItemsElement : function(view, elementId, arItems) {
		var theItems = view.items.items;
		for (var i = 0; i < theItems.length; i++) {
			if (theItems[i].id == elementId) {
				// Cet élément devient actif
				theItems[i].setItems(arItems);
			}
		};
	},

	/**
	 * Affecte les datas d'un élement dont l'identifiant est elementId de
	 * l'élément view.
	 */
	setDataElement : function(view, elementId, objectData) {
		var theItems = view.items.items;
		for (var i = 0; i < theItems.length; i++) {
			if (theItems[i].id == elementId) {
				// Cet élément devient actif
				theItems[i].setData(objectData);
			}
		};
	},

	/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "conseils" d'une page
	 * 
	 * @params advicesString chaine de caractère listant les codes des conseils
	 *         (ex : ",cons_1,cons2,cons3")
	 */

	getArrayItemsToShowAdvices : function(advicesString) {
		var result1 = new Array();
		var result2 = new Array();
		var result3 = new Array();
		if (advicesString != null) {
			var arConseils = advicesString.replace(", /g", ",").replace(" ,/g",
					",").split(',');

			// On parcourt les conseils
			if (arConseils.length > 0) {
				for (j in _advicesDatas) {
					for (i in arConseils) {
						if (_advicesDatas[j]["code"] === arConseils[i]) {
							// le conseil avec l'icone "info"
							var nom = this.getRecordValue(_advicesDatas[j],
									"nom");
							var descr = this.getRecordValue(_advicesDatas[j],
									"descr");
							result1.push({
										nom : "<img src='resources/icons/info.png' /> "
												+ nom,
										descr : descr
									});
							// le texte "voir fiche fff"
							if (_advicesDatas[j]["fiche"] != null
									&& _advicesDatas[j]["fiche"] != "") {
								var info = _getInfo(_advicesDatas[j]["fiche"]);
								if (info != null) {
									var libelleInfo = this.getRecordValue(info,
											"nom");
									var codeInfo = info["code"];
									result2.push({
												"nom" : libelleInfo,
												code : "informations"
														+ _SEPARATOR
														+ _advicesDatas[j]["fiche"]
											});
									result3.push({
										"html" : this
												.translate("label_plus_d_infos")
												+ " <i><a href='fich:"
												+ codeInfo
												+ "'>"
												+ libelleInfo
												+ "</a></i>"
									});

								}
							}
						}
					}
				}
			}
		}
		return {
			les_libelles : result1,
			les_boutons : result2,
			le_html : result3
		};
	},

	setDatasConseils : function(panel, prefix, prefix2, prefix3, arItems,
			arItemsBoutons, arItemsHTML, nbMaxElements, nbElementsPerLine) {

		// 1. les libellés
		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var elementButton = arItemsBoutons[i];
			var elementHTML = arItemsHTML[i];
			var idElementToChange = i + 1;
			// On retrouve l'index de l'élément parent
			var indexParent = panel.keys.indexOf(prefix + "_"
					+ idElementToChange);
			if (indexParent != -1) {
				var panelParent = panel.items[indexParent];
				panelParent.setHidden(false);
				var prefixComplet = prefix + "_" + idElementToChange + "_"
						+ prefix2;
				var index = panelParent.items.keys.indexOf(prefixComplet);
				if (index != -1) {
					panelParent.items.items[index].setData(element);
					// panelParent.items.items[index].setHidden(false);
				}
				/*
				 * if (elementButton) { var prefixComplet = prefix + "_" +
				 * idElementToChange + "_" + prefix3; var index =
				 * panelParent.items.keys.indexOf(prefixComplet); if (index !=
				 * -1) { panelParent.items.items[index].setData(elementButton); } }
				 */
				if (elementHTML) {
					var prefixComplet = prefix + "_" + idElementToChange + "_"
							+ prefix3;
					var index = panelParent.items.keys.indexOf(prefixComplet);
					if (index != -1) {
						panelParent.items.items[index]
								.setHtml(elementHTML.html);
					}
				}
			}
		}
		// Cache les éléments restants
		for (var i = idElementToChange; i < nbMaxElements; i++) {
			var idElementToChange = idElementToChange + 1;
			// On retrouve l'index de l'élément parent
			var indexParent = panel.keys.indexOf(prefix + "_"
					+ idElementToChange);
			if (indexParent != -1) {
				var panelParent = panel.items[indexParent];
				panelParent.setHidden(true);
			}
		}

	},

	getArrayItemsToShowComments : function(commentsString, title) {
		var result = new Array();

		// On parcourt les commentaires
		for (j in _commentsDatas) {
			if (_commentsDatas[j]["elements"] != null) {
				var arElementsFaq = _commentsDatas[j]["elements"].replace(
						", /g", ",").replace(" ,/g", ",").split(',');
				for (i in arElementsFaq) {

					if (arElementsFaq[i] === commentsString) {
						var nom = this.getRecordValue(_commentsDatas[j], "nom");
						var descr = this.getRecordValue(_commentsDatas[j],
								"descr");
						result.push({
							libelle : "<img src='resources/icons/chat2.png' /> "
									+ nom,
							description : descr
						});
					}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "")
				.replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " ("
				+ commentsString + ")";
		return {
			les_libelles : result,
			le_titre : codeValue
		};
	},

	/*
	 * Créer un lien vers une page de l'application. En paramètre l'identifiant :
	 * valeur autorisées : garbagePanel, mapPanel, informationsPanel,
	 * structuresPanel, reusesPanel, collectModsPanel, homeCollectsModsPanel,
	 * trisacsPanel, commentsPanel, aboutPanel
	 */
	makeLink : function(id, idDetail) {
		if (idDetail == undefined) {
			idDetail = "";
		}
		var res = "";
		var st1 = "<a href='#' onClick='Javascript:";
		var st2 = "' >";
		var st3 = "</a>";

		if (id == "garbagePanel") {
			res = st1 + "showGarbagePanel(\"" + idDetail + "\")" + st2
					+ "Déchets" + st3;
		} else if (id == "mapPanel") {
			res = st1 + "showMapPanel(\"" + idDetail + "\")" + st2 + "Carte"
					+ st3;
		} else if (id == "informationsPanel") {
			res = st1 + "showInformationsPanel(\"" + idDetail + "\")" + st2
					+ "Informations" + st3;
		} else if (id == "structuresPanel") {
			res = st1 + "showStructuresPanel(\"" + idDetail + "\")" + st2
					+ "Structures" + st3;
		} else if (id == "reusesPanel") {
			res = st1 + "showReusesPanel(\"" + idDetail + "\")" + st2
					+ "Récup." + st3;
		} else if (id == "collectModsPanel") {
			if (idDetail != "") {
				var label = this.translate("label_" + idDetail);
			}
			if (label == "" || label == idDetail) {
				label = "Modes de collectes";
			}
			res = st1 + "showCollectModsPanel(\"" + idDetail + "\")" + st2
					+ label + st3;

		} else if (id == "homeCollectsModsPanel") {
			res = st1 + "showHomeCollectsModsPanel(\"" + idDetail + "\")" + st2
					+ "A domicile" + st3;
		} else if (id == "trisacsPanel") {
			res = st1 + "showTrisacsPanel(\"" + idDetail + "\")" + st2
					+ "Trisac" + st3;
		} else if (id == "commentsPanel") {
			res = st1 + "showCommentsPanel(\"" + idDetail + "\")" + st2
					+ "Commentaires" + st3;
		} else if (id == "aboutPanel") {
			res = st1 + "showAboutPanel(\"" + idDetail + "\")" + st2
					+ "A propos" + st3;
		}
		return res;
	},

	/**
	 * Valorise les options des listes déroulantes "quartier" (pour Nantes
	 * Métropôle, ce sont les quartiers administratifs)
	 */
	setOptionsSousZones : function(selectField) {

		selectField.setOptions([{
					text : 'Tous',
					value : 'all'
				}, {
					text : "Bellevue Chantenay Sainte-Anne",
					value : "qbcsa"
				}, {
					text : "Breil Barberie",
					value : "qbb"
				}, {
					text : "Centre Ville",
					value : "qcv"
				}, {
					text : "Dervallières Zola",
					value : "qdz"
				}, {
					text : "Doulon Bottière",
					value : "qdb"
				}, {
					text : "Hauts Pavés - Saint Félix",
					value : "qhpsf"
				}, {
					text : "Ile De Nantes",
					value : "qidn"
				}, {
					text : "Malakoff - Saint-Donatien",
					value : "qmsd"
				}, {
					text : "Nantes Erdre",
					value : "qne"
				}, {
					text : "Nantes Nord",
					value : "qnn"
				}, {
					text : "Nantes Sud",
					value : "qns"
				}]);
	},

	/**
	 * Valorise les options des listes déroulantes "ville"
	 */
	setOptionsZones : function(selectField) {

		selectField.setOptions([{
					text : 'Toutes',
					value : 'all'
				}, {
					text : "Nantes",
					value : "Nantes"
				}, {
					text : "Hors Nantes : Nord Loire",
					value : "hnnl"
				}, {
					text : "Hors Nantes : Sud Loire",
					value : "hnsl"
				}]);

	},

	/**
	 * Construit un bouton dont l'identifiant est mainPageXtype +
	 * elementToShowInPage (ex : "garbagesView-dec_aerosols").
	 */
	makeLinkButton : function(id, idDetail) {
		var label = this.translate("label_" + idDetail);
		var idComplet = id + _SEPARATOR + idDetail;
		var idComplet = "collectMods-contembjournmag";
		var res = {
			xtype : 'button',
			id : idComplet,
			text : label
		};
		return res;
	},

	saveBackButton : function(buttonId, mainOrNot) {
		Ext.getCmp("mainView").stBackButton = buttonId;
		Ext.getCmp("mainView").stBackButtonMain = mainOrNot;
	},

	onPushBackButton : function() {
		if (Ext.getCmp("mainView").stBackButton) {
			this.manageBackButton(Ext.getCmp("mainView").stBackButton, Ext
							.getCmp("mainView").stBackButtonMain);
		}
	},

	manageBackButton : function(mainPageXtype, mainOrNot) {

		// On recherche la page dont le xtype correspond au buttonId
		var mainItems = Ext.getCmp("mainView").items.items;
		for (var i = 0; i < mainItems.length; i++) {
			if (mainItems[i].xtype == mainPageXtype) {
				// if (mainOrNot) {
				// Ext.getCmp("mainView").items.items[i-1].setActiveItem(0);
				// }
				// Cet élément devient actif
				Ext.getCmp("mainView").setActiveItem(i - 1);
			}
		};
	},

	/**
	 * Effectue le changement de page
	 * 
	 * @param {}
	 *            buttonId : mainPageXtype + elementToShowInPage (ex :
	 *            "garbagesView-dec_aerosols")
	 */
	manageLinkButtons : function(buttonId) {

		// On décompose buttonId pour initialiser mainPageXtype et
		// elementToShowInPage
		var arButtonsId = buttonId.split(_SEPARATOR);
		var mainPageXtype = arButtonsId[0];
		if (arButtonsId.length > 1) {
			var elementToShowInPage = arButtonsId[1];
		}

		// On affiche le déchet
		if (mainPageXtype == "garbages_xtype") {
			var myController = this
					.getApplication()
					.getController("MieuxTrierANantes.controller.GarbagesController");
			var datas = myController.getGarbagesList().getStore().getData();
			datas.each(function(record) {
						if (record.data["code"] == elementToShowInPage) {
							// On doit effacer le filtre pour être sur que la
							// liste contient bien l'élément
							store.clearFilter();
							myController.showGarbagesDetail(null, null, null,
									record);
						}
					});
		}
		// OU On affiche le mode de collecte
		else if (mainPageXtype == "collectMods_xtype") {
			var myController = this
					.getApplication()
					.getController("MieuxTrierANantes.controller.CollectModsController");
			if (elementToShowInPage != null) {
				myController.showDetails(elementToShowInPage);
			}
		}
		// OU On affiche la fiche explicative
		else if (mainPageXtype == "informations") {
			informationsController = this
					.getApplication()
					.getController("MieuxTrierANantes.controller.InformationsController");
			if (_getInfo(elementToShowInPage)) {
				informationsController.showDetails(elementToShowInPage);
			}

			// // STORE datasInformations
			// var myController = this
			// .getApplication().getController("MieuxTrierANantes.controller.GarbagesController");
			// var datas =
			// myController.getInformationsList().getStore().getData();
			// myController =
			// this.getApplication().getController("MieuxTrierANantes.controller.InformationsController");
			// // CRN_TEMPO
			// datas.each(function (record) {
			// // bascule vers la page
			// if (record.data["code"] == elementToShowInPage) {
			// myController.showDetails(elementToShowInPage);
			// }
			// });

		}
		// OU On affiche le commentaire
		else if (mainPageXtype == "comments_xtype") {
			Ext.getCmp("commentsFormTextfield").setValue("A propos de '"
					+ elementToShowInPage + "'");
			Ext.getCmp("commentsFormTextareafield").setValue("");
		}

		// On recherche la page dont le xtype correspond au buttonId
		var mainItems = Ext.getCmp("mainView").items.items;
		for (var i = 0; i < mainItems.length; i++) {
			if (mainItems[i].xtype == mainPageXtype) {
				// Cet élément devient actif
				Ext.getCmp("mainView").setActiveItem(i - 1);
			}
		};

	},

	/**
	 * Renvoie les boutons d'après le data d'un store
	 * 
	 * @param {}
	 *            datas buttonLabel le label du bouton a affiche (exemple "cu"
	 *            pour "catégories usuelles")
	 * @return {} tableau des items (les items sont des objets permettant de
	 *         créer des boutons)
	 */
	getDatasForButtons : function(datas, buttonLabel) {
		var arItemsToShow = new Array();
		var thisController = this;
		datas.each(function(record) {
					if (record.data["categ"] == buttonLabel) {
						// Ajoute les <br/>
						var stLibelle = _cutWithBr(this.getRecordValue(
								record.data, "nom"));
						arItemsToShow.push({
									"nom" : stLibelle,
									"image" : record.data["image"],
									"id" : record.data["code"]
								});
					}

				});
		return arItemsToShow;
	},

	/**
	 * Découpe une chaîne de caractère (notamment pour les boutons) en insérant
	 * des balises "<br/>
	 */
	/*
	 * decoupe : function(stChaine) { var result = ""; if (stChaine !=
	 * undefined) { var iTailleMax = 30; // séparateurs : ", " OU " ," OU " -"
	 * OU "- " OU "-" OU " " var ar = stChaine.split(/, | ,| -|- |-| /); var
	 * tailleRestanteLigne = iTailleMax; for (var i = 0; i < ar.length; i++) {
	 * result += ar[i]; tailleRestanteLigne = tailleRestanteLigne -
	 * ar[i].length; // Si il reste des mots if (i + 1 < ar.length) { // Si le
	 * prochain mot n'est pas trop long, on ajoute juste // un // espace if
	 * (ar[i + 1].length <= tailleRestanteLigne) { result += " ";
	 * tailleRestanteLigne = tailleRestanteLigne - 1; } // Sinon on ajoute un
	 * retour à la ligne else { result += "<br/>"; tailleRestanteLigne =
	 * iTailleMax; } } } } return result; },
	 */

	/**
	 * Renvoie les boutons d'après le data
	 * 
	 * @param {Array}
	 *            data objet correspond aux boutons
	 * @param {string}
	 *            buttonLabel le label du bouton a affiche (exemple "cu" pour
	 *            "catégories usuelles")
	 * @return {Array} tableau des items (les items sont des objets permettant
	 *         de créer des boutons)
	 */

	getArrayItemsToShowForButtons : function(datas, buttonLabel) {
		var arItemsToShow = new Array();
		for (var i = 0; i < datas.length; i++) {
			if (typeof datas[i].bouton != "undefined"
					&& datas[i].bouton == buttonLabel) {
				// Ajoute les <br/>
				var nom = _cutWithBr(this.getRecordValue(datas[i], "nom"));
				arItemsToShow.push({
							"nom" : nom,
							"image" : datas[i].image,
							"id" : datas[i].code
						});
			}
		};
		return arItemsToShow;

	},

	showActiveItemInPage : function(page, code) {
		var mainView = this.getMainView();
		mainView.page = page;
		mainView.active = code;
		// on passe le type en minuscule
		// type = type.toLowerCase();
		if (page == "garbages") {
			mainView.setActiveItem(1);
		} else if (page == "fiches") {
			mainView.setActiveItem(3);
		} else if (page == "collectmods") {
			// mainView.setActiveItem(2);
		} else if (page == "structures") {
			mainView.setActiveItem(4);
		} else if (page == "quiz") {
			mainView.setActiveItem(0);
		} else if (page == "homecollectmods") {
			mainView.setActiveItem(5);
		} else if (page == "trisacs") {
			mainView.setActiveItem(6);
		}
	},

	/**
	 * Renvoie la distance
	 */
	calculeDistance : function(posLatitudeInit, longitudeInit, posLatitude,
			posLongitude) {
		var latLngCentre = L.latLng(posLatitudeInit, longitudeInit);
		var latLngStructure = L.latLng(posLatitude, posLongitude);
		var distanceEnMetre = latLngStructure.distanceTo(latLngCentre);
		return distanceEnMetre;
	},

	/**
	 * Renvoie la liste des objets correspondant à une recherche globale.
	 * RM_REC_GLOB_01
	 */
	getGlobalSearchResult : function(texteRecherche) {
		var locale = getLocale();
		var tempo = [];
		var texteNoAccents = _utilRetireAccentEtMinuscule(texteRecherche);
		// RM_RE_MOTS_CLES_01
		var textes = texteNoAccents.split(',');
		for (var j = 0; j < textes.length; j++) {
			var texte = textes[j];
			this.ajouteDatasSelonHash(tempo, _hashGarbagesDatas, _garbagesDatas,
					texte, locale, "garbages");
			this.ajouteDatasSelonHash(tempo, _hashFichesDatas, _infosDatas, texte,
					locale, "fiches");
			// Pour l'instant on ne met pas les docs
			// ajouteDatasSelonHash(tempo, _hashDocsDatas, _docsDatas, texte,
			// locale, "docs");
			this.ajouteDatasSelonHash(tempo, _hashStructuresDatas, _structuresDatas,
					texte, locale, "structures");
			this.ajouteDatasSelonHash(tempo, _hashTrisacsDatas, _structuresDatas,
					texte, locale, "trisacs");
			this.ajouteDatasSelonHash(tempo, _hashADomicileDatas,
					_homeCollectModsDatas, texte, locale, "homecollectmods");
		}
		return tempo;
	},
	/**
	 * Cette fonctionne modifie un tableau fourni en paramètre, en ajoutant des
	 * éléments du tableau _datas.<br/> On ajoute les éléments du tableau
	 * _datas après avoir rechercher dans le tableau _hash tous les éléments
	 * dont les codes sont exacement la chaine texteNoAccents.<br/> On prend en
	 * compte locale dans la recherche de _hash.<br/> page est le nom de la
	 * page sur laquelle sera affichée la donnée, et qui est mise sur la donnée
	 */
	ajouteDatasSelonHash : function(tableauARetourner, _hash, _datas,
			texteNoAccents, locale, page) {
		// RM_LA_LANGUE_06
		if (locale == "en" && _hash.length > 1) {
			var cles = _hash[1][texteNoAccents];
		} else {
			var cles = _hash[0][texteNoAccents];
		}
		if (cles != undefined) {
			var codesCles = cles.split(',');
			var taille = codesCles.length;
			for (var j = 0; j < taille; j++) {
				var codeCle = codesCles[j];
				for (var k = 0; k < _datas.length; k++) {
					if (typeof _datas[k] != "undefined"
							&& _datas[k]["code"] == codeCle) {
						if (page == "homecollectmods") {
							_datas[k]["type"] = "Collecte à domicile";
							_datas[k]["type_en"] = "Home collect";
							_datas[k]["image"] = "icon-go-home.png";
							_datas[k]["nom"] = _datas[k]["dcv"];
							_datas[k]["nom_en"] = _datas[k]["dcv"];
							_datas[k]["jcbj_en"] = _datas[k]["jcbj"].replace(
									"Sacs (jaunes et bleus)",
									"Bags (yellow et blue)").replace("lundi",
									"monday").replace("mardi", "tuesday")
									.replace("mercredi", "wednesday").replace(
											"jeudi", "thursday").replace(
											"vendredi", "friday").replace(
											"samedi", "saturday").replace(
											"dimanche", "sunday");
						}
						// if (page == "docs") {
						// _datas[k]["nom_en"] = "<a href='http://"
						// + this.getRecordValue(_datas[k], "url") + "'
						// target=_new>"
						// + this.getRecordValue(_datas[k], "nom") + "</a>";
						// }
						_datas[k]["page"] = page;
						// Permet de prendre le français quand on a pas la
						// traduction
						_datas[k]["nom_en"] = this.getRecordValue(_datas[k],
								"nom");
						_datas[k]["type_en"] = this.getRecordValue(_datas[k],
								"type");
						// TRELLO_DISTANCE_JOURS
						/*if (typeof _datas[k]["latitude"] != "undefined") {
							var diste = this.calculeDistance(
									_datas[k]["latitude"],
									_datas[k]["longitude"],
									_datas[k]["latitude"],
									_datas[k]["longitude"]);
						}*/
						tableauARetourner.push(_datas[k]);
					}
				}
			}
		}
	}
}

);

function showGarbagePanel(id) {
	Ext.getCmp("mainView").setActiveItem(0);
};
function showMapPanel(id) {
	Ext.getCmp("mainView").setActiveItem(1);
};
function showInformationsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(2);
};
function showStructuresPanel(id) {
	Ext.getCmp("mainView").setActiveItem(3);
};
function showReusesPanel(id) {
	Ext.getCmp("mainView").setActiveItem(4);
};
function showCollectModsPanel(collectModId) {
	/*
	 * if (collectModId != "") {
	 * Ext.getCmp("collectModsController").showDetails(collectModId);
	 * this.getApplication()
	 * .getController('MieuxTrierANantes.controller.CollectModsController')
	 * .showDetails(collectModId); }
	 */
	Ext.getCmp("mainView").setActiveItem(6);
};
function showHomeCollectsModsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(7);
};
function showTrisacsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(8);
};
function showCommentsPanel(id) {
	Ext.getCmp("mainView").setActiveItem(9);
};
function showAboutPanel(id) {
	Ext.getCmp("mainView").setActiveItem(9);
};