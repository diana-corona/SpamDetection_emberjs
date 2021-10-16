import EmberRouter from '@ember/routing/router';
import config from 'spam-detection/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });

  this.route('MLPClassifier', function () {
    this.route('prediction');
  });

  this.route('kneighbor', function () {});

  this.route('decisiontree', function () {});

  this.route('randomforest', function () {});
});
