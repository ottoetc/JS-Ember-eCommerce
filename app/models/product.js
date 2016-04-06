import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    price: DS.attr(),
    description: DS.attr(),
    image: DS.attr(),
    category: DS.attr(),
    stock: DS.attr()

});
