public class IntBSTNode {
    private IntBSTNode leftChild;
    private IntBSTNode rightChild;
    private Integer value;

    public IntBSTNode(Integer value) {
        this.value = value;
    }

    public IntBSTNode(IntBSTNode leftChild, IntBSTNode rightChild, Integer value) {
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.value = value;
    }

    public IntBSTNode getLeftChild() {
        return leftChild;
    }

    public void setLeftChild(IntBSTNode leftChild) {
        this.leftChild = leftChild;
    }

    public IntBSTNode getRightChild() {
        return rightChild;
    }

    public void setRightChild(IntBSTNode rightChild) {
        this.rightChild = rightChild;
    }

    public Integer getValue() {
        return value;
    }

    public void setValue(Integer value) {
        this.value = value;
    }
    public boolean hasLeftChild(){
        return leftChild != null;
    }
    public boolean hasRightChild(){
        return rightChild != null;
    }

}
