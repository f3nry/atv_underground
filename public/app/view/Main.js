Ext.define('Avt.view.Main', {
  extend: 'Ext.Panel',

  config: {
  	items: [
      { xtype: 'toolbar', docked: 'top', title: 'AVT Underground' }
    ],
    layout: 'fit',
    styleHtmlContent: true,
    html: '<h2>Hello World!</h2>I did it!'
  }
});
