/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('MieuxTrierANantes.view.home.SettingsForm', {
	extend : 'Ext.form.FormPanel',
	requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
	xtype : 'settingsForm_xtype',
	style : 'background-color: #759E60;',
	config : {
		url : 'www.mieuxtrieranantes.fr/dist/scripts/php/send_mail.php',
		headers : {
			'Content-Type' : 'multipart/form-data; charset=UTF-8'
		},
		method : 'POST',
		items : [{
			xtype : 'fieldset',
			items : [{
						xtype : 'emailfield',
						name : 'email',
						label : 'Email *'
					}, {
						xtype : 'textfield',
						name : 'sujet',
						label : 'Sujet',
						id : 'commentsFormTextfield'
					}, {
						xtype : 'textareafield',
						height : '150px',
						name : 'message',
						label : 'Texte',
						id : 'commentsFormTextareafield',
						placeHolder : "Commentaires sur l'application ou la filière tri"
					}]
		}, {
			xtype : 'button',
			iconMask : true,
			text : 'Envoyez',
			iu : 'confirm',
			handler : function(button, e) {
				// http://docs.sencha.com/touch/2.3.1/#!/api/Ext.data.proxy.LocalStorage

				var store = Ext.create('Ext.data.Store', {
							model : "MieuxTrierANantes.model.SettingsModel"
						});

				// loads any existing Search data from localStorage
				store.load();

				// now add some Searches
				store.add({
							query : 'Sencha Touch'
						});
				store.add({
							query : 'Ext JS'
						});

				// finally, save our Search data to localStorage
				store.sync();

			}
		}]
	}

});