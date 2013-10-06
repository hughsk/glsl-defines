# glsl-defines [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Takes an object or array of variable names/values and gives you back a list of `#define` statements you can drop into GLSL.

## Usage ##

[![glsl-defines](https://nodei.co/npm/glsl-defines.png?mini=true)](https://nodei.co/npm/glsl-defines)

### `require('glsl-defines')(object) ###

Pass in an object with one or more values: each key will be mapped to a
variable name. If the value is `undefined` or `null`, the resulting `#define`
will not have a value set. Strings are not formatted in any way, numbers
and booleans work too.

``` javascript
require('glsl-defines')({
    USE_LIGHTING: true
  , USE_BLOOM: null
  , LIGHT_COUNT: 3
})

// output:
// #define USE_LIGHTING true
// #define USE_BLOOM
// #define LIGHT_COUNT 3
//
```

### `require('glsl-defines')(array)` ###

You can also pass a list of variable names to `glsl-defines` to get a list of
`#define`s without values.

``` javascript
require('glsl-defines')([
    'USE_LIGHTING'
  , 'USE_BLOOM'
  , 'USE_GRAIN'
])

// output:
// #define USE_LIGHTING
// #define USE_BLOOM
// #define USE_GRAIN
//
```

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/glsl-defines/blob/master/LICENSE.md) for details.
