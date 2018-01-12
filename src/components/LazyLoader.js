import app from '../common/app';

var LazyLoadController = ($controller, $scope, module, template) => {
  $controller(module.controller, { $scope });
};

app
  .controller('LazyLoader', LazyLoadController);

export default LazyLoadController;

