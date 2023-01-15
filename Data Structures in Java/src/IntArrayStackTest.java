import java.nio.file.spi.FileSystemProvider;
import java.util.Arrays;

public class IntArrayStackTest {
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
        if(!search()){
            System.out.println("Test Failed: search");
            testFailed++;
        } else{
            testPassed++;
        }
        if(!empty()){
            System.out.println("Test Failed: empty");
            testFailed++;
        } else{
            testPassed++;
        }
        System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }

    private static IntArrayStack prepareArrayStack(){
        IntArrayStack arr = new IntArrayStack();
        arr.push(1);
        arr.push(2);
        arr.push(3);
        arr.push(4);
        arr.push(5);
        return arr; 
    }

    public static boolean testPush(){
        IntArrayStack arr = prepareArrayStack();

        arr.push(6);
        if(arr.getStack()[5] != 6 || arr.size() != 6){
            return false;
        }

        return true;
    }
    public static boolean testPop(){
        IntArrayStack arr =  prepareArrayStack();

        arr.pop();
        
        if(arr.size() != 4 || arr.getStack()[0] != 1)
            return false;
        
        return true;
    }

    public static boolean testPeek(){
        IntArrayStack arr =  prepareArrayStack();
        if(arr.peek() != 5)
            return false;
        return true;
    }

    public static boolean search(){
        IntArrayStack arr =  prepareArrayStack();
        if(arr.search(2) != 3 || arr.search(6) != -1)
            return false;
        return true;
    }

    public static boolean empty(){
        IntArrayStack arr =  prepareArrayStack();
        if(arr.empty())
            return false;
        for (int i = 0; i < 5; i++) {
            arr.pop();
        }
        if(!arr.empty())
            return false;
        return true;
    }

    }

