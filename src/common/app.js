import { APP_NAME } from '../../config.json';
import { injectExporter, accessTypes, getProvide } from '../lib/angular';
import uirouter from '@uirouter/angularjs';
import angular from 'angular';

class App {
  constructor() {
    this.configured = false;
    this.name = APP_NAME;
    this.module = angular.module(APP_NAME, [uirouter]);
  }

  controller(...args) {
    this.module.controller(...args);
    return this;
  }

  factory(name, implementation) {
    if(!this.configured) {
      this.module.factory(name, implementation);
    } else {
      getProvide().factory(name, implementation);
    }
    
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

  provider(name, implementation) {
    this.module.provider(name, implementation);
    return this;
  }

  run(...args) {
    this.module.run(...args);
    return this;
  }
}

export default new App();