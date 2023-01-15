public class IntArrayQueue {
    private int[] arr = new int[0];
    private int manyItems = 0;

    public void enqueue(Integer data){
        int[] temp = new int[arr.length +1];
        for (int i = 0; i < arr.length; i++) {
            temp[i] = arr[i];
        }
        temp[arr.length] = data;
        arr = temp; 
        manyItems++;
    }

    public void dequeue(){
        int[] temp = new int[arr.length-1];
        for (int index = 1; index < arr.length; index++) {
            temp[index-1] = arr[index];
        }
        arr = temp;
        manyItems--;
    }

    public Integer peek(){
        return arr[0];
    }

    public void clear(){
        arr = new int[0];
        manyItems = 0;
    }

    public boolean isEmpty(){
        return manyItems==0;
    }

    public int[] getArray(){
        return arr;
    }




}
