export default function chain<Head extends object, Tail extends object>(
  head: Head,
  tail: Tail
) {
  const prototype = Object.getPrototypeOf(head);

  if (prototype !== Object.prototype) return chain(Object.getPrototypeOf(head), tail);

  Object.setPrototypeOf(head, tail);

  return head as Head & Omit<Tail, keyof Head>;
}
