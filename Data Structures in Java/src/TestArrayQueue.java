public class TestArrayQueue {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if(!testEnqueue()){
            System.out.println("Test Failed: testEnqueue");
            testFailed++;
        } else {
            testPassed++;
        }
        if(!testDequeue()){
            System.out.println("Test Failed: testDequeue");
            testFailed++;
        } else {
            testPassed++;
        }
        if(!testPeek()){
            System.out.println("Test Failed: testPeek");
            testFailed++;
        } else {
            testPassed++;
        }
        if(!testClear()){
            System.out.println("Test Failed: testClear");
            testFailed++;
        } else{
            testPassed++;
        }
        if(!testisEmpty()){
            System.out.println("Test Failed: empty");
            testFailed++;
        } else{
            testPassed++;
        }
        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
      }

    private static IntArrayQueue prepareArrayQueue(){
        IntArrayQueue arr = new IntArrayQueue();
        arr.enqueue(1);
        arr.enqueue(2);
        arr.enqueue(3);
        arr.enqueue(4);
        arr.enqueue(5);

        return arr;

    }

    private static boolean testEnqueue(){
        IntArrayQueue arr = prepareArrayQueue();
        arr.enqueue(6);
        if(arr.getArray().length != 6)
            return false;
        if(arr.getArray()[arr.getArray().length-1] != 6)
            return false;
        return true;
    }

    private static boolean testDequeue(){
        IntArrayQueue arr = prepareArrayQueue();
        arr.dequeue();
        if(arr.getArray().length != 4 || arr.getArray()[0] !=2)
            return false;
        return true;
    }

    private static boolean testPeek(){
        IntArrayQueue arr = prepareArrayQueue();
        return arr.peek() == 1;
    }

    private static boolean testClear(){
        IntArrayQueue arr = prepareArrayQueue();
        arr.clear();
        return arr.getArray().length == 0;
    }
    
    private static boolean testisEmpty(){
        IntArrayQueue arr = prepareArrayQueue();
        if(arr.isEmpty())
            return false;;
        arr.clear();
        return arr.isEmpty();
    }
}