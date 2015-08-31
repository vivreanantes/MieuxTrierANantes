/*
 * Ext.define('MieuxTrierANantes.model.DocsModel', { extend : 'Ext.data.Model',
 * config : { fields : ['code', 'nom', 'mots_cles', 'url', 'src'] } });
 */
Ext.define('MieuxTrierANantes.model.DocsModel', {
			extend : 'Ext.data.Model',
			config : {
				fields : ['code', 'nom', 'mots_cles', 'nom_eb', 'mots_cles_en',
						'url', 'src']
			}
		});