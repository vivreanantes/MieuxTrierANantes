/**
 * Traduit un libellé. Si on ne le trouve pas renvoie la clé.
 */

function _translate(stKey, stLocale) {

	var result = stKey;
	var map = {
		"label_Conseil" : {
			"en" : "Advise",
			"fr" : "Conseil"
		},
		"label_recyclable" : {
			"en" : "recycling",
			"fr" : "recyclable"
		},
		"label_ou" : {
			"en" : "or",
			"fr" : "ou"
		},
		"label_pour_collecte_bac_jaune" : {
			"en" : "Only for yellow bacs",
			"fr" : "<br/>OUI bac jaune<br/>NON sac jaune"
		},
		"label_OUI" : {
			"en" : "YES",
			"fr" : "OUI"
		},
		"label_NON" : {
			"en" : "NO",
			"fr" : "NON"
		},
		"label_pas_poubelle" : {
			"en" : ", but <br/>do not put on the trash",
			"fr" : ", mais <br/>ne pas mettre à la poubelle"
		},
		"label_comment" : {
			"en" : "Comment",
			"fr" : "Commentez"
		},
		"label_sauf_ferie" : {
			"en" : "except official holiday",
			"fr" : "sauf jours fériés"
		},
		"label_uniqferiessuivant" : {
			"en" : "only following official holiday",
			"fr" : "uniquement les jours fériés suivant"
		},
		"label_le" : {
			"en" : " ",
			"fr" : "le"
		},
		"label_du" : {
			"en" : "from",
			"fr" : "du"
		},
		"label_toutelannee" : {
			"en" : "All the year",
			"fr" : "Toute l'année"
		},
		"label_au" : {
			"en" : "to the",
			"fr" : "au"
		},
		"label_a" : {
			"en" : "to",
			"fr" : "à"
		},
		"label_h" : {
			"en" : "h",
			"fr" : "h"
		},
		"label_et" : {
			"en" : "and",
			"fr" : "et"
		},
		"label_de" : {
			"en" : "from",
			"fr" : "de"
		},
		"label_modco_contomr" : {
			"en" : "",
			"fr" : "Conteneur Ordures Ménagères Résiduelles"
		},
		"label_modco_contmpb" : {
			"en" : "",
			"fr" : "Conteneur plastique"
		},
		"label_modco_contembjournmag" : {
			"en" : "",
			"fr" : "Conteneur embal. journ. mag."
		},
		"label_modco_contpapiercarton" : {
			"en" : "",
			"fr" : "Conteneur papier-carton"
		},
		"label_modco_contverre" : {
			"en" : "",
			"fr" : "Conteneur verre"
		},
		"label_modco_contdechetssecs" : {
			"en" : "",
			"fr" : "Conteneur déchets secs"
		},
		"label_modco_bacbleu" : {
			"en" : "",
			"fr" : "Bac bleu"
		},
		"label_modco_bacjaune" : {
			"en" : "",
			"fr" : "Bac jaune"
		},
		"label_modco_sacbleu" : {
			"en" : "",
			"fr" : "Sac bleu"
		},
		"label_modco_sacjaune" : {
			"en" : "",
			"fr" : "Sac jaune"
		},
		"label_modco_ecopoint" : {
			"en" : "",
			"fr" : "Ecopoint"
		},
		"label_modco_ecotox" : {
			"en" : "",
			"fr" : "Camion écotox"
		},
		"label_modco_reemploi" : {
			"en" : "Re-employment",
			"fr" : "Réeemploi"
		},
		"label_modco_distrisac" : {
			"en" : "Distribution Trisac",
			"fr" : "Distribution Trisac"
		},
		"label_modco_pointsdevente" : {
			"en" : "Point of sale",
			"fr" : "Point de vente"
		},
		"label_modco_decheterie" : {
			"en" : "Waste sorting centre",
			"fr" : "Déchèterie"
		},
		"label_modco_compostage" : {
			"en" : "Composting",
			"fr" : "Compostage"
		},
		"label_modco_encombrants" : {
			"en" : "bulky waste",
			"fr" : "Encombrant"
		},
		"label_modco_encombrants_resume" : {
			"en" : "bulky waste",
			"fr" : "Encombrant"
		},
		"label_smco_conteneurlerelais" : {
			"en" : "Contener Le Relais",
			"fr" : "Conteneur Le Relais"
		},
		"label_smco_reempelectromenag" : {
			"en" : "Re-employment household appliances ",
			"fr" : "Récup. électroménager"
		},
		"label_smco_reempcartouchetoner" : {
			"en" : "Re-employment ",
			"fr" : "Récup. cartouches d'encres/tuners imprimantes"
		},
		"label_smco_reempjouet" : {
			"en" : "Re-employment toy",
			"fr" : "Récup. de jouets"
		},
		"label_smco_reempmeuble" : {
			"en" : "Re-employment pieces of furniture",
			"fr" : "Récup. de meuble"
		},
		"label_smco_reempinfo" : {
			"en" : "Re-employment computer",
			"fr" : "Récup. informatique"
		},
		"label_smco_vendeurvoiture" : {
			"en" : "",
			"fr" : "Vendeur et casse automobile"
		},
		"label_smco_reemplivreCD" : {
			"en" : "Re-employment books, CDs, comics, DVDs",
			"fr" : "Récup. des livres, CDs, BDs, DVDs..."
		},
		"label_smco_reempvet" : {
			"en" : "Re-employment clothes",
			"fr" : "Récup. des vêtements"
		},
		"label_smco_reempdivers" : {
			"en" : "Re-employment divers",
			"fr" : "Récup. d'objets divers"
		},
		"label_smco_batiment" : {
			"en" : "",
			"fr" : ""
		},
		"label_smco_vaisselle" : {
			"en" : "Re-employment ",
			"fr" : "Récup. de la vaisselle"
		},
		"label_smco_papier" : {
			"en" : "",
			"fr" : "Recyclage du papier par des associations."
		},
		"label_smco_plastique" : {
			"en" : "",
			"fr" : "Recyclage du plastique par des associations."
		},
		"label_smco_electrique" : {
			"en" : "",
			"fr" : "Recyclage du matériel électrique par des associations."
		},
		"label_smco_vendeurcartoucheencre" : {
			"en" : "",
			"fr" : "Vendeur de cartouche d'encre"
		},
		"label_smco_vendeurpile" : {
			"en" : "",
			"fr" : "Vendeur de pile"
		},
		"label_smco_reprise" : {
			"en" : "",
			"fr" : "La reprise par les magasins"
		},
		"label_smco_vendeur_lampe_eco" : {
			"en" : "",
			"fr" : "Vendeur lampe économie d'énergie"
		},
		"label_smco_vendeurvoiture" : {
			"en" : "",
			"fr" : "Vendeur et casse automobile"
		},
		"label_smco_recupsupermarche" : {
			"en" : "",
			"fr" : "Récup. dans les supermarchés"
		},
		"label_smco_recupmagasinbrico" : {
			"en" : "",
			"fr" : "Récup. dans les magasins de bricolage"
		},
		"label_smco_garage" : {
			"en" : "",
			"fr" : "Garage, stations services"
		},
		"label_smco_velo" : {
			"en" : "",
			"fr" : "Récup. des vélos"
		},
		"label_smco_pharmacie" : {
			"en" : "",
			"fr" : "Pharmacie"
		},
		"label_cu_papierscartons" : {
			"en" : "",
			"fr" : "Papiers-cartons"
		},
		"label_cu_metal" : {
			"en" : "",
			"fr" : "Métal"
		},
		"label_cu_vertbois" : {
			"en" : "",
			"fr" : "Déchets verts / bois"
		},
		"label_cu_verrevaisselle" : {
			"en" : "",
			"fr" : "Verre / Vaisselle / Pots"
		},
		"label_cu_vetementtissu" : {
			"en" : "",
			"fr" : "Vêtements / tissu"
		},
		"label_cu_encombrant" : {
			"en" : "",
			"fr" : "Encombrants"
		},
		"label_cu_divers" : {
			"en" : "",
			"fr" : "Divers"
		},
		"label_cu_nourriture" : {
			"en" : "",
			"fr" : "Nourriture"
		},
		"label_cu_electronique" : {
			"en" : "",
			"fr" : "Électronique"
		},
		"label_cu_toxique" : {
			"en" : "",
			"fr" : "Toxique"
		},
		"label_scu_toxiquejardin" : {
			"en" : "",
			"fr" : "Jardin"
		},
		"label_scu_toxiquegarage" : {
			"en" : "",
			"fr" : "Garage"
		},
		"label_scu_toxiquecuisine" : {
			"en" : "",
			"fr" : "Cuisine"
		},
		"label_scu_toxiquesdb" : {
			"en" : "",
			"fr" : "Salle de bain"
		},
		"label_scu_toxiquebrico" : {
			"en" : "",
			"fr" : "Bricolage"
		},
		"label_scu_toxiqueparasite" : {
			"en" : "",
			"fr" : "Parasite"
		},
		"label_scu_toxiquedivers" : {
			"en" : "",
			"fr" : "Divers"
		},
		"label_concerne_aussi" : {
			"en" : "Concern",
			"fr" : "Concerne"
		},
		"label_resultat_recherche" : {
			"en" : "Search result",
			"fr" : "Résultat de la recherche"
		},
		"label_structure_template_detail" : {
			"en" : "<B>{type}</B> - {soustype} <BR/>{description_fr} <BR/><B>Schedules</B> : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/>Address : {adresseTemp} '+ ' <BR/><B>Phone</B> : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
			"fr" : "<B>{type}</B> - {soustype} <BR/>{description_fr} <BR/><BR/><B>Horaires</B> : {plagesHoraires2} {ouvertAujourdhuiEtDemain} <BR/><B>Adresse</B> : {adresseTemp} '+ ' <BR/>Téléphone : {telephoneTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
		},
		"label_trisac_template_detail" : {
			"en" : "{description_fr} <BR/><B>Schedules</B> : {horaires} {ouvertAujourdhuiEtDemain} <BR/><B>Address</B> : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}",
			"fr" : "{description_fr} <BR/><B>Horaires</B> : {horaires} {ouvertAujourdhuiEtDemain} <BR/><B>Adresse</B> : {adresseTemp} '+ ' <BR/>TEMPO HORAIRES {horaires}"
		},
		"label_janvier" : {
			"en" : "january",
			"fr" : "janvier"
		},
		"label_fevrier" : {
			"en" : "february",
			"fr" : "février"
		},
		"label_mars" : {
			"en" : "march",
			"fr" : "mars"
		},
		"label_avril" : {
			"en" : "april",
			"fr" : "avril"
		},
		"label_mai" : {
			"en" : "may",
			"fr" : "mai"
		},
		"label_juin" : {
			"en" : "june",
			"fr" : "juin"
		},
		"label_juillet" : {
			"en" : "july",
			"fr" : "juillet"
		},
		"label_aout" : {
			"en" : "august",
			"fr" : "août"
		},
		"label_septembre" : {
			"en" : "september",
			"fr" : "septembre"
		},
		"label_octobre" : {
			"en" : "october",
			"fr" : "octobre"
		},
		"label_novembre" : {
			"en" : "november",
			"fr" : "novembre"
		},
		"label_decembre" : {
			"en" : "december",
			"fr" : "décembre"
		},
		"label_lundi" : { "en" : "monday", "fr" : "lundi" },
		"label_mardi" : { "en" : "tuesday", "fr" : "mardi" },
		"label_mercredi" : { "en" : "wednesday", "fr" : "mercredi" },
		"label_jeudi" : { "en" : "thursday", "fr" : "jeudi" },
		"label_vendredi" : { "en" : "friday", "fr" : "vendredi" },
		"label_samedi" : { "en" : "saturday", "fr" : "samedi" },
		"label_dimanche" : { "en" : "sunday", "fr" : "dimanche" },
		"label_adresse" : { "en" : "address", "fr" : "adresse" },
		"label_type" : { "en" : "type", "fr" : "type" },
		"label_telephone" : { "en" : "phone number", "fr" : "téléphone" },
		"label_horaires" : { "en" : "schedules", "fr" : "horaires" },


		"label_ouvert_aujourdhui_et_demain" : { "en" : "Open today and tomorrow", "fr" : "Ouvert aujourd'hui et demain" },
		"label_ouvert_aujourdhui" : { "en" : "Open today", "fr" : "Ouvert aujourd'hui" },
		"label_ouvert_demain" : { "en" : "Open tomorrow", "fr" : "Ouvert demain" },
		"label_dechets" : { "en" : "garbages", "fr" : "déchets" },
		"label_cu_plastique" : { "en" : "plastic", "fr" : "plastique" },
		"label_cu_papierscartons" : { "en" : "paper-cardboard", "fr" : "papiers-cartons" },
		"label_cu_metal" : { "en" : "", "fr" : "métal" },
		"label_cu_vertbois" : { "en" : "", "fr" : "déchets verts / bois" },
		"label_cu_verrevaisselle" : { "en" : "glass / dishes / ", "fr" : "verre / Vaisselle / Pots" },
		"label_cu_vetementtissu" : { "en" : "clothes / ", "fr" : "vêtements / tissu" },
		"label_cu_encombrant" : { "en" : "", "fr" : "encombrants" },
		"label_cu_divers" : { "en" : "others", "fr" : "divers" },
		"label_cu_nourriture" : { "en" : "food", "fr" : "nourriture" },
		"label_cu_electronique" : { "en" : "electronic", "fr" : "électronique" },
		"label_cu_toxique" : { "en" : "toxic", "fr" : "toxique" },
		"label_source" : { "en" : "source", "fr" : "source" },
		"label_dechet" : { "en" : "garbage", "fr" : "déchet" },
		"label_modeDeCollecte" : { "en" : "collect mod", "fr" : "mode de collecte" },
		"label_fiche" : { "en" : "", "fr" : "fiche" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" },
		"label_" : { "en" : "", "fr" : "" }

	};
	if (map[stKey] == null) {
		result = stKey;
	} else if (stLocale == "en" && map[stKey]["en"] != null) {
		result = map[stKey]["en"];
	} else if (map[stKey]["fr"] != null) {
		result = map[stKey]["fr"];
	}
	return result;
}