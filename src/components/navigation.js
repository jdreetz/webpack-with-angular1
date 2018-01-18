import app from '../common/app';

const navigation = (routerConfig) => {
  return {
    restrict: 'E',
    controller: ($scope) => $scope.registeredRoutes = routerConfig.registeredRoutes,
    template: `
      <ul>
        <li ng-repeat="route in registeredRoutes">
          <a ui-sref="{{route}}">{{ route }}</a>
        </li>
      </ul>
    `
  }
}

app.directive('navigation', navigation);