/**
 * Conteneur avec
 */
Ext.define('MieuxTrierANantes.view.home.HomeZone4', {
	extend : 'Ext.Container',
	xtype : 'homeZone4_xtype',

	config : {
		layout : 'hbox',
		scrollable : false,
		height:'90px',
		// docked : 'top',
		// style : 'background-image:url(resources/images/background.png);background-repeat:no-repeat;background-size:100% 100%;',
		style : 'background-image:url(resources/images/bandeau_ligne_droite.png);background-repeat:repeat-y;background-size:100%;',
		items : [
			{
				id : "homeZone4_1",
				xtype : "button",height : '80px', width : '55px', cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Quiz<br/>Janvier</font><br/><img src='resources/images/quiz/issiontrix-quiz-1.png' height='50px' /></center>", data : { label:"", image : ""}
			}, {
				id : "homeZone4_2",
				xtype : "button",height : '80px', width : '55px', cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Quiz<br/>Hellfest</font><br/><img src='resources/images/quiz/issiontrix_hellfest.png' height='50px' /></center>", data : { label:"", image : ""}
			}, {
				id : "homeZone4_3",
				xtype : "button",height : '80px', width : '55px', cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Docs à<br/>imprimer</font><br/><img src='resources/images/icon_pdf.png' height='50px' /></center>", data : { label:"", image : ""}
			}, {
				id : "homeZone4_4",
				xtype : "button",height : '80px', width : '55px', cls : 'boutons_panneau',
				tpl : "<center><font size='2'>Listing<br/>réemploi</font><br/><img src='resources/images/application-vnd.ms-excel.png' height='50px' /></center>", data : { label:"", image : ""}
			},{
					flex : 1
				}]
	}
});
