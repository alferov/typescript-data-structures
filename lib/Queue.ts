export class QueueNode<T> {
  public next: QueueNode<T> | void;
  public data: T;
  constructor(data: T) {
    this.data = data;
  }
}

export default class Queue<T> {
  private size: number = 0;
  private head: QueueNode<T> | void;
  private tail: QueueNode<T> | void;

  public dequeue(): T | void {
    if (!this.head) return;

    const node = this.head;
    this.head = node.next;
    this.size = this.size - 1;

    return node.data;
  }

  public queue(data: T): number {
    const newNode = new QueueNode(data);

    if (this.tail) this.tail.next = newNode;

    this.tail = newNode;

    if (!this.head) this.head = this.tail;

    this.size = this.size + 1;
    return this.size;
  }

  public peek(): T | void {
    if (!this.head) return;

    return this.head.data;
  }

  public peekNode(): QueueNode<T> | void {
    if (!this.head) return;

    return this.head;
  }

  public isEmpty(): boolean {
    return this.size === 0;
  }

  public getSize(): number {
    return this.size;
  }

  public toArray(): T[] {
    let node = this.head;
    const result = [];

    while (node) {
      result.push(node.data);
      node = node.next;
    }

    return result;
  }
}
