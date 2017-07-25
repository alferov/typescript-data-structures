type Comparator = (data: any) => boolean;

export class LinkedListItem<T> {
  public next: LinkedListItem<T> | void;
  public prev: LinkedListItem<T> | void;
  public data: T;

  constructor(data: T) {
    this.data = data;
  }
}

// tslint:disable-next-line:max-classes-per-file
export default class LinkedList<T> {
  private head: LinkedListItem<T> | void;
  private tail: LinkedListItem<T> | void;
  private size: number = 0;

  public get(targetIndex: number): LinkedListItem<T> | void {
    if (this.size < targetIndex || !this.head) return;
    if (targetIndex === 0) return this.head;
    if (targetIndex === this.size - 1) return this.tail;
    let node = this.head.next;
    let index = 1;

    while (node && targetIndex !== index) {
      node = node!.next;
      index = index + 1;
    }

    return node;
  }

  public getSize(): number {
    return this.size;
  }

  public addFirst(data: T): void {
    const newNode = new LinkedListItem<T>(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.addBeforeNode(this.head, newNode);
    }

    this.size = this.size + 1;
  }

  public getFirst(): LinkedListItem<T> | void {
    return this.head;
  }

  public addLast(data: T): void {
    if (!this.tail) {
      this.addFirst(data);
      return;
    }

    const newNode = new LinkedListItem<T>(data);
    this.addAfterNode(this.tail, newNode);
    this.size = this.size + 1;
  }

  public getLast(): LinkedListItem<T> | void {
    return this.tail;
  }

  public clear(): void {
    this.head = this.tail = undefined;
    this.size = 0;
  }

  public find(callback: Comparator): LinkedListItem<T> | void {
    if (!this.size) return;

    let node = this.head;

    while (node) {
      const match = callback(node.data);
      if (match) return node;
      node = node.next;
    }

    return;
  }

  public remove(targetIndex: number): LinkedListItem<T> | void {
    const node = this.get(targetIndex);
    if (!node) return;

    if (!node.prev) {
      this.head = node.next;
    } else {
      node.prev.next = node.next;
    }

    if (!node.next) {
      this.tail = node.prev;
    } else {
      node.next.prev = node.prev;
    }

    return node;
  }

  public addBefore(targetIndex: number, data: T): void {
    const node = this.get(targetIndex);

    if (!node) return;

    const newNode = new LinkedListItem<T>(data);
    this.addBeforeNode(node, newNode);
    this.size = this.size + 1;
  }

  public addAfter(targetIndex: number, data: T): void {
    const node = this.get(targetIndex);

    if (!node) return;

    const newNode = new LinkedListItem<T>(data);
    this.addAfterNode(node, newNode);
    this.size = this.size + 1;
  }

  public toArray(): T[] {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.data);
      node = node!.next;
    }

    return result;
  }

  private addBeforeNode(node: LinkedListItem<T>, newNode: LinkedListItem<T>): void {
    newNode.next = node;
    if (!node.prev) {
      this.head = newNode;
    } else {
      newNode.prev = node.prev;
      node.prev.next = newNode;
    }
    node.prev = newNode;
  }

  private addAfterNode(node: LinkedListItem<T>, newNode: LinkedListItem<T>): void {
    newNode.prev = node;
    if (!node.next) {
      this.tail = newNode;
    } else {
      newNode.next = node.next;
      node.next.prev = newNode;
    }
    node.next = newNode;
  }
}
