import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params) {
    return this.store.findRecord('shop', params.id);
  },
  actions: {
    openModal() {
      this.controller.toggleProperty('isShowingModal');
    },
    create(){
      const name = this.controller.get('name');
      const qty = this.controller.get('qty');
      const price = this.controller.get('price');
      const shop = this.controller.get('model');
      const product = this.get('store').createRecord('product', {
        name,
        qty,
        price,
        shop
      });
      shop.get('products').pushObject(product);
      product.save().then(() => {
        shop.save().then(()=> {
          this.setProp();
        });

      });
    },
    cancel() {
      this.setProp();
    }
  },
  setupController(controller, model) {
    this._super(controller, model);
    this.setProp();
  },
  setProp() {
    this.controller.set('isShowingModal', false);
    this.controller.set('errorMessage', false);
    this.controller.set('name', '');
    this.controller.set('qty', 0);
    this.controller.set('price', 0);
  }
});
