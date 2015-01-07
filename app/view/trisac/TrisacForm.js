/**
 * Formulaire des distribution des Trisacs
 */
Ext.define('MieuxTrierANantes.view.trisac.TrisacForm', {
			extend : 'Ext.form.Panel',
			requires : ['Ext.field.Text', 'Ext.field.Select'],
			xtype : 'TrisacForm_xtype',
			config : {
				items : [{
							xtype : 'selectfield',
							usePicker : false,
							label : 'Quartier',
							labelWidth : '100px',
							id : 'trisacFormSelect',
							placeHolder : "Ex : Mangin"
						},
						// la zone de saisie avec la loupe
						{
							layout : {
								type : 'hbox',
								align : 'strech',
								height : '35px'
							},
							items : [{
										xtype : 'textfield',
										name : 'name',
										label : 'Nom ',
										id : 'trisacFormText',
										labelWidth : '90px',
										itemId : 'trisacFormTextId'
									}, {
										xtype : 'button',
										id : 'trisacFormButton',
										// icône en forme de loupes
										iconCls : 'search',
										iconMask : true
									}]
						}]
			}

		});