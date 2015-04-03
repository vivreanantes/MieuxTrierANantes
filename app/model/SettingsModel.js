Ext.define('MieuxTrierANantes.model.SettingsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'query'],
        proxy: {
            type: 'localstorage',
            id  : 'twitter-Searches'
        }
    }
});