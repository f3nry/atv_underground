Ext.define('Avt.view.AircraftsList', {
  extend: 'Ext.List',
  xtype: 'aircraftlist',

  config: {
  	title: 'AVT Underground',
    store: 'Aircrafts',
    itemTpl: '{model_name}: {tail_number}',

    onItemDisclosure: true,
    onItemSelect: true
  },
});
