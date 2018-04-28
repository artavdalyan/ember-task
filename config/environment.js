'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'ember-task',
    environment,
    rootURL: '/',
    locationType: 'hash',
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
    ENV.firebase = {
      apiKey: "AIzaSyCpk24nQ2rM8nqda1gnA57qiRk5XvPt1tY",
      authDomain: "project1-d1699.firebaseapp.com",
      databaseURL: "https://project1-d1699.firebaseio.com",
      storageBucket: "project1-d1699.appspot.com",
    }
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
    ENV.locationType = 'hash';
    //ENV.rootURL = '/ember-task/';
    ENV.firebase = {
      apiKey: 'AIzaSyB2GHn3xFk_O0TJLe8relY1lzuU6BCdwqg',
      authDomain: 'spring-builder.firebaseapp.com',
      databaseURL: 'https://spring-builder.firebaseio.com',
      storageBucket: 'spring-builder.appspot.com',
    }
    // here you can enable a production-specific feature
  }

  return ENV;
};
