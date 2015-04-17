/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('MieuxTrierANantes.view.home.SettingsForm', {
	extend : 'Ext.form.FormPanel',
	requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
	xtype : 'settingsForm_xtype',
	style : 'background-color: #759E60;',
	config : {
		url : 'www.mieuxtrieranantes.fr/scripts_php/send_mail.php',
		headers : {
			'Content-Type' : 'multipart/form-data; charset=UTF-8'
		},
		method : 'POST',
		items : [{
			xtype : 'fieldset',
			items : [{
				html : "Ces valeurs seront remplies automatiquement dans les formulaires."
			}, {
				xtype : 'emailfield',
				name : 'email',
				label : 'Email',
				labelWidth : '90px',
				id : 'settingsFormMailTextfield'
			}, {
				xtype : 'selectfield',
				usePicker : false,
				label : 'Ville',
				labelWidth : '90px',
				id : 'settingsFormVilleTextfield'
			}, {
				xtype : 'selectfield',
				usePicker : false,
				label : 'Quartier',
				labelWidth : '90px',
				id : 'settingsFormQuartierTextfield'
			}/* {
			html : "si vous ne connaissez pas votre mode de collecte, allez sur la page 'collecte à domicile'"
			}*/, {
				xtype : 'selectfield',
				usePicker : false,
				label : 'Mode de collecte',
				labelWidth : '90px',
				id : 'settingsFormModCoTextfield',
				options : [{
							text : 'Trisac (uniquement dispo à Nantes)',
							value : 'modco_sacjaune'
						}, {
							text : 'Bac jaune sur Nantes',
							value : 'modco_bacjaunenantes'
						}, {
							text : 'Bac jaune hors Nantes',
							value : 'modco_bacjaune'
						}]
			}, {
				xtype : 'selectfield',
				usePicker : false,
				label : 'Langue',
				labelWidth : '90px',
				id : 'settingsFormLangTextfield',
				options : [{
							text : 'Français',
							value : 'fr'
						}, {
							text : 'Anglais (expérimental)',
							value : 'en'
						}]
			}]
		}, {
			xtype : 'button',
			iconMask : true,
			text : 'Sauvez',
			iu : 'confirm',
			id : 'settingsFormButton'
		}]
	}

});