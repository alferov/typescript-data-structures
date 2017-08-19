import BSTreeNode from './BinarySearchTreeNode';

interface Iterator<T> {
  next(): { value?: T, done: boolean };
}

export default function* inOrderTraversal<Key, Value>(node: BSTreeNode<Key, Value> | void): Iterator<Value> {
  const stack: Array<BSTreeNode<Key, Value>> = [];
  let current = node;
  let done = false;

  while (!done) {
    if (current) {
      stack.push(current);
      current = current!.left;
    } else {
      if (!stack.length) return { done: done = true };
      current = stack.pop();
      const { value } = current!;
      yield value;
      current = current!.right;
    }
  }
}
