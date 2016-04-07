import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  // var totalCost = 0,

    add(item) {
      this.get('items').pushObject(item)
  }
});
