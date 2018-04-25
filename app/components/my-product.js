import Component from '@ember/component';
import Ember from 'ember';

const {inject} = Ember;
export default Component.extend({
  store: inject.service(),
  isEdit: false,
  name: '',
  qty: 0,
  price: 0,
  actions: {
    deleteProduct(id) {
      const value = confirm('Are you sure you want delete this item');
      if (!value) {
        return;
      }
      this.get('store')
        .findRecord('product', id)
        .then(p => p.destroyRecord())
    },
    editProduct() {
      this.set('name', this.get('product.name'));
      this.set('qty', this.get('product.qty'));
      this.set('price', this.get('product.price'));
      this.set('isEdit', true);
    },
    cancel() {
      this.set('isEdit', true);
      this.set('product.name', this.get('name'));
      this.set('product.qty', this.get('qty'));
      this.set('product.price', this.get('price'));
      this.set('isEdit', false);
     },
    save(id) {
      this.get('product').save().then(() => {
        this.set('isEdit', false);
      })
    }
  }
});
