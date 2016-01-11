import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('munkaora', {path: '/munkaora'}, function() {
    this.route('new', {path: '/new'});
    this.route('edit', {path: ':itemid'});
  });
  this.route('munkaora.new');
  this.route('comment', {path: ':itemid'});
});

export default Router;
