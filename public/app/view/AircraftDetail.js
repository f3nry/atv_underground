Ext.define('Avt.view.AircraftDetail', {
  extend: 'Ext.Panel',
  xtype: 'aircraftdetail',
  requires: [ 'Avt.component.CalculatorButton' ],

  config: {
    styleHtmlContent: true,
    scrollable: 'vertical',
    title: 'Details',

    defaults: {
      layout: {
        type: 'hbox',
        align: 'middle'
      }
    },
    
    items: [
      { title: "W/B Calculator", html: '<h5>W/B Calculator</h5>' },
      { 
      	items: [
          { html: 'Seat', cls: 'calc-label calc-head' },
          { html: 'Weight', cls: 'calc-head' },
          { html: 'Arm', cls: 'calc-head' },
          { html: 'Moment', cls: 'calc-head' }
        ]
      },
      {
        items: [
          { html: 'Front Seat:', cls: 'calc-label' },
          { xtype: 'calc-button' },
          { xtype: 'calc-button' },
          { xtype: 'calc-button', disabled: true }
        ]
      },

      {
        items: [
          { html: 'Mid Seat:', cls: 'calc-label' },
          { xtype: 'calc-button' },
          { xtype: 'calc-button' },
          { xtype: 'calc-button', disabled: true }
        ]
      }
    ]
  }
});
