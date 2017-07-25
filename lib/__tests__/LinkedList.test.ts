import LinkedList from '../LinkedList';

describe('LinkedList', () => {
  it('adds nodes to the begining of the list and updates references', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst('Hello');
    let first = linkedList.getFirst();
    expect(first!.data).toBe('Hello');
    expect(linkedList.getLast()!.data).toBe('Hello');

    linkedList.addFirst('World');
    first = linkedList.getFirst();
    expect(first!.data).toBe('World');
    expect(linkedList.getSize()).toBe(2);

    const next = first!.next;
    expect(next!.data).toBe('Hello');
    expect(next!.prev!.data).toBe('World');
  });

  it('converts list to array', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addLast('Hello');
    linkedList.addLast('World');
    linkedList.addLast('!');
    expect(linkedList.toArray()).toMatchObject(['Hello', 'World', '!']);
  });

  it('adds nodes to the end of the list and updates references', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addLast('Hello');
    let last = linkedList.getLast();
    expect(last!.data).toBe('Hello');
    expect(linkedList.getFirst()!.data).toBe('Hello');

    linkedList.addLast('World');
    last = linkedList.getLast();
    expect(last!.data).toBe('World');
    expect(linkedList.getSize()).toBe(2);

    const prev = last!.prev;
    expect(prev!.data).toBe('Hello');
    expect(prev!.next!.data).toBe('World');
  });

  it('clears the list', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addLast('Hello');
    linkedList.addLast('World');
    linkedList.clear();
    expect(linkedList.getSize()).toBe(0);
  });

  it('finds node', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addLast('Hello');
    linkedList.addLast('World');
    const node = linkedList.find((data) => data === 'Hello');
    expect(node!.data).toBe('Hello');
  });

  it('removes the node at the specified position', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addLast('Hello');
    linkedList.addLast('World');
    linkedList.addLast('!');

    const node = linkedList.remove(1);
    const first = linkedList.getFirst();
    const last = linkedList.getLast();

    expect(first!.data).toBe('Hello');
    expect(first!.next!.data).toBe('!');

    expect(last!.data).toBe('!');
    expect(last!.prev!.data).toBe('Hello');
  });

  it('returns the element at the specified position ', () => {
    const linkedList = new LinkedList<string>();
    expect(linkedList.get(0)).toBeFalsy();
    linkedList.addLast('Hello');
    expect(linkedList.get(0)!.data).toBe('Hello');
    linkedList.addLast('World');
    linkedList.addLast('!');

    expect(linkedList.get(1)!.data).toBe('World');
    expect(linkedList.get(2)!.data).toBe('!');
    expect(linkedList.get(3)).toBeFalsy();
  });

  it('adds before the element at the specified position ', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst('Hello');
    linkedList.addBefore(0, 'World');
    linkedList.addBefore(1, '!');
    linkedList.addBefore(5, 'Should not exists');

    expect(linkedList.getFirst()!.data).toBe('World');
    expect(linkedList.getLast()!.data).toBe('Hello');
  });

  it('adds after the element at the specified position ', () => {
    const linkedList = new LinkedList<string>();
    linkedList.addFirst('Hello');
    linkedList.addAfter(0, 'World');
    linkedList.addAfter(1, '!');
    linkedList.addAfter(5, 'Should not exists');

    expect(linkedList.getFirst()!.data).toBe('Hello');
    expect(linkedList.getLast()!.data).toBe('!');
  });
});
