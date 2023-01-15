public class IntLLStackTest {
    public static void main(String[] args) {
        int testPassed = 0;
        int testFailed = 0;
        if(!testPush()){
            System.out.println("Test Failed: testPush");
            testFailed++;
        } else {
            testPassed++;
        }
        if(!testPop()){
            System.out.println("Test Failed: testPop");
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
        if(!testSearch()){
            System.out.println("Test Failed: search");
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

    private static IntLLStack prepareLLStack() {
        IntLLStack list = new IntLLStack();
        list.push(1);
        list.push(2);
        list.push(3);
        list.push(4);
        list.push(5);
  
        return list;
     }

    private static boolean testSearch() {
        IntLLStack list = prepareLLStack();
        if(list.search(2) != 3 || list.search(6) != -1)
            return false;
        return true;
    }

    private static boolean testPop() {
        IntLLStack list =  prepareLLStack();
        list.pop();
        if(list.size() != 4 || list.getFront().getData() != 4)
            return false;
        return true;
    }

    private static boolean testPeek() {
        IntLLStack list = prepareLLStack();
        if(list.peek() != 5)
            return false;
        return true;
    }

    private static boolean testPush() {
        IntLLStack list = prepareLLStack();
        list.push(6);
        if(list.getFront().getData() != 6)
            return false;
        return true;
    }
    
    public static boolean testisEmpty(){
        IntLLStack list = prepareLLStack();
        if(list.empty())
            return false;
        for(int i = 0; i < 5; i++){
            list.pop();
        }
        if(!list.empty())
            return false;
        return true;
    }
}