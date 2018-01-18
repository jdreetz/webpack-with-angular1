import ListDisplay from '../services/ListDisplay';

export default class JSXComponent {
  constructor($scope) {
    this.$scope = $scope;
    this.name = 'JSXComponent';
    this.ListDisplay = ListDisplay;
  }

  loadData() {
    import('../data/users.json')
      .then( ({ users }) => {
        this.list = users;
        this.$scope.$apply();
      });
  }
}

export const controller = JSXComponent;
export const template   = `
  <div>
    <h2>{{ sub.name }}</h2>
    <h3>{{ sub.foo }}</h3>
    <button ng-click="sub.loadData()">Load Something</button>
    {{ sub.ListDisplay.renderList(sub.list, 'name') }}
  </div>
`;