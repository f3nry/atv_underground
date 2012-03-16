Ext.define('Avt.view.AircraftDetail', {
  extend: 'Ext.Panel',
  xtype: 'aircraftdetail',
  requires: [ 'Avt.component.CalculatorButton' ],

  config: {
    styleHtmlContent: true,
    scrollable: 'vertical',
    title: 'Details',
    cls: 'aircraft-detail',

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
      }
    ],

    listeners: {
      initialize: function(component) {
        var record = component.config.record;

        var details = [];

        details.push({
          items: [
            { html: 'Aircraft:', cls: 'calc-label calc-body-field' },
            { xtype: 'calc-button', text: record.getWeight(), disabled: true },
            { xtype: 'calc-button', text: record.getCg(), disabled: true },
            { xtype: 'calc-button', text: record.getMoment(), disabled: true }
          ]
        });

        var zero_fuel_weight_id = Ext.id();
        var update_zero_fuel_weight = function() {
          Ext.getCmp(zero_fuel_weight_id).setText(record.getZeroFuelWeight());
        };

        var zero_fuel_arm_id = Ext.id();
        var update_zero_fuel_arm = function() {
          Ext.getCmp(zero_fuel_arm_id).setText(record.getZeroFuelArm());
        };

        var zero_fuel_moment_id = Ext.id();
        var update_zero_fuel_moment = function() {
          Ext.getCmp(zero_fuel_moment_id).setText(record.getZeroFuelMoment());
        }
        
        var total_weight_id = Ext.id();
        var total_arm_id = Ext.id();
        var total_moment_id = Ext.id();
        
        var graph_id = Ext.id();
        var graph_data = record.getGraphData();

        var store = new Ext.create('Ext.data.Store', {
            fields: [ 'weight', 'arm1', 'arm2' ],
            data: graph_data.graph_data
          });

        var update_total = function() {
          var total_weight = record.getTotalWeight();
          var arm = record.getCumulativeArm();

          Ext.getCmp(total_weight_id).setText(total_weight);
          Ext.getCmp(total_arm_id).setText(arm);
          Ext.getCmp(total_moment_id).setText(record.getCumulativeMoment());

          store.setData(record.getGraphData().graph_data);
          Ext.getCmp(graph_id).redraw();
        }

        record.positions().each(function(position) {
          var arm_id = Ext.id();

          var update_moment = function() {
            var cmp = Ext.getCmp(arm_id);

            cmp.setText(position.getMoment());
          };

          details.push({
            items: [
              { html: position.data.name + ":", cls: 'calc-label calc-body-field' },
              { xtype: 'calc-button', text: position.getWeight(), listeners: { textchange: function(element, value) { position.setWeight(value); update_moment(); update_zero_fuel_weight(); update_zero_fuel_arm(); update_total(); } } },
              { xtype: 'calc-button', text: position.getArm(), listeners: { textchange: function(element, value) { position.setArm(value); update_moment(); update_zero_fuel_arm(); update_zero_fuel_moment(); update_total(); } } },
              { xtype: 'calc-button', text: position.getMoment(), disabled: true, id: arm_id }
            ]
          });
        });

        details.push({
          items: [
            { html: 'Total (Zero Fuel):', cls: 'calc-label calc-body-field' },
            { xtype: 'calc-button', text: record.getZeroFuelWeight(), disabled: true, id: zero_fuel_weight_id },
            { xtype: 'calc-button', text: record.getZeroFuelArm(), disabled: true, id: zero_fuel_arm_id },
            { xtype: 'calc-button', text: record.getZeroFuelMoment(), disabled: true, id: zero_fuel_moment_id }
          ]
        });

        var fuel_moment_id = Ext.id();
        var update_fuel_moment = function() {
          Ext.getCmp(fuel_moment_id).setText(record.getFuelMoment());
        }

        details.push({
          items: [
            { html: 'Fuel:', cls: 'calc-label calc-body-field' },
            { xtype: 'calc-button', text: record.getFuelWeight(), listeners: { textchange: function(element, value) { record.setFuelWeight(value); update_fuel_moment(); update_total(); } } },
            { xtype: 'calc-button', text: record.getFuelArm(), listeners: { textchange: function(element, value) { record.setFuelArm(value); update_fuel_moment(); update_total(); } } },
            { xtype: 'calc-button', text: record.getFuelMoment(), disabled: true, id: fuel_moment_id }
          ]
        });

        details.push({
          items: [
            { html: 'Total:', cls: 'calc-label calc-body-field calc-bold' },
            { xtype: 'calc-button', text: record.getTotalWeight(), disabled: true, id: total_weight_id },
            { xtype: 'calc-button', text: record.getCumulativeArm(), disabled: true, id: total_arm_id },
            { xtype: 'calc-button', text: record.getCumulativeMoment(), disabled: true, id: total_moment_id }
          ]
        });

        console.log(store);

        Ext.defer(function() { 
          component.add({
        	  items: [{
            xtype: 'chart',
            id: graph_id,

            width: "100%",
            height: 200,
            animate: false,
            store: store,

            axes: [
              {
                type: 'Numeric',
                position: 'left',
                fields: ['weight'],
                title: 'Weight',
                minorTickSteps: 100,
                roundToDecimal: true,
                decimals: 0,
                minimum: graph_data.min_weight - 100,
                maximum: graph_data.max_weight + 100
              },
              { 
                type: 'Numeric',
                position: 'bottom',
                fields: [ 'arm1', 'arm2' ],
                title: 'Arm',
                minorTickSteps: 1,
                roundToDecimal: true,
                decimals: 2,
                minimum: graph_data.min_arm1 - 1,
                maximum: graph_data.max_arm1 + 1
              }
            ],
            series: [ 
              {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                fill: true,
                smooth: true,
                axis: 'left',
                xField: 'arm1',
                yField: 'weight',
                title: 'Limits'
              },
              {
                type: 'line',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                xField: 'arm2',
                yField: 'weight',
                title: 'Current'
              }
            ]}]
          });
        }, 200);

        component.add(details);
      }
    }
  }

});
