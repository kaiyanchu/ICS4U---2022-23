public class IntLLStackTest {
    public static void main(String[] args) {
        search();
    }
    private static void search() {
        IntLLStack list = new IntLLStack();
        list.push(2);
        list.push(15);
        list.push(4);
        System.out.println(list.search(4));
        System.out.println(list);
    }

    private static void pop() {
        IntLLStack list = new IntLLStack();
        list.push(8);
        list.push(6);
        list.push(8);
        list.pop();
        System.out.println(list);
    }

    private static void peek() {
        IntLLStack list = new IntLLStack();
        list.push(8);
        list.push(9);
        list.push(1);
        System.out.println(list.peek());
        System.out.println(list);
    }

    private static void push() {
        IntLLStack list = new IntLLStack();
        list.push(2);
        list.push(4);
        list.push(7);
        System.out.println(list);
    }

}