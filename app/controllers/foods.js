import Controller from '@ember/controller';
import { set } from '@ember/object';
import { filterBy } from '@ember/object/computed';
import { alias } from '@ember/object/computed';

export default Controller.extend({
  restaurant: {name: "Sophie's Cafe", yearsOpen: 11},
  newItem: null,
  menuLength: alias('model.length'),
  availableItems: filterBy('model', 'isAvailable', true),

  actions: {
    saveNewItem(){
      this.store.createRecord('food', {
        isAvailable: false,
        imageName: '',
        description: 'No description...',
        name: this.get('newItem')
      }).save();
      this.set('newItem', '');
    }
  }
});
