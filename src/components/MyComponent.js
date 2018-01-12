import template from './MyComponent.html';
import { services } from '../lib/angular';

export const MyComponent = class {
  constructor($q) {
    this.name = 'Foobar';
  }
}

export const routeConfig = {
  url          : '/MyComponent',
  template     : template,
  controller   : MyComponent,
  controllerAs : 'vm'
}; 