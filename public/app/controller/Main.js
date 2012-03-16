Ext.define('Avt.controller.Main', {
  extend: 'Ext.app.Controller',

  config: { 
    refs: {
      main: 'mainpanel'	
    },
    control: {
      'aircraftlist': {
          disclose: 'showDetail',
          select: 'showDetail'
      }
    }
  },

  aircraft_details: {},

  getDetail: function(record) {
    return this.aircraft_details[record.data.id];
  },

  showDetail: function(list, record) {
    var detail = this.getDetail(record);

    this.getMain().push({
      xtype: 'aircraftdetail',
      title: record.data.tail_number,
      data: record.raw,
      record: record
    });
  }
});

