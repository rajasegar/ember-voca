ember-voca
==============================================================================

![Build and Deploy](https://github.com/rajasegar/ember-voca/workflows/Build%20and%20Deploy/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-voca/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-voca?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![npm version](http://img.shields.io/npm/v/ember-voca.svg?style=flat)](https://npmjs.org/package/ember-voca "View this project on npm")
[![EmberObserver](http://emberobserver.com/badges/ember-voca.svg?branch=master)](http://emberobserver.com/addons/ember-voca)

Ember Template helpers based on [voca.js](https://vocajs.com/)


Installation
------------------------------------------------------------------------------

```
ember install ember-voca
```


Usage
------------------------------------------------------------------------------

```hbs
{{voca-capitalize "hello world"}}
\\ => Hello World
```

```hbs
{{voca-camel-case "hello world"}}
\\ => helloWorld
```

```hbs
{{ voca-decapitalize "Hello World"}}
\\ => hello world
```

View the complete documentation [here](https://rajasegar.github.io/ember-voca)

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
