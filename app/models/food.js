import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  isAvailable: DS.attr('boolean'),
  description: DS.attr('string'),
  imageName: DS.attr('string'),
  restaurant: DS.belongsTo(),
  course: DS.attr('string')
});
