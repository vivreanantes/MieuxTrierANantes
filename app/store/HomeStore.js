Ext.define('MieuxTrierANantes.store.HomeStore', {
    extend: 'Ext.data.Store',
    config: {
    	autoLoad : true,
        model: 'MieuxTrierANantes.model.HomeModel',
        proxy: {
            type: 'rest',
           //  url: 'http://www.mieuxtrieranantes.fr/news.json'
            url: 'http://www.mieuxtrieranantes.fr/dist/scripts/php/news.php',
             headers: {
            'Accept': 'application/json'}
        },
        listeners: {
            beforeload: function () {
                var name = document.location.search.slice(1);
                this.getProxy().setExtraParam('name', name);
            }
        }
    }
});