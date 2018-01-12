import { APP_NAME } from '../../config.json';
import angular from 'angular';

export const services = new Proxy({}, {
  get(target, name) {
    return currentInjector().get(name);
  }
});

export const injectExporter = (moduleName, type) => {
  if(type === accessTypes.OBJ) {
    return getInjector(moduleName);
  } else if(type === accessTypes.FN) {

  }
};

export const accessTypes = {
  FN: 'fn',
  OBJ: 'obj'
};

export const currentInjector = () => {
  return angular.element(document.getElementById('app-root')).injector();
};

function getInjector(moduleName) {
  return new Proxy({}, {
    get(target, name) {
      return currentInjector().get(moduleName)[name];
    }
  });
}