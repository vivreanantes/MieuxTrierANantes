https://www.robertkehoe.com/2012/11/sencha-touch-2-localstorage-example/

http://docs.sencha.com/touch/2.3.1/#!/api/Ext.data.proxy.LocalStorage

Ext.define('MieuxTrierANantes.store.News', {
  extend:'Ext.data.Store',
  config:{
    model:'MieuxTrierANantes.model.SettingsOnlineModel',
    proxy: {
      timeout: 3000, // How long to wait before going into "Offline" mode, in milliseconds.
      type: 'ajax',
      url: 'http://example.org/data/news.json' // Sample URL that simulates offline mode. Example.org does not allow cross-domain requests so this will always fail
    },
    autoLoad: false // Will load programmatically later
  }
});