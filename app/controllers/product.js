import Controller from '@ember/controller';
import { computed } from '@ember/object';
export default Controller.extend({
  totalPrice: computed('model.products.@each.qty','model.products.@each.price', function () {
    return this.get('model.products').reduce((sum , p)=>{
        return sum + p.get('qty')*p.get('price')
    },0) || 0;
  })
});
