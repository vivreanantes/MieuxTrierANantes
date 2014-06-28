/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('MieuxTrierANantes.view.comments.CommentsForm', {
	extend : 'Ext.form.FormPanel',
	requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
	xtype : 'commentsForm_xtype',
	style : 'background-color: #759E60;',
	config : {
		url : 'http://renoulin.fr/mieuxtrieranantes/send_mail.php',
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
			text : 'Envoyez',
			iu : 'confirm',
			handler : function() {
				this.up("commentsForm_xtype").submit({
					failure : function(form, result) {
						if (result.failure != null) {
							Ext.Msg.alert("Envoi message",
									"Échec de l'envoi : " + result.failure);
						} else {
							Ext.Msg.alert("Envoi message", "Échec de l'envoi.");
						}
					},
					success : function(form, result) {
						Ext.Msg.alert("Envoi message",
								"Votre message a bien été envoyé.");

					}
				});
			}
		}]
	}

});