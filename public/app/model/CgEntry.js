Ext.define('Avt.model.CgEntry', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      { name: 'weight', type: 'float' },
      { name: 'arm', type: 'float' }
    ],

    belongsTo: 'Aircraft'
  }
});
