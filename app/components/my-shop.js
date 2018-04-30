import Component from '@ember/component';
import {inject as service} from '@ember/service';

export default Component.extend({
  store: service(),
  isEdit: true,
  errorMessage: false,
  name: '',
  actions: {
    async deleteShop(id) {
      const value = confirm('Are you sure you want delete this item');
      if (!value) {
        return;
      }
      const shop = this.get('store')
        .peekRecord('shop', id);
      if (shop) {
        await Promise.all(shop.get('products')
          .map(p => p.destroyRecord()));
        shop.destroyRecord();
      }
    },
    editShop() {
      this.set('name', this.get('shop.name'));
      this.set('isEdit', false);
    },
    cancel() {
      this.setProperties({
        isEdit: true,
        errorMessage: false,
        'shop.name': this.get('name'),
         name: '',
      });
    },
    async save(id) {
      const name = this.get('shop.name');
      if (!name) {
        this.set('errorMessage', true);
        return;
      }
      const shop = this.get('store').peekRecord('shop', id);
      if (shop) {
        await shop.save();
        this.send('cancel');
        this.set('shop.name', name);
      }
    }
  }
});
