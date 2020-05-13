ember-voca
==============================================================================

[![Build Status](https://travis-ci.org/rajasegar/ember-voca.svg?branch=master)](https://travis-ci.org/rajasegar/ember-voca) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-voca/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-voca?branch=master)
[![npm](https://img.shields.io/npm/dm/ember-voca.svg)](https://www.npmjs.com/package/ember-voca)
[![npm version](http://img.shields.io/npm/v/ember-voca.svg?style=flat)](https://npmjs.org/package/ember-voca "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-voca/status.svg)](https://david-dm.org/rajasegar/ember-voca)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-voca/dev-status.svg)](https://david-dm.org/rajasegar/ember-voca?type=dev)
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
