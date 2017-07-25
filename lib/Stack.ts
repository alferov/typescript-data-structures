export default class Stack<T> {
  private items: T[] = [];
  private size: number = 0;
  public pop(): T | void {
    this.size = this.size - 1;
    return this.items.pop();
  }
  public push(node: T): number {
    this.size = this.size + 1;
    this.items.push(node);
    return this.size;
  }
  public peek(): T {
    return this.items[this.size - 1];
  }
  public isEmpty(): boolean {
    return this.size === 0;
  }
  public getSize(): number {
    return this.size;
  }
}
