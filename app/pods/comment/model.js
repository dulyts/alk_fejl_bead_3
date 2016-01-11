import DS from 'ember-data';

export default DS.Model.extend({
  szoveg: DS.attr('string'),
  worktime: DS.belongsTo('worktime', { async: false , inverse: 'comments' })
});
