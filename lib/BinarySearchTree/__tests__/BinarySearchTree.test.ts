import BSTree from '../BinarySearchTree';
import inOrderTraversal from '../inOrderTraversal';

describe('Binary Search Tree', () => {
  it('inserts nodes to the binary search tree', () => {
    const comparator = (nodeKey: number, providedKey: number) => providedKey - nodeKey as number;
    const binaryTree = new BSTree<number, string>(comparator);

    binaryTree.insert(4, 'E');
    binaryTree.insert(1, 'B');
    binaryTree.insert(2, 'C');
    binaryTree.insert(0, 'A');

    const iterator = inOrderTraversal(binaryTree.getRoot());
    expect(iterator.next()).toMatchObject({ value: 'A', done: false });
    expect(iterator.next()).toMatchObject({ value: 'B', done: false });
    expect(iterator.next()).toMatchObject({ value: 'C', done: false });
    expect(iterator.next()).toMatchObject({ value: 'E', done: false });
    expect(iterator.next()).toMatchObject({ done: true });
  });
});
