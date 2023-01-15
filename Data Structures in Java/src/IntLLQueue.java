public class IntLLQueue {
    private IntLinkedList data;

    /*Linked list where front of linked list is front of queue */
    public IntLLQueue() {
        data = new IntLinkedList();
    }

    public boolean isEmpty(){
        return data.isEmpty();
    }

    public void clear(){
        data = new IntLinkedList();
    }

    public boolean enqueue(Integer el){
        return data.add(el);
    }

    public Integer dequeue(){
        return data.removeFront();
    }

    public Integer peek(){
        return data.get(0);
    }

    public IntLinkedList getList(){
        return data;
    }
}
