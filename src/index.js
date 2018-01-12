import app from './common/app';
import { services } from './lib/angular';

import LazyLoader from './components/LazyLoader';
import * as MyComponent from './components/MyComponent';
import * as SubComponent from './components/SubComponent';

app
  .config(function(routerConfig) {
    routerConfig
      .state('MyComponent', MyComponent.routeConfig)
      .state('MyComponent.SubComponent', SubComponent.routeConfig)
      .state('MyComponent.LazyLoad', {
        controller: LazyLoader,
        controllerAs: 'sub',
        url: '/SubComponentLazy',
        resolve: {
          module: () => import('./components/SubComponent'),
          template: () => import('./components/SubComponent.html')
        },
        templateProvider: template => template
      })
  });