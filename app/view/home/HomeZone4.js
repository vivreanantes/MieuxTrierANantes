/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone4', {
	extend : 'Ext.Container',
	xtype : 'homeZone4_xtype',

	config : {

		layout : {
			type : 'vbox'
		},
		// CRN : pour la migration vers 2.3, on desactive ceci qui cache la page
		// sous IE
		items : [{
			layout : 'hbox',
			scrollable : false,
			height : '60px',
			style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
			items : [{
				id : "homeZone4_11",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Déchets<br/><img src='resources/icons/icones_trisacs.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_12",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Carte<br/><img src='resources/icons/icone_carte.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_13",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Fiches<br/><img src='resources/icons/icone_livre.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				flex : 1
			}]
		}, {
			layout : 'hbox',
			scrollable : false,
			height : '60px',
			style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
			items : [{
				id : "homeZone4_21",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Lieux</font><br/><img src='resources/icons/icone_direction.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_22",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>A domicile<br/><img src='resources/icons/icone_camion_poubelle.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_23",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Trisac</font><br/><img src='resources/icons/icones_trisacs.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				flex : 1
			}]
		}, {
			layout : 'hbox',
			scrollable : false,
			height : '60px',
			style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
			items : [{
				id : "homeZone4_1",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Quiz Janvier</font><br/><img src='resources/images/quiz/issiontrix-quiz-1.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_2",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Quiz Hellfest</font><br/><img src='resources/images/quiz/issiontrix_hellfest.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}, {
				id : "homeZone4_3",
				xtype : "button",
				height : '60px',
				width : '30%',
				cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Docs imprimables</font><br/><img src='resources/images/icon_pdf.png' height='35px' /></center>",
				data : {
					label : "",
					image : ""
				}
			}
					// , {
					// id : "homeZone4_4",
					// xtype : "button",
					// height : '60px',
					// width : '30%',
					// cls : 'boutons_panneau',
					// tpl : "<center><font
					// size='2'>Listing<br/>lieux</font><br/><img
					// src='resources/images/application-vnd.ms-excel.png'
					// height='35px' /></center>",
					// data : {
					// label : "",
					// image : ""
					// }
					// }
			, {
				flex : 1
			}]
		}]
	}
});
