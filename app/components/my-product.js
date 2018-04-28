import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  tagName:'',
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
      const product = this.get('store')
        .peekRecord('product', id);
      if(product){
        product.destroyRecord();
      }
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
    save() {
      this.get('product').save().then(() => {
        this.set('isEdit', false);
      })
    }
  }
});
