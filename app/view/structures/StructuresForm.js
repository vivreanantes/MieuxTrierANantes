
/**
 * Formulaire des Déchets
 */
Ext.define('MieuxTrierANantes.view.structures.StructuresForm', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.field.Text', 'Ext.field.Select'],
	xtype : 'structuresForm_xtype',
	config : {
		items : [{
			xtype : 'selectfield',
			usePicker : false,
			labelWidth : '80px',
			label : 'Type',
			id : 'structuresFormSelectType',
			options : [{
				text : 'Tous',
				value : /modco_ecopointmodco_decheterie|modco_encombrants_resume|smco_reemp|ventevrac/g
			}, {
				text : "Déchèteries / Ecopoints",
				value : "(modco_decheterie|modco_ecopoint)"
			}, {
				text : "Encombrants",
				value : "modco_encombrants_resume"
			}, {
				text : "Réemploi",
				value : "smco_reemp"
			}, {
				text : "Vente vrac",
				value : "ventevrac"
			}

			/*
			 * { text : "Récup cartouches encre/tuners", value :
			 * "smco_reempcartouchetoner" }, { text : "Récup électrom., meubles,
			 * jouets", value :
			 * /smco_reempelectromenag|smco_reempmeuble|smco_reempjouet/g }, {
			 * text : "Récup informatique", value : "smco_reempinfo" }, { text :
			 * "Récup livres/BD/CD/DVD", value : "smco_reemplivreCD" }, { text :
			 * "Récup vêtements", value :
			 * /smco_reempvet|smco_conteneurlerelais/g }, { text : "Récup divers
			 * (lunettes...)", value : /smco_reempdivers|smco_reemplunettes/g }
			 */]
		}, {
			xtype : 'selectfield',
			usePicker : false,
			label : 'Ville',
			labelWidth : '80px',
			id : 'structuresFormSelectQuartier',
			options : [{}]
		},
				// la zone de saisie avec la loupe
				{
					layout : {
						type : 'hbox',
						align : 'strech',
						height : '35px'
					},
					items : [{
								xtype : 'textfield',
								name : 'name',
								labelWidth : '110px',
								width : '280px',
								label : 'Déchet/nom',
								id : 'structureFormText',
								placeHolder : "Ex : vélo, emmaüs"
							}, {
								xtype : 'button',
								id : 'structureFormButton',
								// icône en forme de loupes
								iconCls : 'search',
								iconMask : true
							}]
				}]
	}

});