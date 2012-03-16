Ext.define('Avt.store.AircraftsLocal', {
  extend: 'Ext.data.Store',

  config: {
    model: 'Avt.model.Aircraft',
    proxy: {
      type: 'localstorage',
      id: 'aircrafts'
    },
    autoLoad: true
  }
});
