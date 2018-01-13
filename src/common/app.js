import { APP_NAME } from '../../config.json';
import ModuleHelper from '../lib/ModuleHelper';
import uirouter from '@uirouter/angularjs';
import angular from 'angular';

class App extends ModuleHelper {
  constructor() {
    super();
    this.configured = false;
    this.name = APP_NAME;
    this.angularModule = angular.module(APP_NAME, [uirouter]);
    this.exposeComputedProperties(this);
  }

  run(...args)        { return this.passthru('run', ...args)        }
  config(...args)     { return this.passthru('config', ...args)     }
  provider(...args)   { return this.passthru('provider', ...args)   }
  directive(...args)  { return this.passthru('directive', ...args)  }
  controller(...args) { return this.passthru('controller', ...args) }

  factory(name, implementation) {
    return this.exportPassThru('factory', name, implementation);
  }

  service(name, implementation) {
    return this.exportPassThru('service', name, implementation);
  }

  passthru(service, ...args) {
    this.module[service](...args);
    return this;
  }

  exportPassThru(service, ...args) {
    this.passthru(service, ...args);
    return this.export(...args);
  }

  exposeComputedProperties(instance) {
    const module = {
      get() {
        if(!instance.configured) {
          return instance.angularModule;
        } else if(instance.provide) {
          return instance.provide;
        } else {
          throw 'module or provide not available';
        }
      }
    };

    Object.defineProperties(instance, { module });
  }
}

export default new App();