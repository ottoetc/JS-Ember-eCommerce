import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  total: Ember.computed('items.length', function() {
  var totalPrice = 0;
  var items = this.get('items');

  items.forEach(function(item) {
    totalPrice += item.get('price');
    });
    return totalPrice;
  }),

  add(item) {
      this.get('items').pushObject(item)
  }
});
