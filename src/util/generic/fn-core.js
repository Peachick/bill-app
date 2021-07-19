/**
 * 通用的函数
 */

/**
 * 柯理化
 * @param fn: {Function}
 * @return {(function(...[*]=): (function(...[*]=): *|undefined))|*}
 */
export function curry(fn) {
	return function curried(...args) {
		if (args.length >= fn.length) {
			fn.apply(this, args);
		} else {
			return function (...args2) {
				return curried.apply(this, args.concat(args2));
			};
		}
	};
}
