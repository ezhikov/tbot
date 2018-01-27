/**
 * @param {string} prop
 * @param {boolean} [mandatory=false]
 * @returns {function}
 */
const createMixin = function (prop, mandatory = false) { // eslint-disable-line no-unused-vars
  /**
   * @param {{new({}): {}}} Base
   * @param {boolean} [mandatory]
   * @returns {{new({prop?: *, rest?: *}): {}}}
   */
  const mixin = function (Base, mandatory = mandatory) { // eslint-disable-line no-shadow, no-use-before-define
    return class extends Base {
      constructor({ [prop]: p, ...rest }) {
        super(rest);
        if (mandatory && p === undefined) throw new TypeError(`property ${prop} is mandatory for class ${this.constructor.name}`);
      }
    };
  };
  return mixin;
};

export default createMixin;
