import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    destroyItem(food) {
      food.destroyRecord();
      this.transitionToRoute('foods');
    }
  }
});
