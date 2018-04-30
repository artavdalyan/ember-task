import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  model(params) {
    return this.store.findRecord('shop', params.shop_id);
  },
  actions: {
    openModal() {
      this.controller.toggleProperty('isShowingModal');
    },
    async create() {
      const p = this.controller.getProperties('name', 'qty', 'price', 'model');
      const {model} = p;
      const product = this.get('store').createRecord('product', p);
      model.get('products').pushObject(product);
      await product.save();
      await  model.save();
      this.setProp();
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
    this.controller.setProperties({
      isShowingModal: false,
      errorMessage: false,
      name: '',
      qty: 0,
      price: 0,
    });
  }
});
