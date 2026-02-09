
export default function bindAll<T>(me: T) {
  for (const key in me) {
    if (typeof me[key] === 'function') me[key] = me[key].bind(me);
  }
  
  return me;
}
