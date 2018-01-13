# Purpose
This is a proof of concept project to explore and demonstrate usage of AngularJS (1.*) with Webpack and ES6(Babel). Why use AngularJS? Many legacy applications still use AngularJS. Being able to adapt a legacy project to a newer build system can help incrementally move the project to newer Javascript best practices, while still re-using much of the original implementation.

# Features
* Lazy loading UI-Router routes using `import()`
* Exposes `factory`s and `service`s through ES6 export mechanisms while still retaining AngularJS DI. Uses ES6 `Proxy`s.