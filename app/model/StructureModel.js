Ext.define('MieuxTrierANantes.model.StructureModel', {
			extend : 'Ext.data.Model',

	config : {
		fields : [{
					name : 'code',
					type : 'string'
				}, {
					name : 'libelle',
					type : 'string',
					defaultValue : ''
				}, {
					name : 'type',
					type : 'string'
				}, {
					name : 'statut',
					type : 'string'
				}, {
					name : 'conseils',
					type : 'string'
				}, {
					name : 'horaires',
					type : 'string'
				}, {
					name : 'plagesHoraires',
					type : 'string'
				}, {
					name : 'quartier',
					type : 'string',
					defaultValue : ''
				}, {
					name : 'quartier_admin',
					type : 'string'
				}, {
					name : 'description_fr',
					type : 'string'
				}, {
					name : 'modesCollecte',
					type : 'string'
				}, {
					name : 'src',
					type : 'string'
				}, {
					name : 'tel',
					type : 'string'
				}, {
					name : 'adresseTemp',
					type : 'string'
				}, {
					name : 'plagesHoraires_prochainsJours',
					type : 'string'
				}, {
					name : 'plagesHoraires_lisible',
					type : 'string'
				}, {
					name : 'plagesHoraires_periodes',
					type : 'object'
				}, {
					name : 'latitude',
					type : 'string'
				}, {
					name : 'longitude',
					type : 'string'
				}, {
					name : 'dechetsNoAccents',
					type : 'string'
				}, {
					name : 'url',
					type : 'string'
				}, {
					name : 'email',
					type : 'string'
				}, {
					name : 'logo',
					type : 'string'
				}
				]
	}
});