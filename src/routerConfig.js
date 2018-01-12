import app from './common/app';

app.provider('routerConfigProvider', () => {
  $get($stateProvider) {
    return: {
      $state: (...args) => $stateProvider.$state(...args);
    }
  }
};
