import angular from 'angular';

import app from './common/app';
import * as MyComponent from './components/MyComponent';
import './appearance/index.css';
import './routerConfig';

app
  .config(($provide, routerConfigProvider) => {
    app.provide = $provide;

    routerConfigProvider
      .state('MyComponent', MyComponent.routeConfig)
      .lazyState('MyComponent.SubComponent', {
        module: () => import('./components/SubComponent'),
        url: '/SubComponent',
        controllerAs: 'sub'
      });
  })
  .run((...args) => {
    app.configured = true;
  });

app.injector = angular.bootstrap(document.getElementById('app-root'), [app.name]);
