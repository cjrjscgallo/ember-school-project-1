'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-school-project-1',
    environment,
    rootURL: '/',
    imageRootURL: '/public/ember-school-project-1/',
    locationType: 'hash',
    firebase: {
      apiKey: "AIzaSyBtqWEmmK82LtoUKzWrfU7DDA0EGF9SfU4",
      authDomain: "menu-tracker-2ba64.firebaseapp.com",
      databaseURL: "https://menu-tracker-2ba64.firebaseio.com",
      projectId: "menu-tracker-2ba64",
      storageBucket: "menu-tracker-2ba64.appspot.com",
      messagingSenderId: "17772009850"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
