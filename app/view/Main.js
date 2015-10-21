Ext.define('MieuxTrierANantes.view.Main', {

	// http://try.sencha.com/touch/2.2.0/

	extend : 'Ext.tab.Panel',
	xtype : 'main_xtype',
	// requires : ['Ext.TitleBar'],
	config : {
		tabBarPosition : 'bottom',
		// test IE 20150930
		// height:'250px',
		items : [
		
			/*{
			xtype : 'titlebar',
			id : 'main_titlebar',
			cls : 'title',
			docked : 'top',
			items : [{
				ui : 'confirm',
				html : "<A HREF='https://mieuxtrieranantes.wordpress.com' TARGET=_blank title='Bloc Mieux trier à Nantes'>Notre blog</A>"
			}, {
				ui : 'confirm',
				html : "Réemploi "
						+ "<IMG SRC='resources/images/images_non_libres/icone_forms.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='www.mieuxtrieranantes.fr/scripts_php/formulaire_reemploi.php' TARGET=_blank title='Formulaire de saisie des associations/entreprises de réeemploi'>Inscrire</A>&nbsp;&nbsp;"
						+ "<IMG SRC='resources/images/images_non_libres/icone_spreadsheets.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://docs.google.com/spreadsheets/d/1jvFIceePP8h4tjGUGa3EYu8_u_TdtaSBYctysMWXu2Y/edit?usp=sharing' TARGET=_blank title='Liste des associations/entreprises de réeemploi'>Liste</A>"
			}, {
				ui : 'confirm',
				html : "<IMG SRC='resources/icons/facebook.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://www.facebook.com/pages/Mieux-trier-à-Nantes/266725983531595' TARGET=_blank title='Facebook'>Facebook</A>"
			}, {
				ui : 'confirm',
				html : "Application "
						// + "<IMG SRC='resources/icons/android.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://play.google.com/store/apps/details?id=com.MieuxVivreANantes.MieuxTrierANantes' TARGET=_blank title='Lien vers le Play Store'></A>"
				+ "<IMG SRC='resources/icons/android.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://play.google.com/store/apps/details?id=com.MieuxVivreANantes.MieuxTrierANantes' TARGET=_blank title='Lien vers le Play Store'>Play Store</A> - "
				+ "&nbsp;&nbsp;<A HREF='http://mieuxtrieranantes.fr/dev.apk' TARGET=_blank title='Version de développement'>Version développement</A>"
			}, {
				ui : 'confirm',
				html : "Amis "
						+ "<IMG SRC='resources/images/images_non_libres/logo_les_boites_vertes_rogne_mini.png' HEIGHT='22px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='http://lesboitesvertes.fr/' TARGET=_blank title='Association les boîtes vertes (Baludik, PlusDeVers)'>les boîtes vertes</A>"
			}]
		}, */
		 {
			title : 'Actualités_',
			iconCls : 'livreclass', 
			xtype : 'home_xtype',
			hidden : 'true'
		}, {
			title : 'Déchets',
			/// iconCls : 'trash',
			iconCls : 'garbageclass', // icône en forme de déchets 
			xtype : 'garbages_xtype'
		}, {
			title : 'Carte',
			iconCls : 'maps',
			xtype : 'maposm_xtype'
		}, {
			title : 'Fiches',
			// iconCls : 'info', // icone en forme de 'i'
			iconCls : 'livreclass', // icône en forme de livre
			xtype : 'informations_xtype'
		}, {
			title : 'Lieux',
			// iconCls : 'action',
			xtype : 'structuresview_xtype'
		}, {
			title : 'A domicile',
			iconCls : 'homecollectclass', // icône en forme de camion
			xtype : 'homecollectmods_xtype'
		}, {
			title : 'Trisac',
			// iconCls : 'add',
			iconCls : 'distrisacclass', // icône en forme de sacs
			xtype : 'trisac_xtype'
		}]
	}
});
