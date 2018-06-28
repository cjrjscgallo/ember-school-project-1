import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    return Ember.RSVP.hash({
      food: this.store.findRecord('food', params.food_id),
      restaurants: this.store.findAll('restaurant')
    })
  }
});
