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
function _translateWithUpperFirstLetter(result) {
	return _stringUpperFirstLetter(_translate(result));
}

/**
 * Retire les accents d'une chaîne de caractère et met en minuscule
 */
function _utilRetireAccentEtMinuscule(result) {
	result = result.replace(/[ÀàÁáÂâÃãÄäÅåÆæĀāĂăĄą]/g, "a");
	result = result.replace(/[ÈèÉéÊêËëĒēĔĕĖėĘęĚě]/g, "e");
	result = result.replace(/[Çç]/g, "c");
	result = result.replace(/[Ð]/g, "d");
	result = result.replace(/[ÌÍÎÏìíîï]/g, "i");
	result = result.replace(/[ÙÚÛÜùúûü]/g, "u");
	result = result.replace(/[Ññ]/g, "n");
	result = result.replace(/[ÌÍÎÏìíîï]/g, "i");
	result = result.replace(/[Šš]/g, "s");
	result = result.replace(/[Ÿÿý]/g, "y");
	result = result.replace(/[Žž]/g, "z");
	result = result.toLowerCase();
	// Retire les mots inutiles
	result = _utilRetireMotsInutiles(result);
	// trim : permet de retirer les blancs en début et fin de chaîne.
	result = result.trim();
	return result;
}

function _utilRetireMotsInutiles(result) {
	result = result
			.replace(
					/allee|avenue|bas chemin|basse tenue|boulevard|chemin|cours|esplanade|hameau|haute impasse|impasse|jardin|mail|nouvelle impasse|parvis|passage|petit chemin|petite avenue|petite rue|place|pont|promenade|quai|rond-point|route|rue|ruelle|sentier|square|venelle|voie/g,
					"");
	// |de la|de|du|des
	// todo_crn allee |allee |avenue |bas chemin |basse tenue |boulevard |chemin
	// |cours |esplanade |hameau |haute impasse |impasse |jardin |mail |nouvelle
	// impasse |parvis |passage |petit chemin |petite avenue |petite rue |place
	// |pont |promenade |quai |rond-point |route |rue |ruelle |sentier |square
	// |venelle |voie |de la |de |du |des
	return result;
}

/**
 * Retire les accents d'une chaîne de caractère
 */
function _utilRetireAccent(result) {
	result = result.trim();
	result = result.replace(/[ÀàÁáÂâÃãÄäÅåÆæĀāĂăĄą]/g, "a");
	result = result.replace(/[ÈèÉéÊêËëĒēĔĕĖėĘęĚě]/g, "e");
	result = result.replace(/[Çç]/g, "c");
	result = result.replace(/[Ð]/g, "d");
	result = result.replace(/[ÌÍÎÏìíîï]/g, "i");
	result = result.replace(/[ÙÚÛÜùúûü]/g, "u");
	result = result.replace(/[Ññ]/g, "n");
	result = result.replace(/[ÌÍÎÏìíîï]/g, "i");
	result = result.replace(/[Šš]/g, "s");
	result = result.replace(/[Ÿÿý]/g, "y");
	result = result.replace(/[Žž]/g, "z");
	return result;
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
			_detailleFiche(complement, 300, 400, false);
		} else if (protocole == "lieu") {
			_detailleLieu(complement, 300, 400, false);
		} else if (protocole == "lalo") {

			// complement = e.target.href.substring(4);

			if (typeof navigator !== "undefined" && navigator.app) {
				// Mobile device.
				url = "geo:0,0?q=" + complement;
				Ext.Msg.alert('Externe', 'La page a été ouverte dans maps.');
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
				e.stopPropagation();
				e.preventDefault();
				e.stopEvent();
				return false;
			}
		}
		e.stopEvent();
	}
}

function _getUrlYAllerLatLong(latitude, longitude) {
	var lien = "lalo:" + latitude + "," + longitude;
	var url = "<a href="
			+ lien
			+ "><img src='resources/images/images_non_libres/y_aller.png' /></a>";
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