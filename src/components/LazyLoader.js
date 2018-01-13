import app from '../common/app';

var LazyLoadController = ($controller, $scope, module) => {
  $controller(module.controller, { $scope });
};

app.controller('LazyLoader', LazyLoadController);

export default LazyLoadController;

