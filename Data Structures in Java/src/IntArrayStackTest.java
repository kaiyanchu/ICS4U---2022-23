import java.util.Arrays;

public class IntArrayStackTest {
    public static void main(String[] args) {
        test();
    }

    public static void test(){
        //push
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);

        System.out.println(Arrays.toString(arr.getStack()));

        //pop
        // arr.pop();
        // arr.pop();
        // arr.pop();
        // arr.pop();
        // arr.pop();
        // arr.pop();
        // arr.pop();
        // arr.pop();

        System.out.println();
        System.out.println(Arrays.toString(arr.getStack()));

        //peek
        System.out.println(arr.peek());

        //search
        System.out.println(arr.search(2));
        System.out.println(arr.search(1));
        //isempty
        System.out.println(arr.empty());




    }
}
