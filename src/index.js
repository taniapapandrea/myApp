import ngMaterial from 'angular-material';
import 'angular-material/angular-material.css';

var angular = require('angular');

require('angular-ui-router');
var routesConfig = require('./routes');
//
// var main = require('./app/main/main.html');
// var header = require('./app/header/header.html');
// var footer = require('./app/footer/footer.html');

require('./index.less')
angular
  .module('app', [ngMaterial, 'ui.router'])
  .config(routesConfig);
  // .component('app', main)
  // .component('header', header)
  // .component('footer', footer);

//
// angular
//   .module('app', [techsModule, 'ui.router'])
