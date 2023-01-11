public class TestListList {
    public static void main(String[] args) {
        //TestAddNodes();
        TestRemoveNodes();
    }

    public static void TestAddNodes(){
        IntLinkedList list = new IntLinkedList();
        list.add(1);
        list.add(2);
        list.add(3);

        System.out.println(list);

        list.addFront(4);
        list.addFront(5);
        System.out.println(list);

        list.add(1,6);
        System.out.println(list);

        list.add(6, 1);
    
    }

    private static void TestRemoveNodes(){
        IntLinkedList list = new IntLinkedList();
        Integer temp;
        System.out.println(list);
        list.add(1);
        list.add(2);
        list.add(3);
        list.add(4);
        list.add(5);
        System.out.println(list);

        temp = list.remove(3);
        list.remove(1);
        list.remove(5);
        System.out.println(temp);
        System.out.println(list);
    }
}
