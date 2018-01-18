import angular from 'angular';

import app from './common/app';
import * as MyComponent from './components/MyComponent';
import * as SubComponent from './components/SubComponent.routeConfig';
import * as JSXComponent from './components/JSXComponent.routeConfig';
import './appearance/index.css';
import './routerConfig';
import './components/navigation';

app
  .config(($provide, routerConfigProvider) => {
    app.provide = $provide;

    routerConfigProvider
      .state('MyComponent', MyComponent.routeConfig)
      .lazyState('MyComponent.SubComponent', SubComponent.routeConfig)
      .lazyState('MyComponent.JSXComponent', JSXComponent.routeConfig);
  })
  .config($sceProvider => {
    $sceProvider.enabled(false);
  })
  .run((...args) => {
    app.configured = true;
  });

app.injector = angular.bootstrap(document.getElementById('app-root'), [app.name]);
