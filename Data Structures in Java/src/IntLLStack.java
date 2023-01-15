public class IntLLStack {
 
    private IntNode head;
    private int manyItems;


    public IntLLStack() {
        this.head = null;
    }

    public boolean push(Integer data){
        head = new IntNode(data, head);
        manyItems++;
        return true;
    }

    public Integer peek(){
        return head.getData();
    }



    
    public int size(){
        return manyItems;
    }

    public boolean empty(){
        return head == null;
    }


    public Integer pop(){
        if(head==null)
            return null;
        else{
            Integer temp = head.getData();
            head = head.getLink();
            manyItems--;
            return temp;
        }
    }

    public Integer search(int n){
        int count = 0;
        IntNode curr = head;
        while(curr.getData() != n ){
            if(curr.getLink()== null)
                return -1;
            curr = curr.getLink();
            count++;
        }
        return count; 
    }

    public String toString(){
        String result = "{";
        IntNode curr = head;
        while(curr != null){
            result += curr.getData() + ", ";
            curr= curr.getLink();
        }

        if(!empty()){
            result = result.substring(0, result.length()-2);
        }

        result += "}";
        return result;
    }

    public IntNode getFront(){
        return head;
    }
}

