
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
	// RM_RE_MODE_RECH_06, RM_RE_MOTS_CLES_02
	// Remplace les " " et les "+" par des virgules
	result = result.replace(/[ +]/g, ",");
	result = _utilMettreNomAuSingulier(result);
	return result;
}

function _utilRetireMotsInutiles(result) {
	result = result
			.replace(
					/allee|avenue|bas chemin|basse tenue|boulevard|chemin|cours|esplanade|hameau|haute impasse|impasse|jardin|mail|nouvelle impasse|parvis|passage|petit chemin|petite avenue|petite rue|place|pont|promenade|quai|rond-point|route|rue|ruelle|sentier|square|venelle|voie/g,
					"");
	return result;
}

/**
 * Met un nom au singulier : retire les s à la fin, ou les 'x' Exemple :
 * "emmaus,as,b" renvoie "emmau,emmaus,a,as,b," RM_RE_MODE_RECH_07
 */
function _utilMettreNomAuSingulier(mots) {
	// supprime le 's' en caractère final
	// result = result.replace(/([^]*)s,$/, '$1,');
	var result = "";
	var codesCles = mots.split(',');
	var taille = codesCles.length;
	for (var j = 0; j < taille; j++) {
		var codeCle = codesCles[j];
		var fin = codeCle.substring(codeCle.length - 1, codeCle.length);
		var debut = codeCle.substring(0, codeCle.length - 1);
		if (fin == "s") {
			result = result + debut + "," + codeCle + ",";
		} else {
			result = result + codeCle + ",";
		}
	}
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