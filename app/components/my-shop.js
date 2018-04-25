import Component from '@ember/component';
import Ember from 'ember';

const {inject} = Ember;
export default Component.extend({
  store: inject.service(),
  isEdit: true,
  errorMessage: false,
  name: '',
  actions: {
    deleteShop(id) {
      const value = confirm('Are you sure you want delete this item')
      if (!value) {
        return;
      }
      this.get('store')
        .findRecord('shop', id)
        .then(shop => shop.destroyRecord())
    },
    editShop(shop) {
      this.set('name', this.get('shop.name'));
      this.set('isEdit', false);
    },
    cancel() {
      this.set('isEdit', true);
      this.set('shop.name', this.get('name'));
      this.set('errorMessage', false);
      this.set('name', '');
    },
    save(id) {
      const name = this.get('shop.name');
      if (!name) {
        this.set('errorMessage', true);
        return;
      }
      this.get('store').findRecord('shop', id).then(shop => {
        shop.set('name', this.get('shop.name'));
        shop.save().then(() => {
          this.set('isEdit', true);
          this.set('errorMessage', false);
          this.set('name', '');
        });

      });
    }
  }
});
