/**
 * Formulaire des Modes de Collecte à domicile
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'homecollectmodsform_xtype',
			config : {
				items : [ {
							html : 'Retrouver les jours et mode de collecte à domicile.<br/>Nantes : recherche par rue. Hors Nantes : par nom de ville. <i>Vous devez saisir 2 caractères minimum</i>.',
							height : '70px'
						},
							{
							layout : {
								type : 'hbox',
								align : 'strech',
								height : '50px'
							},
							items : [{
										xtype : 'textfield',
										name : 'name',
										label : 'Adresse',
										labelWidth : '80px',
										width : '285px',
										id : 'homeCollectModsFormText',
										placeHolder : "Ex : royal"
									}, {
										xtype : 'button',
										id : 'homeCollectModsFormButton',
										iconCls : 'search', // icône en forme de
															// loupes
										iconMask : true
									}]
						}]
			}
		});