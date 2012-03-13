Ext.define('Avt.controller.Main', {
  extend: 'Ext.app.Controller',

  config: { 
  },

  index: function() {
    Ext.create('Ext.Panel', {
      fullscreen: true,
      items: [
        { xtype: 'toolbar', docked: 'top', title: 'AVT Underground' }
      ],
      layout: 'fit',
      styleHtmlContent: true,
      html: '<h2>Hello World!</h2>I did it!'
    });
  }
});

