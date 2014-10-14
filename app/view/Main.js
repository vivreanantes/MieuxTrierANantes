Ext.define('MieuxTrierANantes.view.Main', {
	
	// http://try.sencha.com/touch/2.2.0/
	
	extend : 'Ext.tab.Panel',
	xtype : 'main_xtype',
	requires : ['Ext.TitleBar', 'Ext.Video',
			'MieuxTrierANantes.view.SettingsView'],
	config : {
		tabBarPosition : 'bottom',
		items : [
			{
			xtype : 'titlebar',
			id : 'main_titlebar',
			cls : 'title',
			docked : 'top',
			items : [{
				ui : 'confirm',
				html : "<A HREF='https://docs.google.com/presentation/d/1Rd2pOPuDD3NznjlukCrFGsdRp0_Rlr1faCgu0-p_N9A/edit?usp=sharing' TARGET=_blank title='Diaporama de présentation'><IMG SRC='resources/images/images_non_libres/icone_presentation.png' HEIGHT='18px' style='vertical-align:middle;'/></A>&nbsp;&nbsp;<A HREF='https://docs.google.com/document/d/1IguI_HmMtMeT4BHbzEpj0dCGIDKVMzHCOKGqvBMbt7I/edit?usp=sharing' TARGET=_blank title='Documentation de présentation'><IMG SRC='resources/images/images_non_libres/icone_documents.png' HEIGHT='18px' style='vertical-align:middle;'/></A>&nbsp;&nbsp;<A HREF='https://docs.google.com/document/d/1IguI_HmMtMeT4BHbzEpj0dCGIDKVMzHCOKGqvBMbt7I/edit?usp=sharing' TARGET=_blank title='Documentation de présentation'>Le projet</A>"
			}, {
				ui : 'confirm',
				html : "<IMG SRC='resources/images/images_non_libres/icone_documents.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://docs.google.com/document/d/1pa6GhUpSUowmPecLBvskYkuiENziKnputJBxM5KFnAo/edit?usp=sharing' TARGET=_blank title='Nous aider'>Nous aider</A>"
			}, {
				ui : 'confirm',
				html : "<IMG SRC='resources/images/images_non_libres/icone_spreadsheets.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://docs.google.com/spreadsheets/d/1udy-Qp54pYwOydgJm49QgFQ9QWgjc66n4y2jaFE3gns/edit?usp=sharing' TARGET=_blank title='Suivi des commentaires postés'>Commentaires</A>"
			}, {
				ui : 'confirm',
				html : "Réemploi : " +
						"<IMG SRC='resources/images/images_non_libres/icone_forms.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='http://renoulin.fr/mieuxtrieranantes/formulaire_reemploi.php' TARGET=_blank title='Formulaire de saisie des associations/entreprises de réeemploi'>Formulaire</A>&nbsp;&nbsp;" +
						"<IMG SRC='resources/images/images_non_libres/icone_spreadsheets.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://docs.google.com/spreadsheets/d/1jvFIceePP8h4tjGUGa3EYu8_u_TdtaSBYctysMWXu2Y/edit?usp=sharing' TARGET=_blank title='Liste des associations/entreprises de réeemploi'>Listing</A>"
			}, {
				ui : 'confirm',
				html : "<IMG SRC='resources/icons/android.png' HEIGHT='18px' style='vertical-align:middle;'/>&nbsp;&nbsp;<A HREF='https://play.google.com/store/apps/details?id=com.MieuxVivreANantes.MieuxTrierANantes' TARGET=_blank title='Lien vers le Play Store'>Android</A>"
			}]
		}, {
			title : 'Déchets',
			/// iconCls : 'trash',
			iconCls : 'garbageclass', // icône en forme de déchets 
			xtype : 'garbages_xtype'
		},
		{
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
			// iconCls : 'home',
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
