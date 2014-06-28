
/**
 * Controleur abstrait de l'application
 */
Ext.define('MieuxTrierANantes.controller.AbstractController', {
	extend : 'Ext.app.Controller',


	/*
	 * Traduit un libellé. Si on ne le trouve pas, renvoie la clé.
	 */

	translate : function(stKey) {
		if (this.stLocale == null) {
			this.stLocale = this.getLocale();
		}
		// invoque la fonction définie dans translation.js
		return _translate(stKey, this.stLocale);
	},

	/**
	 * Renvoie la locale (par exemple "fr" ou "en"). Cette fonction invoque le
	 * LocalStorageController.
	 */
	getLocale : function() {
		var result = "fr";
		/*var localStorageController = this
				.getApplication()
				.getController("MieuxTrierANantes.controller.LocalStorageController");
		result = localStorageController.getLocale();*/
		return result;
	},

	IMAGE_DIR : "resources/images/",


	setDataInButtonsWithManyLines : function(panel, prefix, arItems,
			nbMaxElements, nbElementsPerLine) {
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
		getItemsComments : function (commentsString, title) {
		var result = new Array();

		// On parcourt les remarques de la faq
		for (j in _commentsDatas) {
			if (_commentsDatas[j]["elements"] != null) {

				if (_commentsDatas[j]["elements"]!=null) {
					var arElementsFaq = _commentsDatas[j]["elements"].replace(", /g", ",").replace(" ,/g", ",").split(',');
					for (i in arElementsFaq) {
	
						if (arElementsFaq[i] === commentsString) {
							result.push({
								html : "<img src='resources/icons/chat2.png' /><B>" + _commentsDatas[j]["libelle"] + "</B><BR/>" + _commentsDatas[j]["description"] + "<br/>"
							});
						}

				}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " (" + commentsString + ")";
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

		getArrayItemsToShowAdvices : function (advicesString) {
		var result1 = new Array();
		var result2 = new Array();
		if (advicesString!=null) {
			var arConseils = advicesString.replace(", /g", ",").replace(" ,/g", ",").split(',');
			
			// On parcourt les conseils
			if (arConseils.length > 0) {
				for (j in _advicesDatas) {
					for (i in arConseils) {
						if (_advicesDatas[j]["code"] === arConseils[i]) {
							result1.push({
								libelle : "<img src='resources/icons/info.png' /> " + _advicesDatas[j]["libelle"],
								description : _advicesDatas[j]["description"]
							});
							if (_advicesDatas[j]["fiche"] != null
								 && _advicesDatas[j]["fiche"] != "") {
								result2.push({
									"libelle" :  _advicesDatas[j]["libelle"],
									code : "informations" + _SEPARATOR + _advicesDatas[j]["fiche"]
								});
							}
						}
					}
				}
			}
		}
		return {
			les_libelles : result1,
			les_boutons : result2
		};
	},

	setDatasConseils : function(panel, prefix, prefix2, prefix3, arItems, arItemsBoutons,
			nbMaxElements, nbElementsPerLine) {

		// 1. les libellés
		var idElementToChange = 0;
		for (var i = 0; i < arItems.length; i++) {
			var element = arItems[i];
			var elementButton = arItemsBoutons[i];
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
				if (elementButton) {
					var prefixComplet = prefix + "_" + idElementToChange + "_"
						+ prefix3;
					var index = panelParent.items.keys.indexOf(prefixComplet);
					if (index != -1) {
						panelParent.items.items[index].setData(elementButton);
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

	getArrayItemsToShowComments : function (commentsString, title) {
		var result = new Array();

		// On parcourt les commentaires
		for (j in _commentsDatas) {
			if (_commentsDatas[j]["elements"] != null) {
				var arElementsFaq = _commentsDatas[j]["elements"].replace(", /g", ",").replace(" ,/g", ",").split(',');
				for (i in arElementsFaq) {

					if (arElementsFaq[i] === commentsString) {
						result.push({
							libelle : "<img src='resources/icons/chat2.png' /> " + _commentsDatas[j]["libelle"],
							description : _commentsDatas[j]["description"]
						});
					}
				}
			}
		}
		title = title.replace("-/g", "_").replace("<I>", "").replace("</I>", "");
		var codeValue = "comments_xtype" + _SEPARATOR + " " + title + " (" + commentsString + ")";
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
			informationsController = this.getApplication().getController("MieuxTrierANantes.controller.InformationsController");
			if (_getInfo(elementToShowInPage)) {
				informationsController.showDetails(elementToShowInPage);
			}
			

			//			// STORE datasInformations
			//			var myController = this	.getApplication().getController("MieuxTrierANantes.controller.GarbagesController");
			//			var datas = myController.getInformationsList().getStore().getData();
			//			myController = this.getApplication().getController("MieuxTrierANantes.controller.InformationsController");
			//			// CRN_TEMPO
			//			datas.each(function (record) {
			//				// bascule vers la page
			//				if (record.data["code"] == elementToShowInPage) {
			//					myController.showDetails(elementToShowInPage);
			//				}
			//			});

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
					if (record.data["bouton"] == buttonLabel) {

						// Ajoute les <br/>
						var stLibelle = _cutWithBr(record.data["libelle"]);

						arItemsToShow.push({
									"libelle" : stLibelle,
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
	/*decoupe : function(stChaine) {
		var result = "";
		if (stChaine != undefined) {
			var iTailleMax = 30;

			// séparateurs : ", " OU " ," OU " -" OU "- " OU "-" OU " "
			var ar = stChaine.split(/, | ,| -|- |-| /);
			var tailleRestanteLigne = iTailleMax;
			for (var i = 0; i < ar.length; i++) {
				result += ar[i];
				tailleRestanteLigne = tailleRestanteLigne - ar[i].length;
				// Si il reste des mots
				if (i + 1 < ar.length) {
					// Si le prochain mot n'est pas trop long, on ajoute juste
					// un
					// espace
					if (ar[i + 1].length <= tailleRestanteLigne) {
						result += " ";
						tailleRestanteLigne = tailleRestanteLigne - 1;
					}
					// Sinon on ajoute un retour à la ligne
					else {
						result += "<br/>";
						tailleRestanteLigne = iTailleMax;
					}
				}
			}
		}
		return result;
	},*/
	
	/**
	 * Renvoie les boutons d'après le data
	 *
	 * @param {Array} data objet correspond aux boutons
	 * @param {string} buttonLabel le label du bouton a affiche (exemple "cu"
	 *            pour "catégories usuelles")
	 * @return {Array} tableau des items (les items sont des objets permettant de
	 *         créer des boutons)
	 */

	getArrayItemsToShowForButtons : function (datas, buttonLabel) {
		var arItemsToShow = new Array();
		for (var i = 0; i < datas.length; i++) {
			if (datas[i].bouton == buttonLabel) {
				var stLibelle = _cutWithBr(datas[i]["libelle"]); // Ajoute les <br/>
				arItemsToShow.push({
					"libelle" : stLibelle,
					"image" : datas[i].image,
					"id" : datas[i].code
				});
			}
		};
		return arItemsToShow;

	}
});


/*
Ext.define('MieuxTrierANantes.view.comments.CommentsModal', {
	extend : 'Ext.Panel',
	alias : 'widget.commentmodal',

	config : {
		centered : true,
		height : "420px",
		itemId : 'modalPanel',
		width : "300px",
		hideOnMaskTap : true,
		modal : true,
		scrollable : true,
		layout : 'vbox',
		title : "Commentaires sur l'application et la filière tri",
		scrollable : 'true',
		items : [{
					xtype : "label",
					html : "<p>Cliquer en dehors de la modale pour la fermer.</p>"
				}, {
					xtype : 'commentsForm_xtype',
					height : "350px",
					scrollable : false,
					url : 'http://renoulin.fr/mieuxtrieranantes/send_mail.php',
					headers : {
						'Content-Type' : 'multipart/form-data; charset=UTF-8'
					}
					style : 'background-color: #759E60;',
		method : 'POST',
		items : [{
			xtype : 'fieldset',
			items : [{
						xtype : 'emailfield',
						name : 'email',
						label : 'Email *'
					}, {
						xtype : 'textfield',
						name : 'sujet',
						label : 'Sujet',
						id : 'commentsFormTextfield'
					}, {
						xtype : 'textareafield',
						height : '150px',
						name : 'message',
						label : 'Texte',
						id : 'commentsFormTextareafield',
						placeHolder : "Commentaires sur l'application ou la filière tri"
					}]
		}, {
			xtype : 'button',
			text : 'Envoyez',
			iu : 'confirm',
			handler : function() {
				this.up("commentsForm_xtype").submit({
					failure : function(form, result) {
						if (result.failure != null) {
							Ext.Msg.alert("Envoi message",
									"Échec de l'envoi : " + result.failure);
						} else {
							Ext.Msg.alert("Envoi message", "Échec de l'envoi.");
						}
					},
					success : function(form, result) {
						Ext.Msg.alert("Envoi message",
								"Votre message a bien été envoyé.");

					}
				});
			}
		}]
	}
				}]
	}

});
 */


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

sendMail = function(id) {
	var msg = {
		subject : "Ajouter un commentaire " + id,
		body : "N'oubliez pas votre nom."
	};
	window.location = "mailto:vivreanantes@gmail.com" + "?"
			+ Ext.urlEncode(msg);
}