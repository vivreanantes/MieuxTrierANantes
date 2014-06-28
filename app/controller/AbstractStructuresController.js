/**
 * Controleur de la partie Structures
 */
Ext.define('MieuxTrierANantes.controller.AbstractStructuresController', {
	extend : 'MieuxTrierANantes.controller.AbstractController',

	onTapLinkButton : function(button, e, eOpts) {

		if (button.id === "commentez") {
			// Panneau commentez
			Ext.Viewport.add({
						xtype : 'commentmodal'
					});
		} else {
			this.manageLinkButtons(button._data["code"]);
		}
	},

	/**
	 * Affiche le détail pour une page de type structure.
	 */
	showStructuresDetail : function(list, index, node, record) {
		if (record) {
			if (!this.structuresDetail) {
				this.structuresDetail = Ext
						.create("MieuxTrierANantes.view.structures.StructuresDetails");
			}

			var descriptionTraduit = "";
			// Le titre
			var title = record.data["libelle"];
			descriptionTraduit += title + "<br/><br/>";
			// Ajout du type
			if (record.data["modesCollecte"] != null
					&& record.data["modesCollecte"] !== "") {
				var label = _stringUpperFirstLetter(this
						.translate("label_type"));
				var modeCollecteTraduit = "";
				var typeTraduit = "";
				if (record.data["type"] != null && record.data["type"] !== "") {
					typeTraduit = record.data["type"];
				}
				descriptionTraduit += "<b>" + label + "</b>: "
						+ modeCollecteTraduit + " " + typeTraduit
						+ "<br/><br/>";
			}
			// Ajout de l'adresse
			if (record.data["adresseTemp"] != null
					&& record.data["adresseTemp"] !== "") {
				var label = _stringUpperFirstLetter(this
						.translate("label_adresse"));
				descriptionTraduit += "<b>" + label + "</b>: "
						+ record.data["adresseTemp"] + "<br/><br/>";
			}
			// Ajout de la description
			if (record.data["description_fr"] != null
					&& record.data["description_fr"] !== "") {
				descriptionTraduit += record.data["description_fr"]
						+ "<br/><br/>";
			}
			// Ajout du téléphone
			if (record.data["numeroTemp"] != null
					&& record.data["numeroTemp"] !== "") {
				var label = _stringUpperFirstLetter(this
						.translate("label_telephone"));
				descriptionTraduit += "<b>" + label + "</b>: "
						+ record.data["numeroTemp"] + "<br/><br/>";
			}
			// Ajout de la plage horaire
			if (record.data["plagesHoraires_lisible"] != null
					&& record.data["plagesHoraires_lisible"] !== "") {
				var label = _stringUpperFirstLetter(this
						.translate("label_horaires"));
				descriptionTraduit += "<b>" + label + "</b>: "
						+ record.data["plagesHoraires_prochainsJours"]
						+ "<br/>" + record.data["plagesHoraires_lisible"]
						+ "<br/><br/>";
			}
			// Ajout de la source
			if (record.data["src"] != null && record.data["src"] !== "") {
				var label = _stringUpperFirstLetter(_translate("label_source"));
				descriptionTraduit += "<b>" + label
						+ "</b> : <font color='red'>" + record.data["src"]
						+ "</font><br/><br/>";
			}
			this.setDataElement(this.structuresDetail,
					"structuresDetails_description", {
						'description' : descriptionTraduit
					})

			// Ajout des conseils
			var conseils = "";
			if (record.data["conseils"] !== "") {
				conseils = record.data["conseils"] + ",";
			}
			var arsItemsAdvices = _getAdvicesBlock(conseils,
					"garbagesdetails_commentaires_");
			this.setItemsElement(this.structuresDetail,
					"structuresDetails_advices", arsItemsAdvices);

			// Affectation du titre
			var title = record.data["libelle"];
			this.structuresDetail.setTitle(title);

			// Ajout des commentaires
			var code = record.data["code"];
			var arsCommentaires = this.getArrayItemsToShowComments(code, title);
			var nbElementsMax = 3;
			this.setDataInButtons(this.structuresDetail,
					"structuresDetails_comments", arsCommentaires.les_libelles,
					nbElementsMax);

			// this.setItemsElement(this.structuresDetail, "", this.getItemsComments(code, title));

			// Bind the record onto the show contact view
			this.structuresDetail.setData(record.data);
			// Push this view into the navigation view
			this.getStructuresView().push(this.structuresDetail);
		}
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
	},

	/**
	 * Valorise les options des listes déroulantes "quartier" (ce sont les
	 * quartiers administratifs)
	 */
	setOptionsQuartiersAdmin : function(selectField) {

		selectField.setOptions([{
					text : 'Tous',
					value : 'all'
				}, {
					text : "Bellevue Chantenay Sainte-Anne",
					value : "qbcsa"
				}, {
					text : "Breil Barberie",
					value : "qbb"
				}, {
					text : "Centre Ville",
					value : "qcv"
				}, {
					text : "Dervallières Zola",
					value : "qdz"
				}, {
					text : "Doulon Bottière",
					value : "qdb"
				}, {
					text : "Hauts Pavés - Saint Félix",
					value : "qhpsf"
				}, {
					text : "Ile De Nantes",
					value : "qidn"
				}, {
					text : "Malakoff - Saint-Donatien",
					value : "qmsd"
				}, {
					text : "Nantes Erdre",
					value : "qne"
				}, {
					text : "Nantes Nord",
					value : "qnn"
				}, {
					text : "Nantes Sud",
					value : "qns"
				}]);
	},

	/**
	 * Valorise les options des listes déroulantes "quartier"
	 */
	setOptionsQuartiers : function(selectField) {

		selectField.setOptions([{
					text : 'Toutes',
					value : 'all'
				}, {
					text : "Nantes",
					value : "Nantes"
				}, {
					text : "Hors Nantes : Sud Loire",
					value : "Hors Nantes sud Loire"
				}, {
					text : "Hors Nantes : Nord Loire",
					value : "hnnl"
				}]);

	}
});