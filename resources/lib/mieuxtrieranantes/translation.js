/**
 * Traduit un libellé. Si on ne le trouve pas renvoie la clé.
 */
function _translate(stKey, stLocale) {
	// RM_TR_LIBELLES_02
	return __translateLabels(_labelsDatas, stKey, stLocale);
}

/**
 * Traduit un libellé spécifique (celui de du territoire). Si on ne le trouve
 * pas renvoie la clé.
 */
function _translateSpecificLabels(stKey, stLocale) {
	// RM_TR_LIBELLES_03
	return __translateLabels(_specificLabelsDatas, stKey, stLocale);
}

/**
 * Fonction privée. Traduit un libellé.
 * 
 * @param {}
 *            labels array qui contient tous les libellés
 * @param {}
 *            stKey identifiant du libellé recherché
 * @param {}
 *            stLocale langue recherchée
 * @return {} le liellé.
 */
function __translateLabels(labels, stKey, stLocale) {

	var result = "";
	if (labels[stKey] == null) {
		result = stKey;
	} else if (stLocale == "en" && labels[stKey]["en"] != null) {
		result = labels[stKey]["en"];
	} else if (labels[stKey]["fr"] != null) {
		result = labels[stKey]["fr"];
	}
	return result;
}

/**
 * Change la langue.
 */
function changeLocale() {
	// RM_LA_LANGUE_05
	if (stGlobalLocale == "fr") {
			stGlobalLocale = "en";
	} else {
		stGlobalLocale = "fr";
	}
}
/**
 * Renvoie la locale (par exemple "fr" ou "en"). TODO Cette fonction doit
 * invoquer le LocalStorage.
 */
function getLocale() {
	// RM_LA_LANGUE_03
	if (typeof stGlobalLocale == 'undefined') {
		stGlobalLocale = "fr";
	}
	return stGlobalLocale;
	// var result = "fr";
	/*
	 * var localStorageController = this .getApplication()
	 * .getController("MieuxTrierANantes.controller.LocalStorageController");
	 * result = localStorageController.getLocale();
	 */
	// return result;
};