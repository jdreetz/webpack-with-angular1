import tmpl from './SubComponent.html';
import MyFactory from '../services/MyFactory';

export default class SubComponent {
  constructor($scope) {
    this.$scope = $scope;
    this.foo = `MyFactory.foo: ${MyFactory.foo}`;
    this.name = 'SubComponent';
  }

  loadData() {
    import('../data/users.json')
      .then( ({ users }) => {
        this.list = users;
        this.$scope.$apply();
      });
  }
}

export const controller = SubComponent;
export const template   = tmpl;