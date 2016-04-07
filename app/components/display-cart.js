import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  total: Ember.computed('shoppingCart.items.length', function() {
  var totalPrice = 0;
  var shoppingCart = this.get('shoppingCart');

  shoppingCart.items.forEach(function(item) {
    totalPrice += item.get('price');
    });
    return totalPrice;
  }),
});
