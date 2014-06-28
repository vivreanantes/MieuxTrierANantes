/**
 * Formulaire des distribution des Trisacs
 */
Ext.define('MieuxTrierANantes.view.trisac.TrisacForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'TrisacForm_xtype',
			config : {
				items : [{
							xtype : 'textfield',
							name : 'name',
							label : 'Nom ',
							id : 'trisacFormText'
						}, {
							xtype : 'selectfield',
							usePicker : false,
							label : 'Quartier',
							id : 'trisacFormSelect'
						}]
			}

		});