/**
 * Binds all methods of the instance to itself.
 * This ensures correct 'this' context when methods are used as callbacks, e.g. { queryFn: owner.queryMethod }.
 */
export default function bindAll<T>(me: T) {
  for (const key in me) {
    if (typeof me[key] === 'function') {
      const method = me[key];

      if (typeof method === 'function') me[key] = method.bind(me);
    }
  }

  return me;
}
