function proptype() {}
proptype.isRequired = proptype;

const getProptype = () => proptype;

export default {
    checkPropTypes: () => null,
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
    shape: getProptype,
};
