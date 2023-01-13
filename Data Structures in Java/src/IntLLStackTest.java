public class IntLLStackTest {
    public static void main(String[] args) {
        testSearch();
        testPop();
        testPeek();
        testPush();
        empty();
    }
    private static void testSearch() {
        IntLLStack list = new IntLLStack();
        list.push(2);
        list.push(15);
        list.push(4);
        System.out.println(list.search(4));
        System.out.println(list);
    }

    private static void testPop() {
        IntLLStack list = new IntLLStack();
        list.push(8);
        list.push(6);
        list.push(8);
        list.pop();
        System.out.println(list);
    }

    private static void testPeek() {
        IntLLStack list = new IntLLStack();
        list.push(8);
        list.push(9);
        list.push(1);
        System.out.println(list.peek());
        System.out.println(list);
    }

    private static void testPush() {
        IntLLStack list = new IntLLStack();
        list.push(2);
        list.push(4);
        list.push(7);
        System.out.println(list);
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