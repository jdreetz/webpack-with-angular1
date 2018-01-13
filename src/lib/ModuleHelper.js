export default class ModuleHelper {
  constructor() {
    this.provide  = undefined;
    this.injector = undefined;
  }

  export(moduleName) {
    return this.getInjector(moduleName);
  }

  getInjector(moduleName) {
    const self = this;

    return new Proxy({}, {
      get(target, name) {
        if(self.injector) {
          return self.injector.get(moduleName)[name];
        } else {
          throw 'injector not set';
        }
      }
    })
  }
}