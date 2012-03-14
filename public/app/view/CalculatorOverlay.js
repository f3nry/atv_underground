Ext.define('Calculator', {
  statics: {
   expression: "",
   element: null,
   _instance: null,

   set_value: function(value) {
      var element = Calculator.getCalcDisplay();

      var value = Ext.isNumeric(value) || value == "." ? value : this._text
      
      if(parseFloat(element.value) == "0") {
        element.value = "";
      }

      if(value == ".") {
        if(element.value.indexOf(".") == -1) {
        	element.value += ".";
        }
      } else {
        element.value += parseFloat(Ext.isNumeric(value) ? value : this._text, 10);
      }
    },

    clear_value: function() {
      var element = Calculator.getCalcDisplay();
      element.value = "0.0";
    },

    push_op: function() {
    	var element = Calculator.getCalcDisplay();

      Calculator.expression += element.value + this._text;

      Calculator.clear_value();
    },

    calc: function() {
    	var element = Calculator.getCalcDisplay();
      Calculator.expression += element.value;

      element.value = parseFloat(eval(Calculator.expression), 10);

      Calculator.expression = "";
    },

    getCalcDisplay: function() {
      var element = Ext.select(".calc-display input").elements;
      element = element[element.length - 1];

      return element;
    },

    getInstance: function(element) {
      if(this._instance == null) {
        this._instance = new Avt.view.CalculatorOverlay();
        this._instance = Ext.Viewport.add(this._instance.config);
      }

      if(element != null) {
        this.element = element;
        Calculator.getCalcDisplay().value = element.textElement.dom.innerText;
      }

      return this._instance;
    }
  }
});

Ext.define('Avt.view.CalculatorOverlay', {
  config: {
    xtype: 'panel',
    modal: true,
    hideOnMaskTap: true,

    showAnimation: {
      type: 'popIn',
      duration: 250,
      easing: 'ease-out'
    },
    hideAnimation: {
      type: 'popOut',
      duration: 250,
      easing: 'ease-out'
    },

    centered: true,
    width: Ext.os.deviceType == "Phone" ? "100%" : 400,
    height: Ext.os.deviceType == "Phone" ? "100%": 400,
    styleHtmlContent: true,

    defaults: {
      layout: {
        type: 'hbox',
        align: 'right'
      },
    },
    items: [
      {
        docked: 'top',
        xtype: 'toolbar',
        title: 'Calculator',
        defaults: { direction: 'horizontal' },
        items: [
          { text: 'Close', right: 0, width: "25%", margin: "7 0 0 0", handler: function() { Calculator.getInstance().hide() } }
        ]
      },

      { 
        xtype: 'fieldset',
        items: [
          { xtype: 'textfield', readOnly: true, value: "0.0", cls: 'right-align calc-display' }
        ]
      },

      {
        defaults: {
          ui: 'decline',
          margin: "0 5 5 5",
          flex: 1,
          width: "30%"
        },
        items: [
          { xtype: 'button', text: "C", handler: Calculator.clear_value },
          { xtype: 'button', text: "/", handler: Calculator.push_op },
          { xtype: 'button', text: "*", handler: Calculator.push_op }
        ]
      },

      {
        defaults: {
          margin: "0 5 5 5",
          flex: 1,
          width: "21.8%"
        },
        items: [
          { xtype: 'button', text: "7", handler: Calculator.set_value },
          { xtype: 'button', text: "8", handler: Calculator.set_value },
          { xtype: 'button', text: "9", handler: Calculator.set_value },
          { xtype: 'button', text: "-", ui: 'decline', handler: Calculator.push_op }
        ]
      },
      
      {
        defaults: {
          margin: "0 5 5 5",
          flex: 1,
          width: "21.8%"
        },
        items: [
          { xtype: 'button', text: "4", handler: Calculator.set_value },
          { xtype: 'button', text: "5", handler: Calculator.set_value },
          { xtype: 'button', text: "6", handler: Calculator.set_value },
          { xtype: 'button', text: "+", ui: 'decline', handler: Calculator.push_op }
        ]
      },

      {
        defaults: {
          margin: "0 5 5 5",
          flex: 1,
          width: "21.8%"
        },
        items: [
          { xtype: 'button', text: "1", handler: Calculator.set_value },
          { xtype: 'button', text: "2", handler: Calculator.set_value },
          { xtype: 'button', text: "3", handler: Calculator.set_value },
          { xtype: 'button', text: "=", ui: 'confirm', handler: Calculator.calc }
        ]
      },

      {
        defaults: {
          margin: "0 5 5 5",
          flex: 1,
          width: "21.8%"
        },
        items: [
          { xtype: 'button', text: "0", handler: Calculator.set_value },
          { xtype: 'button', text: ".", handler: Calculator.set_value },
          { xtype: 'button', text: "Save", width: "46.8%", handler: function() {
            var element = Calculator.getCalcDisplay();

      	    Calculator.element.textElement.dom.innerText = element.value;
      	    Calculator.getInstance().hide();
          }}
        ]
      }
    ],
    scrollable: true
  }
});
