/**
 * @param {...Function} fns
 * @returns {Function}
 */
const compose = function (...fns) {
  return function (arg) {
    return fns.reduceRight(function (x, fn) {
      return fn(x);
    }, arg);
  };
};

export default compose;
