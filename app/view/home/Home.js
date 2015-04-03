/**
 * Vue principale des Actualités
 * 
 * Ext.define('MieuxTrierANantes.view.news.News', { extend:
 * 'Ext.NavigationView', xtype : 'news_xtype', config: { fullscreen: true, tpl: '
 * <p>
 * The ID is {id}
 * </p>
 * <p>
 * The content is {content}
 * </p>' } });
 */

/**
 * Vue principale des Déchets (présente avec un icone de déchets)
 * 
 * Ext.define('MieuxTrierANantes.view.news.News', { extend :
 * 'Ext.navigation.View', xtype : 'news_xtype', // id : 'garbages_id', config : {
 * fullscreen: true, tpl: '
 * <p>
 * The ID is {id}
 * </p>
 * <p>
 * The content is {content}
 * </p>' } });
 */
Ext.define('MieuxTrierANantes.view.home.Home', {
			extend : 'Ext.navigation.View',
			xtype : 'home_xtype',

			config : {
				autoDestroy : false,
				styleHtmlContent : 'true',
				scrollable : true,
				items : [{
							xtype : 'homeContainer_xtype'
						}],
		// on cache le titre
		/*navigationBar : {
			hidden : true
		},*/
				defaultBackButtonText : "Retour"
			}
		});