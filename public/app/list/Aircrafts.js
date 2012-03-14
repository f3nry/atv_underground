Ext.create('Avt.list.Aircrafts', {
  extend: 'Ext.List',

  xtype: 'aircrafts_list',

  store: {
    fields: [ 'tail_number' ],
    data: [
      { tail_number: 'N67JA' },
      { tail_number: 'N6153Z' }
    ]
  },

  itemTpl: '{tail_number}',

  listeners: {
    select: function(view, record) {
      Ext.Msg.alert('Selected!', 'You selected ' + record.get('tail_number'));
    }
  },
});
