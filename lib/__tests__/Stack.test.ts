import Stack from '../Stack';

describe('Stack', () => {
  it('pushes values onto the stack', () => {
    const stack = new Stack<string>();
    expect(stack.isEmpty()).toBeTruthy();
    stack.push('first');
    const size = stack.push('second');
    expect(stack.peek()).toBe('second');
    expect(size).toBe(2);
  });

  it('pops values from the stack', () => {
    const stack = new Stack<string>();
    stack.push('first');
    stack.push('second');
    const node = stack.pop();

    expect(node).toBe('second');
    expect(stack.peek()).toBe('first');
    expect(stack.getSize()).toBe(1);
  });
});
