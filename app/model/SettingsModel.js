Ext.define('MieuxTrierANantes.model.SettingsModel', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['mail', 'zone', 'souszone', 'modcojaune'],
        proxy: {
            type: 'localstorage',
            id  : 'userstoreproxy'
        }
    }
});