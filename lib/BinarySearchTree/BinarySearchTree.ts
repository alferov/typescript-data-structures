type Comparator<T> = (nodeKey: T, providedKey: T) => number;

import BSTreeNode from './BinarySearchTreeNode';

export default class BSTree<Key, Value> {
  private root: BSTreeNode<Key, Value> | void;
  private compare: Comparator<Key>;

  constructor(comparator: Comparator<Key>) {
    this.compare = comparator;
  }

  public getRoot(): BSTreeNode<Key, Value> | void {
    return this.root;
  }

  public getSize(): number {
    return this.getNodeSize(this.root);
  }

  public find(key: Key): Value | void {
    return this.findNode(this.root, key);
  }

  public insert(key: Key, value: Value): void {
    this.root = this.insertNode(this.root, key, value);
  }

  private getNodeSize(node: BSTreeNode<Key, Value> | void): number {
    if (!node) return 0;
    else return node.size;
  }

  private findNode(node: BSTreeNode<Key, Value> | void, key: Key): Value | void {
    if (!node) return;
    const result = this.compare(node.key, key);
    if (result < 0) {
      return this.findNode(node.left, key);
    } else if (result > 0) {
      return this.findNode(node.right, key);
    } else {
      return node.value;
    }
  }

  private insertNode(node: BSTreeNode<Key, Value> | void, key: Key, value: Value): BSTreeNode<Key, Value> {
    if (!node) return new BSTreeNode(key, value, 1);
    const result = this.compare(node.key, key);

    if (result < 0) {
      node.left = this.insertNode(node.left, key, value);
    } else if (result > 0) {
      node.right = this.insertNode(node.right, key, value);
    } else {
      node.value = value;
    }

    node.size = this.getNodeSize(node.left) + this.getNodeSize(node.right) + 1;

    return node;
  }
}
