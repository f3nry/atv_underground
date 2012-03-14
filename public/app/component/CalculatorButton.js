Ext.define('Avt.component.CalculatorButton', {
  extend: 'Ext.Button',
  xtype: 'calc-button',
  requires: [ 'Avt.view.CalculatorOverlay' ],

  config: {
    flex: 1, margin: 5, text: "0",

    handler: function() {
      var self = this;
      var expression = "";

      
      if(!this.overlay) {
        this.overlay = Calculator.getInstance(this);
      }

      this.overlay.show();
    }
  }
});
