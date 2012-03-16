Ext.define('Avt.store.Aircrafts', {
  extend: 'Ext.data.Store',

  statics: {
    getAircrafts: function() {
      return Ext.create('Avt.store.AircraftsRest');
    }
  },

  config: {
    model: 'Avt.model.Aircraft',
    proxy: {
      type: 'direct',
      directFn: 'Avt.store.Aircrafts.getAircrafts'
    }
  }
});
