Ext.define('Avt.view.AircraftsList', {
  extend: 'Ext.List',
  xtype: 'aircraftlist',

  config: {
  	title: 'AVT Underground',
    store: 'AircraftsLocal',
    itemTpl: '{model_name}: {tail_number}',

    onItemDisclosure: true,
    onItemSelect: true,
    listeners: {
      initialize: function(cmp) {
        if(navigator.onLine) {
          Ext.Ajax.request({
            url: '/aircrafts.json',
            success: function(response) {
        	    var response_data = Ext.JSON.decode(response.responseText);

        	    if(response_data) {
                cmp.getStore().setData(response_data);
                cmp.refresh();
                cmp.getStore().sync();
        	    }
            }
          });
        }
      }
    }
  },
});
