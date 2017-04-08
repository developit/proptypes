# proptypes

> React's [PropTypes], packaged up as a standalone module.

**DISCLAIMER:**
This is literally copied from the React 0.14 codebase.
If you're using PropTypes with React, it would be silly to reference this standalone version.


## Usage

```js
function check(props, propTypes) {
  for (let prop in propTypes) {
    if (propTypes.hasOwnProperty(prop)) {
      let err = propTypes[prop](props, prop, 'name', 'prop');
      if (err) {
        console.warn(err);
        return false;
      }
    }
  }
  return true;
}

let valid = check({
  a: 42,
  b: 'News'
}, {
  a: PropTypes.number,
  b: PropTypes.oneOf(['News', 'Photos'])
});

valid;  // true
```

## Production build

### Disabling

With webpack:

```js
module.exports = {
  resolve: {
    alias: {
      proptypes: 'proptypes/disabled',
    }
  }
};
```

### Removing the definitions with React 

When you are using this package with React like API, you might want to save bandwidth by removing the definitions.
You can use [babel-plugin-transform-react-remove-prop-types](https://github.com/oliviertassinari/babel-plugin-transform-react-remove-prop-types) for that use case, for instance:

```js
// In
const Baz = (props) => (
  <div {...props} />
);

Baz.propTypes = {
  className: PropTypes.string
};

// Out
const Baz = (props) => (
  <div {...props} />
);
```

## License

BSD

[PropTypes]: https://github.com/facebook/react/blob/master/src/isomorphic/classic/types/ReactPropTypes.js
