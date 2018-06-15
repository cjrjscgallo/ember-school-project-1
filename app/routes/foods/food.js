import Route from '@ember/routing/route';

export default Route.extend({
  //same as the default route
  model(params) {
    return this.store.findRecord('food', params.food_id);
  }
});
