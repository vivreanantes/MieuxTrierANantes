/**
 * Renvoie une chaine de caractère correspondant au bloc de la partie
 * commentaires sur un élément de l'application
 * 
 * @param {code}
 *            le code, ou plusieurs codes sépararés par des virgules.
 * 
 * @return {}
 */
function _getCommentsBloc(code) {

	var faqTraduit = "";
	// var commentLink = this.makeLink("commentsPanel");

	// On parcours les remarques de la faq _commentsDatas
	for (var j = 0; j < _commentsDatas.length; j++) {
		if (_commentsDatas[j]["elements"] != null) {

			var arComments = _commentsDatas[j]["elements"]
					.replace(", /g", ",").replace(" ,/g", ",").split(',');
			for (var i = 0; i < arComments.length; i++) {
				if (arComments[i] === code) {
					faqTraduit += "<br/><B>"
							+ _commentsDatas[j]["libelle"] + "</B><BR/>"
							+ _commentsDatas[j]["description"];
				}
			}
		}
	}

	if (faqTraduit != "") {
		faqTraduit += "<br/>";
	}
	return faqTraduit;
}

/**
 * Renvoie le mode de collecte
 */
function _getCollectMod(idElement) {
	var description = "";
	var conseils = "";
	var faq = "";
	var image = "";
	var libelle = "";

	for (j in _collectModsDatas) {
		if (_collectModsDatas[j].code === idElement) {
			description = _collectModsDatas[j]["description"];
			conseils = _collectModsDatas[j]["conseils"];
			faq = _collectModsDatas[j]["faq"];
			libelle = _collectModsDatas[j]["libelle"];
			image = _collectModsDatas[j]["image"];
		}
	}

	return {
		"code" : idElement,
		"description" : description,
		"conseils" : conseils,
		"faq" : faq,
		"image" : image,
		"libelle" : libelle
	}
}

/**
 * Renvoie le déchet
 */
function _getGarbage(idElement) {
	var result = '';
	for (j in _garbagesDatas) {
		if (_garbagesDatas[j]["code"] === idElement) {
			result = _garbagesDatas[j];
		}
	}
	return result;
}

/**
 * Renvoie une information
 */
function _getInfo(idElement) {
	var description = "";
	var faq = "";
	var libelle = "";
	var image = "";
	var bouton = "";

	for (j in _infosDatas) {
		if (_infosDatas[j]["code"] === idElement) {
			description = _infosDatas[j]["description_fr"];
			libelle = _infosDatas[j]["libelle"];
			image = _infosDatas[j]["image"];
			bouton = _infosDatas[j]["bouton"];
			faq = _infosDatas[j]["faq"];
		}
	}
	return {
		"code" : idElement,
		"faq" : faq,
		"description" : description,
		"libelle" : libelle,
		"image" : image,
		"bouton" : bouton
	}
}

/**
	 * Renvoie les items (les éléments fils d'un container) correspondant à la
	 * partie "conseils" d'une page
	 * 
	 * @params advicesString chaine de caractère listant les codes des conseils
	 *         (ex : ",cons_1,cons2,cons3")
	 * @params prefix
	 */
function _getAdvicesBlock (advicesString, prefixString) {
		var result = new Array();
		var thisController = this;
		var arConseils = advicesString.replace(", /g", ",").replace(" ,/g",
				",").split(',');
		// On parcourt les conseils
		if (arConseils.length > 0) {

			for (j in _advicesDatas) {
				// STORE datasAdvices
				// var dataAdvices = this.getApplication().getController("MieuxTrierANantes.controller.GarbagesController").getAdvicesList().getStore().getData();
				// var thisController = this;
				// dataAdvices.each(function (recordAdvice) {
				for (i in arConseils) {
					if (_advicesDatas[j]["code"] === arConseils[i]) {
						if (_advicesDatas[j]["fiche"] != null && _advicesDatas[j]["fiche"] != "") {
							// lien vers une fiche
							result.push({
								xtype : 'container',
								layout : 'hbox',
								id : prefixString + _advicesDatas[j]["code"],
								items : [{
										html : "<b>" + _advicesDatas[j]["libelle"] + "</b><br/>" + _advicesDatas[j]["description"] + "<br/><br/>",
										flex : 1
									}, {
										xtype : 'container',
										layout : 'vbox',
										items : [{
												xtype : 'button',
												id : "garbagesdetails_informations",
												text : "Plus d'infos",
												data : {
													code : "informations" + _SEPARATOR + _advicesDatas[j]["fiche"]
												}
											}
										]
									}
								]
							});
						}

						// pas de lien vers une fiche
						else {
							result.push({
								id : prefixString + _advicesDatas[j]["code"],
								html : "<b>" + _advicesDatas[j]["libelle"] + "<br/></b>" + _advicesDatas[j]["description"] + "<br/><br/>"
							});
						}
					}
				}
				// });
			}
		}
		return result;
	}