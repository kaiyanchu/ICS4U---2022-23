import java.util.Arrays;

public class IntArrayStackTest {
    public static void main(String[] args) {
        testPush();
        testPop();
    }

    public static void testPush(){
        //push
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);

        System.out.println(Arrays.toString(arr.getStack()));

    }
    public static void testPop(){
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);

        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();

        System.out.println();
        System.out.println(Arrays.toString(arr.getStack()));
    }
        //peek
    public static void testPeek(){
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);
        System.out.println(arr.peek());
    }

    public static void search(){
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);
        System.out.println(arr.search(2));
        System.out.println(arr.search(1));
    }

    public static void empty(){
        IntArrayStack arr =  new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        arr.push(6);
        System.out.println(arr.empty());

    }

    }

