import BSTreeNode from '../BinarySearchTreeNode';
import inOrderTraversal from '../inOrderTraversal';

describe('inOrderTraversal', () => {
  let tree: BSTreeNode<number, string>;

  beforeEach(() => {
    tree = new BSTreeNode(4, 'E', 4);
    const nodeTwo = new BSTreeNode(1, 'B', 2);
    const nodeThree = new BSTreeNode(5, 'F', 1);
    const nodeFour = new BSTreeNode(0, 'A', 1);
    nodeTwo.left = nodeFour;
    tree.left = nodeTwo;
    tree.right = nodeThree;
  });

  it('performs in-order tree traversal', () => {
    const iterator = inOrderTraversal(tree);
    expect(iterator.next()).toMatchObject({ value: 'A', done: false });
    expect(iterator.next()).toMatchObject({ value: 'B', done: false });
    expect(iterator.next()).toMatchObject({ value: 'E', done: false });
    expect(iterator.next()).toMatchObject({ value: 'F', done: false });
    expect(iterator.next()).toMatchObject({ done: true });
  });
});
