import app from './common/app';

class RouterConfigProvider {
  constructor($stateProvider) {
    this.$stateProvider = $stateProvider;
  }

  state(...args) {
    this.$stateProvider.state(...args);
    return this;
  }

  lazyState(routeName, { url, module, controllerAs }) {
    this.$stateProvider.state(routeName, {
      url,
      controllerAs,
      templateProvider: module => module.template,
      controllerProvider: module => module.controller,
      resolve: { module }
    });

    return this;
  }

  $get() { return {} }
}

app.provider('routerConfig', RouterConfigProvider);
