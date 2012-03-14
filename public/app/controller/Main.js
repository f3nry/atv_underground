Ext.define('Avt.controller.Main', {
  extend: 'Ext.app.Controller',

  config: { 
    refs: {
      main: 'mainpanel'	
    },
    control: {
      'aircraftlist': {
          disclose: 'showDetail'
      }
    }
  },

  showDetail: function(list, record) {
    this.getMain().push({
      xtype: 'aircraftdetail',
      title: record.data.tail_number,
      data: record.data
    });
  }
});

