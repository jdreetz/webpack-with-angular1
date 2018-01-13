import template from './MyComponent.html';

export const MyComponent = class {
  constructor($q) {
    this.name = 'Component';
  }
}

export const routeConfig = {
  url          : '/MyComponent',
  template     : template,
  controller   : MyComponent,
  controllerAs : 'vm'
}; 