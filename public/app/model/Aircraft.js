Ext.define('Avt.model.Aircraft', {
  extend: 'Ext.data.Model',

  config: {
    fields: [ 
      { name: 'tail_number', type: 'string' }, 
      { name: 'bow', type: 'float' }, 
      { name: 'moment', type: 'float' }, 
      { name: 'created_at', type: 'string' }, 
      { name: 'updated_at', type: 'string' },
      { name: 'cg', type: 'float' },
      { name: 'id', type: 'int' },
      { name: 'model_id', type: 'int' },
      { name: 'model_name', type: 'string' },
      { name: 'fuel_weight', type: 'float', defaultValue: 0.0 },
      { name: 'fuel_arm', type: 'float', defaultValue: 0.0 }
    ],

    hasMany: [
      { model: 'Avt.model.Position', name: 'positions' },
      { model: 'Avt.model.CgEntry', name: 'cg_entries' }
    ]
  },

  getWeight: function() {
    return this.data.bow;
  },

  getCg: function() {
    return this.data.cg;
  },

  getMoment: function() {
    var moment = parseFloat((this.data.bow * this.data.cg) / 1000, 10);

    if(isNaN(moment)) {
      return "0.0";
    } else {
      return moment == 0 ? "0.0" : moment;
    }
  },

  getZeroFuelWeight: function() {
    var start_weight = parseFloat(this.getWeight(), 10);

    this.positions().each(function(position) {
      start_weight += parseFloat(position.getWeight(), 10);
    });

    return start_weight;
  },

  getZeroFuelArm: function() {
    return (this.getZeroFuelMoment() * 1000) / this.getZeroFuelWeight();
  },

  getZeroFuelMoment: function() {
    var start_moment = parseFloat(this.getMoment(), 10);

    this.positions().each(function(position) {
      start_moment += parseFloat(position.getMoment(), 10);
    });

    return start_moment;
  },

  getFuelWeight: function() {
    return this.data.fuel_weight == 0 ? "0.0" : this.data.fuel_weight;
  },

  setFuelWeight: function(value) {
    this.data.fuel_weight = value;
  },

  getFuelArm: function() {
    return this.data.fuel_arm == 0 ? "0.0" : this.data.fuel_arm;
  },

  setFuelArm: function(value) {
    this.data.fuel_arm = value;
  },

  getFuelMoment: function() {
    var moment = parseFloat((this.data.fuel_weight * this.data.fuel_arm) / 1000, 10);

    if(isNaN(moment)) {
      return "0.0";
    } else {
      return moment == 0 ? "0.0" : moment;
    } 
  },

  getTotalWeight: function() {
    return parseFloat(this.getZeroFuelWeight(), 10) + parseFloat(this.getFuelWeight(), 10);
  },

  getCumulativeArm: function() {
    return (this.getCumulativeMoment() * 1000) / this.getTotalWeight();
  },

  getCumulativeMoment: function() {
    var zero_fuel_moment = this.getZeroFuelMoment();

    return parseFloat(zero_fuel_moment, 10) + parseFloat(this.getFuelMoment(), 10);
  },

  getGraphData: function() {
    var data = [];

    this.cg_entries().each(function(entry) {
      data.push({ weight: entry.data.weight, arm1: entry.data.arm });
    });

    console.log(data);

    return data;
  }
});
