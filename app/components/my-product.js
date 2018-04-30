import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  tagName: '',
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
      if (product) {
        product.destroyRecord();
      }
    },
    editProduct() {
      this.setProperties({
        name: this.get('product.name'),
        qty: this.get('product.qty'),
        price: this.get('product.price'),
        isEdit: true
      });
    },
    cancel() {
      this.setProperties({
        'product.name': this.get('name'),
        'product.qty': this.get('qty'),
        'product.price': this.get('price'),
        isEdit: false
      });
    },
    save() {
      this.get('product').save().then(() => {
        this.set('isEdit', false);
      })
    }
  }
});
