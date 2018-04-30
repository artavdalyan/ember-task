import DS from 'ember-data';
import { computed } from '@ember/object';

const {attr, hasMany, Model} = DS;

export default Model.extend({
  name: attr('string'),
  products: hasMany('product'),
  totalPrice: computed('products.@each.qty','products.@each.price', function () {
    return this.get('products').reduce((sum , p)=>{
      return sum + p.get('qty')*p.get('price')
    },0) ;
  })
});
