import DS from 'ember-data';

const {attr, belongsTo} = DS;

export default DS.Model.extend({
  name: attr('string'),
  qty: attr('number'),
  price: attr('number'),
  shop: belongsTo('shop')
});
