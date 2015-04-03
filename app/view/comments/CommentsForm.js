/**
 * Formulaire d'envoie d'un commentaire
 */
Ext.define('MieuxTrierANantes.view.comments.CommentsForm', {
	extend : 'Ext.form.FormPanel',
	requires : ['Ext.form.FieldSet', 'Ext.field.Email'],
	xtype : 'commentsForm_xtype',
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
					  	this.hide();

					}
				});
			}
		}]
	}

});
/*
Ext.define('MyApp.view.Login', {
        extend: 'Ext.navigation.View',
        height: 220,
        width: 490,
        layout: 'fit',
        modal: true,
        buttonAlign: 'left',
        closable: false,
        items: [
            {
                xtype: 'form',
                frame: false,
                border: 0,
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                fieldDefaults: {
                    msgTarget: 'side',
                    labelWidth: 55
                },
                items: [
                    {
                        xtype: 'container',
                        flex: 1,
                        padding: 10,
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        items: [
                            {
                                xtype: 'textfield',
                                name: 'username',
                                fieldLabel: 'Username',
                                allowBlank: false,
                                flex: 1
                            },
                            {
                                xtype: 'textfield',
                                name: 'password',
                                fieldLabel: 'Password',
                                inputType: 'password',
                                allowBlank: false,
                                flex: 1
                            }
                        ]
                    }
                ]
            }
        ],
        buttons: [
            {
                text: 'Login',
                handler: function () {
                    var value1 = document.getElementById('username').value;
				var value2 = document.getElementById('password').value;
				document.forms["myform"].submit();
                }
            }
        ]
    });*/