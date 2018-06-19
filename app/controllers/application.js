import Ember from 'ember';
import Controller from '@ember/controller';
import ENV from '../config/environment';

Ember.Controller.reopen({
  rootURL: ENV.rootURL,
  imageRootURL: ENV.imageRootURL
});

Ember.Component.reopen({
  rootURL: ENV.rootURL,
  imageRootURL: ENV.imageRootURL
});

export default Controller.extend({
});
