/**
 * Page des Fiches explicatives
 * 
 * @author Christian Renoulin
 */
Ext.define('MieuxTrierANantes.view.information.Informations', {
			extend : 'Ext.NavigationView',
			xtype : 'informations_xtype',
			id : 'informations_id',
			config : {
				// Titre dans barre de bouton principale
				title : 'Fiches',
				// Icone dans la barre de bouton principale
				// CRN : pour la migration vers 2.3, on desactive ceci qui cache
				// la page sous IE
				// scrollable : true,

				items : [{
							xtype : 'informationsbuttonslist_xtype'
						}],
				navigationBar : {
					items : [{
								xtype : 'button',
								// iconCls : 'home', Ceci ne fonctionne pas sous Windows Phone (on remplace par icon)
								icon : 'resources/icons/home_mini.png',
								ui : 'round', // bouton arrondi
								title : 'Accueil',
								align : 'right',
								id : 'informationhomebutton'
							}],
					docked : 'top'
				},
				defaultBackButtonText : "Retour"

			}
		});