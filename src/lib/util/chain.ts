/**
 * This method simulates "A extends B" by chaining B onto the last object in A's prototype chain before Object.prototype.
 */

export default function chain<Head extends object, Tail extends object>(
  head: Head,
  tail: Tail
) {
  const prototype = Object.getPrototypeOf(head);

  if (prototype !== Object.prototype)
    return chain(Object.getPrototypeOf(head), tail);

  Object.setPrototypeOf(head, tail);

  return head as Head & Omit<Tail, keyof Head>;
}
