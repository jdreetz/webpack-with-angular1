import template from './MyComponent.html';

export const MyComponent = class {
  constructor($q) {
    this.name = 'MyComponent';
  }
}

export const routeConfig = {
  url          : '/MyComponent',
  template     : template,
  controller   : MyComponent,
  controllerAs : 'vm'
}; 