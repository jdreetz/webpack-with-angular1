import app from './common/app';
import angular from 'angular';
import { setInjector, setProvide } from './lib/angular';

import LazyLoader from './components/LazyLoader';
import * as MyComponent from './components/MyComponent';

import './routerConfig';

setTimeout(() => {
  app
    .config(($provide, routerConfigProvider) => {
      setProvide($provide);

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

  const injector = angular.bootstrap(document.getElementById('app-root'), [app.name]);
  setInjector(injector);
}, 0);
