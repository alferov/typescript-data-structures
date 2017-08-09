import Queue from '../Queue';

describe('Queue', () => {
  it('adds values to the end of the queue', () => {
    const queue = new Queue<string>();
    expect(queue.isEmpty()).toBeTruthy();
    queue.queue('first');
    const size = queue.queue('second');
    expect(queue.peek()).toBe('first');
    expect(size).toBe(2);
    expect(queue.toArray()).toMatchObject(['first', 'second']);
  });

  it('dequeues values from the beginning of the queue', () => {
    const queue = new Queue<string>();
    queue.queue('first');
    queue.queue('second');
    const node = queue.dequeue();

    expect(node).toBe('first');
    expect(queue.peek()).toBe('second');
    expect(queue.getSize()).toBe(1);
    expect(queue.toArray()).toMatchObject(['second']);
  });
});
