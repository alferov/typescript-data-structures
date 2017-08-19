export default class BSTreeNode<Key, Value> {
  public left: BSTreeNode<Key, Value> | void;
  public right: BSTreeNode<Key, Value> | void;
  public value: Value;
  public key: Key;
  public size: number;

  constructor(key: Key, value: Value, size: number) {
    this.key = key;
    this.value = value;
    this.size = size;
  }
}
