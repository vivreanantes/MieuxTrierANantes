/**
 * Ensemble de méthodes permettant l'affichage d'une plage horaire
 */

separatorEt = "+";
separatorDeZonePlageHoraire = "_";
separatorDePlageHoraire = ",";
separatorJusquA = "-";
htmlSautDeLigne = "<br/>";

function _verifieOuvertAujourdhuiDemain(stPlagesHoraire) {

	var bOuvertAujourdhui = false;
	var bOuvertDemain = false;

	if (stPlagesHoraire != null && stPlagesHoraire != "") {
		var today = _utilGetDateTodayWithoutSeconds();
		var todayTwoDays = __utilGetDayOfWeekTwoCharacters(today);
		var tomorrow = __utilGetDateTomorrowWithoutSeconds();
		var tomorrowTwoDays = __utilGetDayOfWeekTwoCharacters(tomorrow);

		// Découpe la chaîne de caractère "plagesHoraires" pour fabriquer le
		// tableau des plages horaires
		var arPlagesHoraires = stPlagesHoraire.split(",");

		var stTodayFerieSpecialDay = __getTodaySpecialDay();
		var stTomorrowSpecialDay = __getTomorrowSpecialDay();

		// Récupère le contenu de la zône des jours fériés
		var specialDayZone = "";
		for (var i = 0; i < arPlagesHoraires.length; i++) {
			var plageHoraire = arPlagesHoraires[i];
			// Cas des "sauf_"
			if (plageHoraire.substring(0, 5) == "sauf_") {
				specialDayZone = plageHoraire;
			}
			// Cas des plages
			else if (plageHoraire.length > 0) {
				var arHeures = plageHoraire.split(separatorDeZonePlageHoraire);
				var jourDeLaSemaine = arHeures[1];
				var jours = arHeures[0];

				var currentYearAAAA = _utilGetStringCurrentYearAAAA();
				// En javascript on met "0" pour le premier mois (donc on fait
				// "-1")
				var dateDebut = new Date(currentYearAAAA, jours.substring(3, 4) - 1, jours.substring(0, 2));
				// En javascript on met "0" pour le premier mois (donc on fait
				// "-1")
				var dateFin = new Date(currentYearAAAA, jours.substring(7, 10) - 1, jours.substring(5, 7));

				var arDays = jourDeLaSemaine.split(separatorEt);
				if (today >= dateDebut
						&& today <= dateFin
						&& _utilArrayContainObject(arDays,
								todayTwoDays)) {
					bOuvertAujourdhui = true;
				}

				if (tomorrow >= dateDebut
						&& tomorrow <= dateFin
						&& _utilArrayContainObject(arDays,
								tomorrowTwoDays)) {
					bOuvertDemain = true;
				}
			}
		}

		var arDays = jourDeLaSemaine.split(separatorEt);

		// 3 - Vérif les jours fériés
		if (_verifSpecialDay(stTodayFerieSpecialDay, specialDayZone)) {
			bOuvertAujourdhui = false;
		}
		if (_verifSpecialDay(stTomorrowSpecialDay, specialDayZone)) {
			bOuvertDemain = false;
		}
	}
	return {
		"bOuvertAujourdhui" : bOuvertAujourdhui,
		"bOuvertDemain" : bOuvertDemain
	}
}

function __utilGetDateTomorrowWithoutSeconds() {
	var today = _utilGetDateTodayWithoutSeconds();
	return _addDays(today, 1);
}

/**
 * Retourne sous forme d'une chaîne de caractère le jour de la semaine d'une
 * date
*/
function __utilGetDayOfWeekTwoCharacters(date) {

	var weekday = new Array(7);
	weekday[0] = "di";
	weekday[1] = "lu";
	weekday[2] = "ma";
	weekday[3] = "me";
	weekday[4] = "je";
	weekday[5] = "ve";
	weekday[6] = "sa";

	return weekday[date.getDay()];
}

/**
 * Renvoie une chaine correspondant au nom du jour ferie de aujourd'hui (si
 * aujourd'hui est un jour férie). Exemple : renvoie "sauf_saint_sylvestre"
 */
function __getTodaySpecialDay() {
	var today = _utilGetDateTodayWithoutSeconds();
	return _getSpecialDay(today);
}

/**
 * Renvoie une chaine correspondant au nom du jour ferie de demain (si demain
 * est un jour férie). Exemple : renvoie "sauf_saint_sylvestre"
 */
function __getTomorrowSpecialDay() {
	var tomorrow = __utilGetDateTomorrowWithoutSeconds();
	return _getSpecialDay(tomorrow);
}

/**
 * Vérifie si un jour est parmi les jours fériés.
 */
function _verifSpecialDay(stSpecialDay, specialDayZone) {
	var result = false;

	// Si le jour recherché est un jour férié
	if (stSpecialDay != "" && specialDayZone != "") {
		// Je transforme la zone des jours fériés, puis je recherche mon
		// jour
		var arSpecialDays = specialDayZone.split(separatorEt);
		if (specialDayZone == "sauf_ferie") {
			result = true;
		} else if (_utilArrayContainObject(arSpecialDays, stSpecialDay)) {
			result = true;
		}
	}
	return result;
}

/*******************************************************************************
 * Affichage
 ******************************************************************************/

function _traduitEnsemblePlageHoraire(stPlagesHoraire, stLocale) {

	var result = '';

	if (stPlagesHoraire != null) {
		// Sépare la chaîne de caractère "plagesHoraires" pour fabriquer le
		// tableau des plages horaires
		var arPlagesHoraires = stPlagesHoraire.split(separatorDePlageHoraire);
		for (var i = 0; i < arPlagesHoraires.length; i++) {
			var plageHoraire = arPlagesHoraires[i];

			if (plageHoraire != "") {
				result = result + "- "
						+ __traduitPlageHoraire(plageHoraire, stLocale)
						+ htmlSautDeLigne;
			}
		}
	}
	return result;
}

function __traduitPlageHoraire(plageHoraire, stLocale) {

	var result = '';

	var stLabelDe = _translate("label_de");
	// var stLabelLe = _translate("label_le");
	var stLabelH = _translate("label_h");
	var stLabelA = _translate("label_a");
	var stLabelAu = _translate("label_au");
	var stLabelEt = _translate("label_et");
	// var stLabelDu = _translate("label_du");
	// var stLabelTouteLAnnee = _translate("label_toutelannee");
	

	// Cas des "sauf_"
	if (plageHoraire.substring(0, 5) == "sauf_") {
		result = _translate("label_sauf_ferie");
	}
	// Cas de "feries_suivant"
	else if (plageHoraire.substring(0, 14) == "feries_suivant") {
		result = _translate("label_uniqferiessuivant") + " :";
	}
	// Cas des plages
	else {
		var arHeures = plageHoraire.split(separatorDeZonePlageHoraire);

		// 2. Zone date début / date de fin
		if (arHeures[0].length > 0) {
			var jours = arHeures[0];

			// Si on est sur la plage année complère
			if (jours === "0101-3112") {
				// result = _translate(stLabelTouteLAnnee);
			}
			// Si on est de type "de .. à "
			else if (jours.indexOf(separatorJusquA, 0) != -1) {
				result = result + /*stLabelDu + " " + */jours.substring(0, 2) + " "
						+ __getMonthString(jours.substring(2, 4), stLocale)
						+ " " + stLabelAu + " " + jours.substring(5, 7) + " "
						+ __getMonthString(jours.substring(7, 9), stLocale) + " - ";
			}
			// Cas des jours précis
			else {
				result = result + /*stLabelLe + " "*/ + jours.substring(0, 2) + " "
						+ __getMonthString(jours.substring(2, 4), stLocale)
						+ " " + "20" + jours.substring(4, 6)+ " - ";
			}
		}
		// result = result + " - ";

		// 3. Zone "jours de la semaine" (si elle existe)
		if (arHeures[1] != null && arHeures[1].length > 0) {
			var jourDeLaSemaine = arHeures[1];
			if (jourDeLaSemaine === "lu+ma+me+je+ve+sa+di") {
				result = result + "tous les jours"
			} else if (jourDeLaSemaine === "ma+me+je+ve+sa") {
				result = result + "mardi au samedi"
			} else if (jourDeLaSemaine === "lu+ma+me+je+ve") {
				result = result + "lundi au vendredi"
			} else if (jourDeLaSemaine === "lu+ma+me+je+ve+sa") {
				result = result + "lundi au samedi"
			} else if (jourDeLaSemaine.length == 5) {
				// Renvoie par exemple "du lundi au samedi"
				/* stLabelDu + " " */
				result = result + __getDayString(jourDeLaSemaine.substring(0, 2), 0)
						+ " " + stLabelAu + " "
						+ __getDayString(jourDeLaSemaine.substring(3, 5), 0)
						+ " ";
			} else {
				// Renvoie par exemple "lundi, mercredi, samedi"
				var arDays = jourDeLaSemaine.split(separatorEt);
				for (var i = 0; i < arDays.length; i++) {
					var day = arDays[i];
					result = result + __getDayString(day, 1);
					if (i != (arDays.length - 1)) {
						result = result + ", ";
					}
				}
			}
		}

		// 4. Zone "Heures" (si elle existe)
		if (arHeures[2] != null && arHeures[2].length > 0) {
			var heures = arHeures[2];
			if (heures === "00h00-23h59") {
				result = ""
			} else {
				// On peut avoir plusieurs creneaux horaires. exemple :
				// 12h00-14h00+14h30-19h00
				var arHeures = heures.split(separatorEt);
				for (var i = 0; i < arHeures.length; i++) {
					if (i == 0) {
						result = result + " - ";
					}
					result = result + arHeures[i];
					if (i != (arHeures.length - 1)) {
						result = result + ", ";
					}
				}
			}
		}
	}
	return result;
}

/**
 * Renvoie la traduction du jour de la semaine fourni (sur 2 caractères)
 * 
 * @param {}
 *            strDay exemple "lu"
 * @param {}
 *            firstLetterInUpper "0" pour Mettre la première lettre en majuscule
 * @return {} exemple "Lundi"
 */
function __getDayString(strDay, firstLetterInUpper) {
	result = strDay;
	if (strDay == "lu") {
		result = "label_lundi"
	} else if (strDay == "ma") {
		result = "label_mardi"
	} else if (strDay == "me") {
		result = "label_mercredi"
	} else if (strDay == "je") {
		result = "label_jeudi"
	} else if (strDay == "ve") {
		result = "label_vendredi"
	} else if (strDay == "sa") {
		result = "label_samedi"
	} else if (strDay == "di") {
		result = "label_dimanche"
	}
	result = _translate(result);
	if (firstLetterInUpper == 0) {
		(result);
	}
	return result;
};

/**
 * Convertit un mois dans sa chaine de caractère. Ex "01" devient "janvier".
 */
function __getMonthString(stMonth, stLocale) {
	var result = "";
	if (stMonth == "01") {
		result = "label_janvier";
	} else if (stMonth == "02") {
		result = "label_fevrier";
	} else if (stMonth == "03") {
		result = "label_mars";
	} else if (stMonth == "04") {
		result = "label_avril";
	} else if (stMonth == "05") {
		result = "label_mai";
	} else if (stMonth == "06") {
		result = "label_juin";
	} else if (stMonth == "07") {
		result = "label_juillet";
	} else if (stMonth == "08") {
		result = "label_aout";
	} else if (stMonth == "09") {
		result = "label_septembre";
	} else if (stMonth == "10") {
		result = "label_octobre";
	} else if (stMonth == "11") {
		result = "label_novembre";
	} else if (stMonth == "12") {
		result = "label_decembre";
	}
	result = _translate(result, stLocale);
	return result;
};