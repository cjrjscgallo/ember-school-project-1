import Controller from '@ember/controller';

export default Controller.extend({
  foods: [
    {name: 'Tacos', isAvailable: true},
    {name: 'Pizza', isAvailable: true},
    {name: 'Salad', isAvailable: false},
    {name: 'Vegetables', isAvailable: true},
    {name: 'Fruit', isAvailable: false}
  ],
  restaurant: {name: 'Our Awesome Restaurant', yearsOpen: 1}
});
