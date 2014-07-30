/**
 * Formulaire des Modes de Collecte à domicile
 */
Ext.define('MieuxTrierANantes.view.homecollectmods.HomeCollectModsForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'homecollectmodsform_xtype',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Adresse',
							labelWidth : '80px',
							width : '335px',
							id : 'homeCollectModsFormText',
							placeHolder : "Sans 'rue'. 2 caractères min."
						}]
			}
		});