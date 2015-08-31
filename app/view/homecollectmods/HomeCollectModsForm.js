/**
 * Formulaire des Modes de Collecte à domicile
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'homecollectmodsform_xtype',
			config : {
				items : [ {
							html : 'Recherche par rue (Nantes) ou par nom de ville (hors Nantes). <i></i>',
							height : '40px'
						},
							{
							layout : {
								type : 'hbox',
								align : 'strech',
								height : '35px'
							},
							items : [{
										xtype : 'textfield',
										name : 'name',
										label : 'Adresse',
										labelWidth : '80px',
										width : '285px',
										id : 'homeCollectModsFormText',
										placeHolder : "Ex : royale"
									},
									{
										xtype : 'button',
										id : 'homeCollectModsFormButton',
										// icône en forme de loupes
										iconCls : 'search', 
										iconMask : true
									}]
						}]
			}
		});