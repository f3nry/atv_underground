Ext.define('Avt.component.CalculatorButton', {
  extend: 'Ext.Button',
  xtype: 'calc-button',
  requires: [ 'Avt.view.CalculatorOverlay' ],

  config: {
    flex: 1, margin: 3, text: "0", cls: 'calc-button',

    handler: function() {
      var overlay = Calculator.getInstance(this);

      overlay.show();
    }
  }
});
