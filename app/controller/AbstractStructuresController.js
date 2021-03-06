/**
 * Controleur de la partie Structures
 */
Ext.define('MieuxTrierANantes.controller.AbstractStructuresController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	onTapLinkButton : function(button, e, eOpts) {

		if (button.id === "commentez") {

			if (_isNavigator() == false && navigator.app) {
				// On envoie le mail
				var dest = "mieuxtrieranantes@gmail.com";
				var dataTemp = button.getData();
				_envoiMail(dest, dataTemp["name"], dataTemp["description"]);
			} else {
				// On ouvre la modale "commentez"
				Ext.Viewport.add({
							xtype : 'commentmodal_xtype'
						});
			}
		} else {
			this.manageLinkButtons(button._data["code"]);
		}
	},

	/**
	 * Affiche le détail pour une page de type structure.
	 */
	showStructuresDetail : function(list, index, node, record) {
		if (record) {
			this.showStructuresDetail2(record.data);
		}
	},

	showStructuresDetail2 : function(record) {
		if (!this.structuresDetail) {
			this.structuresDetail = Ext
					.create("MieuxTrierANantes.view.structures.StructuresDetails");
		}

		var descriptionTraduit = "";
		// Le titre
		var title = this.getRecordValue(record, "nom");
		descriptionTraduit += title + "<br/><br/>";
		// Ajout du logo
		if (record["logo"] != null && record["logo"] !== "") {
			descriptionTraduit += "<img src='" + record["logo"]
					+ "' /><br/><br/>";
		}
		// Ajout de l'adresse
		if (record["statut"] != null && record["statut"] !== "") {
			var label = _stringUpperFirstLetter(this.translate("label_statut"));
			descriptionTraduit += "<b>" + label + "</b> : " + record["statut"]
					+ "<br/><br/>";
		}
		// Ajout du type
		if (record["type"] != null && record["type"] !== "") {
			var label = _stringUpperFirstLetter(this.translate("label_type"));
			var modeCollecteTraduit = "";
			var typeTraduit = "";
			var type = this.getRecordValue(record, "type");
			if (type != "") {
				typeTraduit = record["type"];
			}
			descriptionTraduit += "<b>" + label + "</b> : "
					+ modeCollecteTraduit + " " + typeTraduit + "<br/><br/>";
		}
		// Ajout de l'adresse
		if (record["adresseTemp"] != null && record["adresseTemp"] !== "") {
			var label = _stringUpperFirstLetter(this.translate("label_adresse"));
			descriptionTraduit += "<b>" + label + "</b> : "
					+ record["adresseTemp"] + "<br/>";
		}
		// Ajout du lien "y aller"
		if (record["latitude"] != null && record["latitude"] !== ""
				&& record["longitude"] != null && record["longitude"] !== "") {
			// Windows Phone : on desactive 2 boutons
			if (_isWhindowsPhone() == false) {
				descriptionTraduit += _getUrlYAllerLatLong(record["latitude"],
						record["longitude"])
						+ "<br/><br/>";
			}

		} else {
			descriptionTraduit += "<br/>";
		}

		// Ajout de la description
		var descr = this.getRecordValue(record, "descr");
		if (descr != "") {
			descriptionTraduit += descr + "<br/><br/>";
		}
		// Ajout du téléphone
		if (record["tel"] != null && record["tel"] !== "") {
			var label = _stringUpperFirstLetter(this
					.translate("label_telephone"));
			descriptionTraduit += "<b>" + label + "</b> : " + record["tel"]
					+ "<br/><br/>";
		}
		// Ajout du lien "telephone"
		if (record["tel"] != null && record["tel"] !== ""
				&& _detecteMobile() == true) {
			descriptionTraduit += _getTelephone(record["tel"]) + "<br/><br/>";

		} else {
			descriptionTraduit += "<br/>";
		}
		// Ajout de l'email
		if (record["email"] != null && record["email"] !== "") {
			var label = _stringUpperFirstLetter(this.translate("label_email"));
			descriptionTraduit += "<b>" + label + "</b> : " + record["email"]
					+ "<br/><br/>";
		}
		// Ajout du site
		if (record["url"] != null && record["url"] !== "") {
			var label = _stringUpperFirstLetter(this.translate("label_url"));
			descriptionTraduit += "<b>" + label + "</b> : " + record["url"]
					+ "<br/><br/>";
		}
		// Ajout de la plage horaire
		if (record["plagesHoraires_lisible"] != null
				&& record["plagesHoraires_lisible"] !== "") {
			var label = _stringUpperFirstLetter(this
					.translate("label_horaires"));
			descriptionTraduit += "<b>" + label + "</b> : "
					+ record["plagesHoraires_prochainsJours"] + "<br/>"
					+ record["plagesHoraires_lisible"] + "<br/><br/>";
		} else {
			// Ajout de l'horaire si on a pas plagesHoraires_lisible
			if (record["horaires"] != null && record["horaires"] !== "") {
				var label = _stringUpperFirstLetter(this
						.translate("label_horaires"));
				descriptionTraduit += "<b>" + label + "</b> : "
						+ record["horaires"] + "<br/><br/>";
			}
		}
		// Ajout de la source
		if (record["src"] != null && record["src"] !== "") {
			var label = _stringUpperFirstLetter(_translate("label_source"));
			descriptionTraduit += "<b>" + label + "</b> : <font color='red'>"
					+ record["src"] + "</font><br/><br/>";
		}
		this.setDataElement(this.structuresDetail,
				"structuresDetails_description", {
					'description' : descriptionTraduit
				})

		// Ajout des conseils
		var conseils = "";
		if (record["cons"] !== "") {
			conseils = record["cons"] + ",";
		}
		var arsItemsAdvices = _getAdvicesBlock(conseils,
				"garbagesdetails_commentaires_");
		this.setItemsElement(this.structuresDetail,
				"structuresDetails_advices", arsItemsAdvices);

		// Affectation du titre
		this.structuresDetail.setTitle(title);

		// Ajout des commentaires
		var code = record["code"];
		var arsCommentaires = this.getArrayItemsToShowComments(code, title);
		var nbElementsMax = 3;
		this.setDataInButtons(this.structuresDetail,
				"structuresDetails_comments", arsCommentaires.les_libelles,
				nbElementsMax);

		// Pour Windows 10
		this.structuresDetail.items.items[2].setWidth("600");

		// Changement libellé "commentez"
		this.structuresDetail.items.items[5].setText(this.translateWithUpperFirstLetter("label_commentez"));
		var dataTemp = {
			name : "Comment post about " + title,
			description : "description"
		};
		this.structuresDetail.items.items[5].setData(dataTemp);
		// this.setItemsElement(this.structuresDetail, "",
		// this.getItemsComments(code, title));

		// Bind the record onto the show contact view
		this.structuresDetail.setData(record);

		// Push this view into the navigation view
		this.getStructuresView().push(this.structuresDetail);

	},

	/**
	 * Pour des données 'structure' (stockées dans 'structures.json' et stockés
	 * dans un 'StructureStore.js') calcule les data à partir du store. Invoque
	 * getAttributsPlagesHoraires sur toutes les plages horaires
	 */
	calculateDatas : function(store) {
		var datas = store.getData();
		var dataLength = datas.length;
		if (dataLength > 0 && datas.items[0].data["type"] != null) {
			// On parcours tous les éléments pour valoriser
			// "plagesHoraires_prochainsJours", "plagesHoraires_lisible" et
			// "plagesHoraires_periodes"
			for (var i = 0; i < dataLength; i++) {
				// this.old_fillAttributs_PlagesHoraires(datas.items[i]);
				this.getAttributsPlagesHoraires(datas.items[i]);
			}
		}
		return store;
	},

	/**
	 * Pour une plage horaire, valorise data["plagesHoraires_lisible"] et
	 * data["plagesHoraires_prochainsJours"].
	 */
	getAttributsPlagesHoraires : function(objStructures, stLocale) {
		var stPlagesHoraire = objStructures.get("plagesHoraires");
		var bOuvertAujourdhui = false;
		var bOuvertDemain = false;

		// verifie si on est ouvert aujourd'hui et demain

		var obAujoudhuiDemain = _verifieOuvertAujourdhuiDemain(stPlagesHoraire);
		if (obAujoudhuiDemain["bOuvertAujourdhui"] == true) {
			bOuvertAujourdhui = true;
		}
		if (obAujoudhuiDemain["bOuvertDemain"] == true) {
			bOuvertDemain = true;
		}
		if (bOuvertAujourdhui == true && bOuvertDemain == true) {
			var stOuvertAujourdhuiEtDemain = "<FONT COLOR='green'>"
					+ this.translate("label_ouvert_aujourdhui_et_demain")
					+ "</FONT>"
		} else if (bOuvertAujourdhui == true && bOuvertDemain == false) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR='green'>"
					+ this.translate("label_ouvert_aujourdhui") + "</FONT>"
		} else if (bOuvertAujourdhui == false && bOuvertDemain == true) {
			stOuvertAujourdhuiEtDemain = "<FONT COLOR='green'>"
					+ this.translate("label_ouvert_demain") + "</FONT>"
		} else {
			var stOuvertAujourdhuiEtDemain = " ";
		}

		var stplagesHoraires = _traduitEnsemblePlageHoraire(stPlagesHoraire,
				stLocale);

		objStructures.data["plagesHoraires_lisible"] = stplagesHoraires;
		objStructures.data["plagesHoraires_prochainsJours"] = stOuvertAujourdhuiEtDemain;
		// objStructures.data["plagesHoraires_periodes"] = arNewAttributes;
	}
});