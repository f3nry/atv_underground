Ext.define('Avt.model.Position', {
  extend: 'Ext.data.Model',

  config: {
    fields: [
      { name: 'name', type: 'string' },
      { name: 'weight', type: 'float', defaultValue: 0.0 },
      { name: 'arm', type: 'float', defaultValue: 0.0 }
    ],

    belongsTo: 'Aircraft'
  },

  setWeight: function(weight) {
    this.data.weight = weight;
  },

  setArm: function(arm) {
    this.data.arm = arm;
  },

  getMoment: function() {
    var moment = parseFloat((this.data.weight * this.data.arm) / 1000, 10);

    if(isNaN(moment)) {
      return "0.0";
    } else {
      return moment == 0 ? "0.0" : moment;
    }
  },

  getWeight: function() {
    return this.data.weight == 0 ? "0.0" : this.data.weight;
  },

  getArm: function() {
    return this.data.arm == 0 ? "0.0" : this.data.arm;
  }
});
