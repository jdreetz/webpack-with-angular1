import app from './common/app';

class RouterConfigProvider {
  constructor($stateProvider) {
    this.registeredRoutes = [];
    this.$stateProvider = $stateProvider;
  }

  state(routeName, ...args) {
    this.registeredRoutes.push(routeName);
    this.$stateProvider.state(routeName, ...args);
    return this;
  }

  lazyState(routeName, { url, module, controllerAs }) {
    this.registeredRoutes.push(routeName);
    this.$stateProvider.state(routeName, {
      url,
      controllerAs,
      templateProvider: module => module.template,
      controllerProvider: module => module.controller,
      resolve: { module }
    });

    return this;
  }

  $get() { 
    return {
      registeredRoutes: this.registeredRoutes
    } 
  }
}

app.provider('routerConfig', RouterConfigProvider);
