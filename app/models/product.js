import DS from 'ember-data';

const {attr, belongsTo, Model} = DS;

export default Model.extend({
  name: attr('string'),
  qty: attr('number'),
  price: attr('number'),
  shop: belongsTo('shop')
});
