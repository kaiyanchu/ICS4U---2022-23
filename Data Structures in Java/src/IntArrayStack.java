public class IntArrayStack {
    private int manyItems = 0;
    private int[] arr = new int[0];

    public void push(Integer data){
        int[] temp = new int[arr.length +1];
        for (int i = 0; i < arr.length; i++) {
            temp[i] = arr[i];
        }
        temp[arr.length] = data;
        arr = temp; 
        manyItems++;
    }

    public void pop(){
        if(manyItems > 0){
            int[] temp = new int[arr.length-1];
            for (int i = 0; i < temp.length; i++) {
                temp[i] = arr[i];
            }
            arr = temp;
            manyItems--;
        }
    }

    public Integer peek(){
        return arr[arr.length-1];
    }

    public int search(Integer n){
        int count = 0;
        for (int i = arr.length-1; i >= 0; i--) {
            if(arr[i] == n){                                                                      
                return count;
            } else{
                count ++;
            }
        }

        return -1;
    }

    public boolean empty(){
        return manyItems==0;
    }

    public int[] getStack(){
        return arr;
    }

}
