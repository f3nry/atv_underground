Ext.define('Avt.store.AircraftsRest', {
  extend: 'Ext.data.Store',

  config: {
    model: 'Avt.model.Aircraft',
    proxy: {
      type: 'ajax',
      url: '/aircrafts.json',
      reader: {
        type: 'json',
      }
    },
    autoLoad: true
  }
});
