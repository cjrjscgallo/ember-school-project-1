import Controller from '@ember/controller';
import { set } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1},
  newItem: null,
  menuLength: alias('model.length'),
  availableItems: filterBy('model', 'isAvailable', true),

  actions: {
    makeUnavailable(food) {
      set(food, 'isAvailable', false);
      food.save();
    },
    makeAvailable(food) {
      set(food, 'isAvailable', true);
      food.save();
    },
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    },
    destroyItem(food) {
      food.destroyRecord();
    }
  }
});
