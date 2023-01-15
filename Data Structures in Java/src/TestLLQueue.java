public class TestLLQueue {
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
   
   private static IntLLQueue prepareLLQueue() {
      IntLLQueue list = new IntLLQueue();
      list.enqueue(1);
      list.enqueue(2);
      list.enqueue(3);
      list.enqueue(4);
      list.enqueue(5);

      return list;
   }
   
   private static boolean testEnqueue(){
      IntLLQueue list = prepareLLQueue();
      list.enqueue(6);
      if(list.getList().size() != 6)
         return false;
      if(list.getList().get(5) != 6)
         return false;
      return true;
   }
   private static boolean testDequeue(){
      IntLLQueue list = prepareLLQueue();
      list.dequeue();
      if(list.getList().size() != 4 || list.getList().get(0) != 2)
         return false;
      return true;
   }
   private static boolean testPeek(){
      IntLLQueue list = prepareLLQueue();
      return list.peek() == 1;
   }
   private static boolean testClear(){
      IntLLQueue list = prepareLLQueue();
      list.clear();
      return list.getList().size() == 0;
   }
   private static boolean testisEmpty(){
      IntLLQueue list = prepareLLQueue();
      if(list.isEmpty())
         return false;
      list.clear();
      return list.isEmpty();
   }
}
