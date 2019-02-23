import EmberRouter from '@ember/routing/router';
import config from './config/environment';

import { inject as service } from '@ember/service';

const Router = EmberRouter.extend({
  navbar: service(),
  location: config.locationType,
  rootURL: config.rootURL,
  didTransition() {
    this._super(...arguments);
    this.navbar.closePopupMenu();
  }
});

Router.map(function() {
  this.route('blog', function() {});
  this.route('community', function() {
    this.route('meetups', function() {
      this.route('assets');
    });
    this.route('meetups-getting-started');
  });
  this.route('ember-users');
  this.route('guidelines');
  this.route('learn', function() {
    this.route('examples');
  });
  this.route('legal');
  this.route('logos');
  this.route('releases', function() {
    this.route('release');
    this.route('beta');
    this.route('canary');
  });
  this.route('security');
  this.route('sponsors');
  this.route('team');

  this.route('mascots', function() {
    this.route('commission-sent');
    this.route('commission');
    this.route('faq');
    this.route('payment-sent');
    this.route('payment');
  });
  this.route('statusboard');
  this.route('ember-community-survey-2016');
  this.route('ember-community-survey-2017');
  this.route('ember-community-survey-2018');
});

export default Router;
