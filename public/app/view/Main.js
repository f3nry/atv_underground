Ext.define('Avt.view.Main', {
  extend: 'Ext.navigation.View',

  requires: [
    'Avt.view.AircraftsList',
    'Avt.view.AircraftDetail'
  ],

  xtype: 'mainpanel',

  config: {
    items: [
       { xtype: 'aircraftlist' }
    ]
  }
});
