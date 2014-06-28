/**
 * Formulaire des Déchets
 */
Ext.define('MieuxTrierANantes.view.reuses.ReusesForm', {
	extend : 'Ext.form.Panel',
	requires : ['Ext.field.Text', 'Ext.field.Select'],
	xtype : 'reusesForm_xtype',
	config : {
		items : [{
			xtype : 'selectfield',
			label : 'Type',
			id : 'reusesFormSelectType',
			options : [{
				text : 'Tous',
				// value : 'all'
				value : /smco_reempdivers|smco_reempcartouchetoner|smco_reempelectromenag|smco_reempinfo|smco_reempjouet|smco_reemplivreCD|smco_reempmeuble|smco_reemplunettes|smco_reempvet|smco_conteneurlerelais/g
			}, {
				text : "Cartouches d'encres, tuners",
				value : "smco_reempcartouchetoner"
			}, {
				text : "Electroménager, meubles",
				value : /smco_reempelectromenag|smco_reempmeuble/g
			}, {
				text : "Informatique",
				value : "smco_reempinfo"
			}, {
				text : "Jouets",
				value : "smco_reempjouet"
			}, {
				text : "Livres/BD/CD/DVD",
				value : "smco_reemplivreCD"
			}, {
				text : "Vêtements (dont Le Relais)",
				value : /smco_reempvet|smco_conteneurlerelais/g
			}, {
				text : "Divers (lunettes...)",
				value : /smco_reempdivers|smco_reemplunettes/g
			}]
		}, {
			xtype : 'selectfield',
			label : 'Nantes / Hors Nantes',
			id : 'reusesFormSelectQuartier',
			options : [{}]

		}]
	}

});