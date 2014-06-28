Ext.define('MieuxTrierANantes.store.Settings', {
	extend: 'Ext.data.Store',
	requires: ['MieuxTrierANantes.model.Setting'],
    config: {
    	model: 'MieuxTrierANantes.model.Setting',
    	autoLoad: true
	}
});