export class StackNode<T> {
  public next: StackNode<T> | void;
  public data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export default class Stack<T> {
  private size: number = 0;
  private top: StackNode<T> | void;

  public pop(): T | void {
    if (!this.top) return;

    const node = this.top;
    this.top = node.next;
    this.size = this.size - 1;

    return node.data;
  }

  public push(data: T): number {
    const newNode = new StackNode(data);

    if (!this.top) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size = this.size + 1;
    return this.size;
  }

  public peek(): T | void {
    if (!this.top) return;

    return this.top.data;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }
}
