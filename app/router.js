import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('product-page', {path: '/product-page/:product_id'});
  this.route('cart-page');
});

export default Router;
