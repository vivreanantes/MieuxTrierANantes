/**
 * Listes des fiches explicatives
 * 
 * @author Christian Renoulin
 */

Ext.define('MieuxTrierANantes.view.information.InformationsButtonsPanel', {
	extend : 'Ext.Container',
	xtype : 'informationsbuttonslist_xtype',
	config : {
		title : "Fiches",
		layout : {
			type : 'vbox'
		},
		// CRN : pour la migration vers 2.3, on desactive ceci qui cache  la page sous IE
		scrollable : true,
		items : [
			{
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_1",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_2",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_3",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_4",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_5",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_6",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_7",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_8",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_9",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_10",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_11",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_12",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		} , {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_13",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_14",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_15",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_16",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_17",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_18",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_19",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_20",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_21",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_22",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_23",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_24",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_25",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_26",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_27",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_28",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_29",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_30",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_31",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_32",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_33",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_34",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_35",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_36",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}, {
			layout : {
				type : 'hbox',
				align : 'strech'
			},
			items : [{
				id : "informationsButtonsPanel_37",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_38",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}, {
				id : "informationsButtonsPanel_39",
				xtype : "button", height : '100px', width : '33%', 
				tpl : "<center><font size='2'>{label}</font><br/><img src='resources/images/{image}' /></center>", data : { label:"", image : ""}
			}]
		}]
		}
		});