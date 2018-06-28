import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
      save() {
        this.get('model.food').save();
        this.transitionToRoute('foods.food', this.get('model.food.id'));
      },
      selectRestaurant(selection, component){
        let food = this.get('model.food');
        food.get('restaurant').then((restaurant)=>{
          food.set('restaurant', selection);
          selection.save();
          restaurant.save();
        })
      }
    }
});
