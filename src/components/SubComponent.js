import tmpl from './SubComponent.html';
import MyFactory from '../services/MyFactory';

export default class SubComponent {
  constructor($scope) {
    this.$scope = $scope;
    this.foo = `${MyFactory.foo} buzz`;
    this.name = 'SubComponent';
  }

  loadData() {
    import(/* webpackChunkName: "data" */ '../data/users.json')
      .then( ({ users }) => {
        this.list = users;
        this.$scope.$apply();
      });
  }
}

export const controller = SubComponent;
export const template   = tmpl;

export const routeConfig = {
  url          : '/SubComponent',
  template     : template,
  controller   : SubComponent,
  controllerAs : 'sub',
  filename     : `${__filename}`
};