import { APP_NAME } from '../../config.json';
import angular from 'angular';

let injector, $provide;

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

export const setInjector = i => { injector = i }
export const setProvide  = p => { $provide = p }

export const currentInjector = () => {
  return injector;
};

export const getProvide = () => $provide;

function getInjector(moduleName) {
  return new Proxy({}, {
    get(target, name) {
      let m;

      try {
        m = currentInjector().get(moduleName)[name];
      } catch(e) {
        console.log(e);
      }

      return m
    }
  });
}