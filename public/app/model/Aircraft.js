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
      { name: 'model_name', type: 'string' }
    ],
  }
});
