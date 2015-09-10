
	_SAUF_FERIE = "sauf_ferie";
	_FERIE_SAINT_SYLVESTRE = "sauf_saint_sylvestre";
	_FERIE_PAQUES = "sauf_paques";
	_FERIE_FETE_TRAVAIL = "sauf_fete_travail";
	_FERIE_8_MAI = "sauf_8_mai";
	_FERIE_ASCENSION = "sauf_ascenscion";
	_FERIE_PENTECOTE = "sauf_pentecote";
	_FERIE_FETE_NATIONALE = "sauf_fete_nationale";
	_FERIE_ASSOMPTION = "sauf_assomption";
	_FERIE_LA_TOUSSAINT = "sauf_la_toussaint";
	_FERIE_ARMISTICE = "sauf_armistice";
	_FERIE_NOEL = "sauf_noel";
	
	
	/**
	 * Renvoie une chaine correspondant au nom du jour ferie de la date fournie.
	 * Exemple : la date "01/01/2014" renvoie "sauf_saint_sylvestre"
	 */
	function _getSpecialDay(date) {

		var jourDateJJ = date.getDate();
		// on ajoute le "0" pour avoir "01"
		if (jourDateJJ < 10) {
			jourDateJJ = "0" + jourDateJJ;
		} else {
			jourDateJJ = "" + jourDateJJ;
		}
		// on ajoute le "0" pour avoir "01"
		var moisDateMM = date.getMonth() + 1;
		if (moisDateMM < 10) {
			moisDateMM = "0" + moisDateMM;
		} else {
			moisDateMM = "" + moisDateMM;
		}
		var yearDateYY = (date.getFullYear() + "").substring(2, 4);
		var dayString = "" + jourDateJJ + moisDateMM + yearDateYY;

		var arSaintSylvestre = new Array("010113", "010114", "010115", //
				"010116", "010117", "010118");
		var arPaques = new Array("010413", "210414", "060415", //
				"280316", "160417", "010418");
		var arFeteTravail = new Array("010513", "010514", "010515", //
				"010516", "010517", "010518");
		var ar8mai = new Array("080513", "080514", "080515", //
				"080516", "080517", "080518");
		var arAscension = new Array("090513", "290514", "140515", //
				"050516", "250517", "100518");
		var arPentecote = new Array("200513", "090614", "250515", //
				"160516", "050617", "210518");
		var arFeteNationale = new Array("140713", "140714", "140715", //
				"140716", "140717", "140718");
		var arAssomption = new Array("150813", "150814", "150815", //
				"150816", "150817", "150818");
		var arLaToussaint = new Array("011113", "011114", "011115", //
				"011116", "011117", "011118");
		var arArmistice = new Array("111113", "111114", "111115", //
				"111116", "111117", "111118");
		var arNoel = new Array("251213", "251214", "251215", //
				"251216", "251217", "251218");

		if (this._utilArrayContainObject(arSaintSylvestre, dayString)) {
			return _FERIE_SAINT_SYLVESTRE;
		} else if (this._utilArrayContainObject(arPaques, dayString)) {
			return _FERIE_PAQUES;
		} else if (this._utilArrayContainObject(arFeteTravail, dayString)) {
			return _FERIE_FETE_TRAVAIL;
		} else if (this._utilArrayContainObject(ar8mai, dayString)) {
			return _FERIE_8_MAI;
		} else if (this._utilArrayContainObject(arAscension, dayString)) {
			return _FERIE_ASCENSION;
		} else if (this._utilArrayContainObject(arPentecote, dayString)) {
			return _FERIE_PENTECOTE;
		} else if (this._utilArrayContainObject(arFeteNationale, dayString)) {
			return _FERIE_FETE_NATIONALE;
		} else if (this._utilArrayContainObject(arAssomption, dayString)) {
			return _FERIE_ASSOMPTION;
		} else if (this._utilArrayContainObject(arLaToussaint, dayString)) {
			return _FERIE_LA_TOUSSAINT;
		} else if (this._utilArrayContainObject(arArmistice, dayString)) {
			return _FERIE_ARMISTICE;
		} else if (this._utilArrayContainObject(arNoel, dayString)) {
			return _FERIE_NOEL;
		} else {
			return "";
		}
	}
