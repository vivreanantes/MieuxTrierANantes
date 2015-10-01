/*
 * Ext.define('MieuxTrierANantes.model.DocsModel', { extend : 'Ext.data.Model',
 * config : { fields : ['code', 'nom', 'mots_cles', 'url', 'src'] } });
 */
Ext.define('MieuxTrierANantes.model.GlobalSearchModel', {
			extend : 'Ext.data.Model',
			config : {
				fields : ['type', 'code', 'nom', 'mots_cles', 'descr',
						'type_en', 'nom_en', 'mots_cles_en', 'descr_en', 'image', 'page', 'latitude', 'longitude'/*, 'url'*/]
			}
		});