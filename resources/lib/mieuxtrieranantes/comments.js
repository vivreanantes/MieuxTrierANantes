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

			var arComments = _commentsDatas[j]["elements"].replace(", /g", ",")
					.replace(" ,/g", ",").split(',');
			for (var i = 0; i < arComments.length; i++) {
				if (arComments[i] === code) {
					var nom = getRecordValue(_commentsDatas[j], "nom");
					var descr = getRecordValue(_commentsDatas[j], "descr");
					faqTraduit += "<br/><img src='resources/icons/info.png' /> <B>"
							+ nom + "</B><BR/>" + descr;
				}
			}
		}
	}

	if (faqTraduit != "") {
		faqTraduit = "<br/>" + faqTraduit + "<br/>";
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
			descr = _collectModsDatas[j]["descr"];
			descr_en = _collectModsDatas[j]["descr_en"];
			conseils = _collectModsDatas[j]["cons"];
			faq = _collectModsDatas[j]["faq"];
			nom = _collectModsDatas[j]["nom"];
			nom_en = _collectModsDatas[j]["nom_en"];
			image = _collectModsDatas[j]["image"];
		}
	}

	return {
		"code" : idElement,
		"descr" : descr,
		"descr_en" : descr_en,
		"cons" : conseils,
		"faq" : faq,
		"image" : image,
		"nom" : nom,
		"nom_en" : nom_en
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
 * Renvoie la structure
 */
function _getStructure(idElement) {
	var result = '';
	for (j in _structuresDatas) {
		if (_structuresDatas[j]["code"] === idElement) {
			result = _structuresDatas[j];
		}
	}
	return result;
}

function getDescriptionCompleteInfo(myElement) {
	var description = getRecordValue(myElement, "descr")
			+ _getCommentsBloc(myElement["code"]);
	return description;
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
			descr = _infosDatas[j]["descr"];
			descr_en = _infosDatas[j]["descr_en"];
			nom = _infosDatas[j]["nom"];
			nom_en = _infosDatas[j]["nom_en"];
			image = _infosDatas[j]["image"];
			bouton = _infosDatas[j]["categ"];
			faq = _infosDatas[j]["faq"];
		}
	}
	return {
		"code" : idElement,
		"faq" : faq,
		"descr" : descr,
		"descr_en" : descr_en,
		"nom" : nom,
		"nom_en" : nom_en,
		"image" : image,
		"categ" : bouton
	}
}

/**
 * Renvoie les items (les éléments fils d'un container) correspondant à la
 * partie "cons" d'une page
 * 
 * @params advicesString chaine de caractère listant les codes des conseils (ex :
 *         ",cons_1,cons2,cons3")
 * @params prefix
 */
function _getAdvicesBlock(advicesString, prefixString) {
	var result = new Array();
	var thisController = this;
	var arConseils = advicesString.replace(", /g", ",").replace(" ,/g", ",")
			.split(',');
	// On parcourt les conseils
	if (arConseils.length > 0) {

		for (j in _advicesDatas) {

			for (i in arConseils) {
				if (_advicesDatas[j]["code"] === arConseils[i]) {
					var nom = getRecordValue(_advicesDatas[j], "nom");
					var descr = getRecordValue(_advicesDatas[j], "descr");
					if (_advicesDatas[j]["fiche"] != null
							&& _advicesDatas[j]["fiche"] != "") {
						// lien vers une fiche
						result.push({
									xtype : 'container',
									layout : 'hbox',
									id : prefixString
											+ _advicesDatas[j]["code"],
									items : [{
										html : "<b>" + nom + "</b><br/>"
												+ descr + "<br/><br/>",
										flex : 1
									}, {
										xtype : 'container',
										layout : 'vbox',
										items : [{
											xtype : 'button',
											id : "garbagesdetails_informations",
											text : "Plus d'infos",
											data : {
												code : "informations"
														+ _SEPARATOR
														+ _advicesDatas[j]["fiche"]
											}
										}]
									}]
								});
					}

					// pas de lien vers une fiche
					else {
						result.push({
									id : prefixString
											+ _advicesDatas[j]["code"],
									html : "<b>" + nom + "<br/></b>" + descr
											+ "<br/><br/>"
								});
					}
				}
			}
			// });
		}
	}
	return result;
}