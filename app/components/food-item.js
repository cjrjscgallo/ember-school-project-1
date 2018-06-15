import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  isOpen: false,
  actions: {
    toggleAvailability(food) {
      food.toggleProperty('isAvailable');
      food.save();
    },
    toggleOpen() {
      this.set('isOpen', !this.get('isOpen'))
    }
  }
});
