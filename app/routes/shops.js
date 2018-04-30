import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('shop');
  },
  actions: {
    openModal() {
      this.controller.toggleProperty('isShowingModal');
    },
    create() {
      const name = this.controller.get('shopName');
      if (!name) {
        this.controller.set('errorMessage', true);
        return;
      }
      const shop = this.get('store').createRecord('shop', {
        name
      });
      shop.save().then(() => {
        this.setProp();
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
    this.controller.setProperties({
      isShowingModal: false,
      shopName: '',
      errorMessage: ''
    });
  }
});
