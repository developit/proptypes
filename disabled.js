(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define("PropTypes", ["exports"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports);
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports);
        global.PropTypes = mod.exports;
    }
})(this, function (exports) {
    "use strict";

    exports.__esModule = true;
    function proptype() {}
    proptype.isRequired = proptype;

    var getProptype = function getProptype() {
        return proptype;
    };

    exports.default = {
        checkPropTypes: function checkPropTypes() {
            return null;
        },
        array: proptype,
        bool: proptype,
        func: proptype,
        number: proptype,
        object: proptype,
        string: proptype,
        symbol: proptype,
        any: getProptype,
        arrayOf: getProptype,
        element: getProptype,
        instanceOf: getProptype,
        node: getProptype,
        objectOf: getProptype,
        oneOf: getProptype,
        oneOfType: getProptype,
        shape: getProptype
    };
});
//# sourceMappingURL=disabled.js.map