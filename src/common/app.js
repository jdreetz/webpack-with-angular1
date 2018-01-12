import { APP_NAME } from '../../config.json';
import { injectExporter, accessTypes } from '../lib/angular';
import angular from 'angular';

class App {
  constructor() {
    this.module = angular.module(APP_NAME, ['ui.router']);
  }

  controller(...args) {
    this.module.controller(...args);
    return this;
  }

  factory(name, implementation) {
    this.module.factory(name, implementation);
    return injectExporter(name, accessTypes.OBJ);
  }

  config(...args) {
    this.module.config(...args);
    return this;
  }

  directive(...args) {
    this.module.directive(...args);
    return this;
  }

  provider(...args) {
    this.module.provider(...args);
    return this;
  }
}

export default new App();