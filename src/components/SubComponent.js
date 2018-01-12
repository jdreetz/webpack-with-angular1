import tmpl from './SubComponent.html';
import MyFactory from '../services/MyFactory';

export const SubComponent = class {
  constructor($scope) {
    this.$scope = $scope;
    this.$scope.name = 'SubComponent';
    this.$scope.foo = MyFactory.foo;
    this.$scope.loadData = this.loadData;
  }

  loadData() {
    import(/* webpackChunkName: "data" */ '../data/users.json')
      .then( ({ users }) => {
        this.list = users;
        this.$apply();
      });
  }
}

export const controller = SubComponent;
export const template   = tmpl;

export const routeConfig = {
  url          : '/SubComponent',
  template     : template,
  controller   : SubComponent,
  controllerAs : 'sub'
}; 