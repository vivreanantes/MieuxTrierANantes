var _SEPARATOR = "#";

/**
 * Ajoute les éléments d'un tableau arSrc à un tableau existant arTarget
 */
function utilPushArray(arSrc, arTarget) {
	arTarget.push.apply(arTarget, arSrc);
	return;
};

function _utilReplace(strSrc, avant, apres) {
	return strSrc.split(avant).join(apres);
};

/**
 * Vérifie si un tableau arSrc contient un objet obj
 */
function _utilArrayContainObject(a, obj) {
	for (var i = 0; i < a.length; i++) {
		if (a[i] === obj) {
			return true;
		}
	}
	return false;
}

function _utilGetDateTodayWithoutSeconds() {
	var today = new Date();
	today.setHours(0);
	today.setMinutes(0, 0, 0);
	return today;
}

/**
 * Met la première lettre en majuscule
 */
function _stringUpperFirstLetter(result) {
	if (result != null && result.length > 1) {
		result = result.substring(0, 1).toUpperCase() + result.substring(1);
	}
	return result;
}

/**
 * Ajoute un nombre de jours.
 */
function _addDays(d, j) {
	return new Date(d.getTime() + (1000 * 60 * 60 * 24 * j));
}

/**
 * Retourne un objet String correspondant à l'année actuelle. Exemple "2014"
 */
function _utilGetStringCurrentYearAAAA() {
	return (new Date()).getFullYear();
}

/**
 * Traduit et met la première lettre en majuscule
 */
function _translateWithUpperFirstLetter(text, stLocale) {
	return _stringUpperFirstLetter(_translate(text, stLocale));
}

function _cutWithBr(stChaine) {
	return _decoupeAvecTaille(stChaine, 30);
}
/**
 * Découpe une chaîne de caractère (notamment pour les boutons) en insérant des
 * balises <br/>
 */
function _decoupeAvecTaille(stChaine, iTailleMax) {
	var result = "";
	if (stChaine != undefined) {
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
}

/**
 * Renvoie true si on utilise un appareil mobile
 */
function _detecteMobile() {
	if (navigator.userAgent.match(/Android/i)
			|| navigator.userAgent.match(/webOS/i)
			|| navigator.userAgent.match(/iPhone/i)
			|| navigator.userAgent.match(/iPad/i)
			|| navigator.userAgent.match(/iPod/i)
			|| navigator.userAgent.match(/BlackBerry/i)
			|| navigator.userAgent.match(/Windows Phone/i)) {
		return true;
	} else {
		return false;
	}
}

/**
 * Renvoie true si on utilise l'écran mesure moins de 800 * 600
 */
function _detectePetiteTaille() {
	if (window.innerWidth <= 800 && window.innerHeight <= 600) {
		return true;
	} else {
		return false;
	}
}

/**
 * Ouvre un lien (soit dans le navigateur, soit dans google maps)
 */
/*
 * function _gestionLien(e) { var hrefValue = 0 // on prend soit le href, soit
 * le lien parent (dans le cas des images) if (e.target.href != undefined) {
 * hrefValue = e.target.href; } else if (e.getTarget().href != undefined) {
 * hrefValue = e.getTarget().href; } if (hrefValue.length > 5) { protocole =
 * hrefValue.substring(0, 4); complement = hrefValue.substring(5); if (protocole ==
 * "http" || protocole == "www.") { if (_isNavigator() == false &&
 * navigator.app) { // Mobile device. Ext.Msg.alert('Externe', 'La page a été
 * ouverte dans le navigateur.'); navigator.app.loadUrl(hrefValue, {
 * openExternal : true }); e.stopPropagation(); e.preventDefault(); return
 * false; } else { // Possible web browser // window.open(hrefValue, "_blank"); //
 * e.stopPropagation(); // e.preventDefault(); // e.stopEvent(); // return
 * false; } // navigator.app.loadUrl(url, {openExternal: true}); } else if
 * (protocole == "fich") { e.stopPropagation(); e.preventDefault();
 * e.stopEvent(); _detailleFiche(complement, 300, 400, false); return false; }
 * else if (protocole == "lieu") { _detailleLieu(complement, 300, 400, false); }
 * else if (protocole == "lalo") { // Ouverture des liens navigation
 * 
 * if (_isNavigator() == false && navigator.app) { // Mobile device. url =
 * "geo:0,0?q=" + complement; Ext.Msg .alert('Externe', 'La position a été
 * ouverte dans l\'application de navigation.'); navigator.app.loadUrl(url, {
 * openExternal : true }); e.stopPropagation(); e.preventDefault(); return
 * false; } else { // Possible web browser url =
 * "http://maps.google.fr/maps?f=q&hl=fr&q=" + complement; window.open(url,
 * "_system"); // e.stopPropagation(); // e.preventDefault(); // e.stopEvent(); //
 * return false; } } else if (protocole == "tel:") { // Ouverture des liens
 * téléphone if (_isNavigator() == false && navigator.app) { // Mobile device.
 * url = "tel:" + complement; Ext.Msg .alert('Externe', 'Le numéro a été envoyé
 * au téléphone.'); navigator.app.loadUrl(url, { openExternal : true });
 * e.stopPropagation(); e.preventDefault(); return false; } } e.stopEvent(); } }
 * 
 */

/**
 * Ouvre un lien (soit dans le navigateur, soit dans google maps)
 */
function _gestionLien(e) {
	var hrefValue = 0
	// on prend soit le href, soit le lien parent (dans le cas des images)
	if (e.target.href != undefined) {
		hrefValue = e.target.href;
	} else if (e.getTarget().href != undefined) {
		hrefValue = e.getTarget().href;
	}
	if (hrefValue.length > 5) {
		protocole = hrefValue.substring(0, 4);
		complement = hrefValue.substring(5);
		if (protocole == "http" || protocole == "www.") {
			if (typeof navigator !== "undefined" && navigator.app) {
				// Mobile device.
				Ext.Msg.alert('Externe',
						'La page a été ouverte dans le navigateur.');
				navigator.app.loadUrl(hrefValue, {
							openExternal : true
						});
				e.stopPropagation();
				e.preventDefault();
				return false;
			} else {
				// Possible web browser
				// window.open(hrefValue, "_blank");
				// e.stopPropagation();
				// e.preventDefault();
				// e.stopEvent();
				// return false;
			}
			// navigator.app.loadUrl(url, {openExternal: true});
		} else if (protocole == "fich") {
			e.stopPropagation();
			e.preventDefault();
			e.stopEvent();
			_detailleFiche(complement, 300, 400, false);
			return false;
		} else if (protocole == "lieu") {
			_detailleLieu(complement, 300, 400, false);
		} else if (protocole == "lalo") {

			// Ouverture des liens navigation

			if (typeof navigator !== "undefined" && navigator.app) {
				// Mobile device.
				url = "geo:0,0?q=" + complement;
				Ext.Msg
						.alert('Externe',
								'La position a été ouverte dans l\'application de navigation.');
				/*
				 * navigator.app.oenNativeAppWindow(url, { openExternal : true
				 * });
				 */
				navigator.app.loadUrl(url, {
							openExternal : true
						});
				e.stopPropagation();
				e.preventDefault();
				return false;
			} else {
				// Possible web browser
				url = "http://maps.google.fr/maps?f=q&hl=fr&q=" + complement;
				window.open(url, "_system");
				// e.stopPropagation();
				// e.preventDefault();
				// e.stopEvent();
				// return false;
			}
		} else if (protocole == "tel:") {

			// Ouverture des liens téléphone
			if (typeof navigator !== "undefined" && navigator.app) {
				// Mobile device.
				url = "tel:" + complement;
				Ext.Msg
						.alert('Externe',
								'Le numéro a été envoyé au téléphone.');
				navigator.app.loadUrl(url, {
							openExternal : true
						});
				e.stopPropagation();
				e.preventDefault();
				return false;
			}
		}
		e.stopEvent();
	}
}

function _getUrlYAllerLatLong(latitude, longitude) {
	var lien = "lalo:" + latitude + "," + longitude;
	var url = "<a href=" + lien
			+ "><img src='resources/images/y_aller.png' height='30px' /></a>";
	return url;
}

function _getTelephone(tel) {
	var lien = "tel:" + tel;
	var url = "<a href='" + lien
			+ "'><img src='resources/images/appeler.png' height='30px' /></a>";
	return url;
}

function _detailleFiche(fiche, largeur, hauteur, estFicheDetaillee) {
	var info = _getInfo(fiche);
	// Calcule 'description' (la description + les commentaires)
	var description = getDescriptionCompleteInfo(info);

	if (estFicheDetaillee) {
		info["nom"] = "<i>Fiche</i> " + info["nom"];
		// #dbeeb5
		info["descr"] = "<p style='color:black;background-color:white;padding:10px;margin:0px;text-align:left;'>"
				+ description + "</p>";
	}
	Ext.Msg.show({
				title : info["nom"],
				message : "<font color=black>" + info["descr"] + "</font>",
				height : hauteur,
				width : largeur,
				minWidth : largeur,
				// TODO : Ceci pose un pb sous IE
				scrollable : true,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.INFO,
				listeners : {
					element : 'element',
					delegate : 'a',
					tap : function(e) {
						_gestionLien(e);
					}
				}
			});

	// cls: moncss,padding : monPadding

}

function _detailleLieu(lieu, largeur, hauteur, estFicheDetaillee) {
	var info = _getInfo(lieu);
	if (estFicheDetaillee) {
		info["nom"] = "<i>Fiche</i>" + info["nom"];
		info["descr"] = "<p style='color:black;background-color:#dbeeb5;padding:10px;margin:0px;text-align:left;'>"
				+ info["descr"] + "</p>";
	}
	Ext.Msg.show({
				title : info["nom"],
				message : info["descr"],
				height : hauteur,
				width : largeur,
				minWidth : largeur,
				// TODO : Ceci pose un pb sous IE
				scrollable : true,
				buttons : Ext.Msg.OK,
				icon : Ext.Msg.INFO,
				listeners : {
					element : 'element',
					delegate : 'a',
					tap : function(e) {
						_gestionLien(e);
					}
				}
			});

}

// Permet l'interception des paramètres de la page HTML, qui ouvre une page
// particulière
function _gestionLienExterne() {
	var t = location.search.substring(1).split('&');
	var f = [];
	for (var i = 0; i < t.length; i++) {
		var x = t[i].split('=');
		f[x[0]] = x[1];
	}
	var fiche = f['fiche'];

	if (fiche != null) {
		var width = window.innerWidth;
		var height = window.innerHeight;
		if (width > 1000) {
			width = 1000
		} else {
			width = width - 10
		};
		if (height > 800) {
			height = 800
		} else {
			height = height - 10
		};
		_detailleFiche(fiche, width, height, true);
	}
}

/**
 * Renvoie la version du navigateur Internet Explorer (ou 0 pas IE).
 */
function _detectIeVersion() {
	var iev = 0;
	var ieold = (/MSIE (\d+\.\d+);/.test(navigator.userAgent));
	var trident = !!navigator.userAgent.match(/Trident\/7.0/);
	var rv = navigator.userAgent.indexOf("rv:11.0");

	if (ieold)
		iev = new Number(RegExp.$1);
	if (navigator.appVersion.indexOf("MSIE 10") != -1)
		iev = 10;
	if (trident && rv != -1)
		iev = 11;

	return iev;
}

/**
 * Envoi un mail
 */
function _envoiMail(destinataire, sujet, contenu) {

	var dest = "mieuxtrieranantes@gmail.com";
	var complement = dest + "?subject=" + encodeURIComponent(sujet) + "&body="
			+ encodeURIComponent(contenu);
	uri = "mailto:" + complement;

	Ext.Msg.alert("Externe", "L'email a été ouvert par le téléphone.");
	navigator.app.loadUrl(uri, {
				openExternal : true
			});
	e.stopPropagation();
	e.preventDefault();
}

/**
 * Renvoie true si le navigateur est Internet Explorer.
 */
function _isIE() {
	return (_detectIeVersion() != 0)
}

/**
 * Renvoie true si je suis dans un navigateur
 * 
 * @return {}
 */
function _isNavigator() {
	var result = (typeof navigator !== "undefined" && navigator.app);
	// var result = (typeof navigator !== "undefined");
	return result;
}

function _isWhindowsPhone() {
	var regExp = new RegExp("Windows Phone", "i");
	var result = (navigator.userAgent.match(regExp) != null);
	return result;
}

/**
 * Renvoie la valeur d'un des champs, selon la langue.<br/> Exemple :
 * getRecordValue(record,'nom') avec record.nom_en="car" renvoie 'car' si locale
 * vaut 'en'.
 */
function getRecordValue(record, key) {
	// RM_LA_LANGUE_07
	var result = "";
	stLocale = getLocale();
	// if (key == "descr" || key == "nom") {
	var enKey = key + "_en"
	if (stLocale == 'en' && (typeof record[enKey] != 'undefined')) {
		result = record[enKey];
	} else {
		result = record[key];
	}
	// Si la clé n'existe pas, on renvoie chaine vide et non null
	if (result == null) {
		result = "";
	}
	// }
	return result;
}

/**
 * Renvoie la valeur d'un paramètre (les paramètres sont regroupés dans
 * _paramsDatas)
 */
function getParam(stKey) {
	var datas = _paramsDatas;
	var stValue = "valeur";
	if (datas[stKey] == null || datas[stKey][stValue] == null) {
		result = stKey;
	} else {
		result = datas[stKey][stValue];
	}
	return result;
};

/**
 * Vérifie si la page demandée est une des pages de l'application
 * @param {} stKey
 * @return {}
 */
function isPageActive(stKey) {
	var result = false;
	if (getParam("pages.page1.nom") == stKey
			|| getParam("pages.page2.nom") == stKey
			|| getParam("pages.page3.nom") == stKey
			|| getParam("pages.page4.nom") == stKey
			|| getParam("pages.page5.nom") == stKey
			|| getParam("pages.page6.nom") == stKey) {
		result = true;
	}
	return result;
};

/** Renvoie la valeur d'un hash */
function getValueFromHash(datas, stKey, stValue) {
	if (datas[stKey] == null || datas[stKey][stValue] == null) {
		result = stKey;
	} else {
		result = datas[stKey][stValue];
	}
	return result;
};