(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], function () {
            return (root.returnExportsGlobal = factory());
        });
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals
        root.returnExportsGlobal = factory();
    }
}(this, function () {
    return function (fn, ...a) {
        let numArguments = fn.length;
        let args = [];
        let currier = function (...newArgs) {
            args = args.concat(newArgs);
            if (args.length === numArguments) {
                return fn(...args);
            } else {
                return currier;
            }
        };
        return currier(...a);
    }
}));