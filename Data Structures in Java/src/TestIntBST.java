public class TestIntBST {
    public static void main(String[] args) {
        int testPassed = 0;
       int testFailed = 0;
       if (!testAdd()) {
          System.out.println("Test Failed: testAdd");
          testFailed++;
       } else {
          testPassed++;
       }
 
       if (!testFind()) {
          System.out.println("Test Failed: testFind");
          testFailed++;
       } else {
          testPassed++;
       }
 
       if (!testInOrderPrintTraversal()) {
          System.out.println("Test Failed: testInOrderTraversal");
          testFailed++;
       } else {
          testPassed++;
       }
       if (!testPostOrderPrintTraversal()) {
        System.out.println("Test Failed: testPostordertraversal");
        testFailed++;
     } else {
        testPassed++;
     }
     if (!testPreOrderTraversal()) {
        System.out.println("Test Failed: testPreorderTraversal");
        testFailed++;
     } else {
        testPassed++;
     }
     if(!removeTest()){
         System.out.println("Test Failed: removeTest");
         testFailed++;
     } else {
         testPassed++;
     }
 
       System.out.println("Tests Passed: " + testPassed + ". Tests Failed: " + testFailed);
    }


    private static IntBST prepareIntBST(){
        IntBST bst = new IntBST();
        bst.add(6);
        bst.add(8);
        bst.add(3);
        bst.add(1);
        bst.add(13);
        bst.add(9);
        bst.add(7);
        bst.add(11);
        return bst;
    }
    private static boolean testAdd(){
        IntBST bst = new IntBST();
        IntBSTNode node1 = bst.add(6);
        IntBSTNode node2 = bst.add(8);
        if (node1.getRightChild() != node2)
            return false;
        IntBSTNode node3 = bst.add(3);
        if (node1.getLeftChild() !=node3 )
            return false;

       IntBSTNode node4 = bst.add(1);

       if (node3.getLeftChild() != node4)
            return false;

     return true;  
    }
    
    private static boolean testFind(){
        IntBST bst = prepareIntBST();
            if(bst.find(3).getValue()!= 3 || bst.find(22) != null || bst.find(13).getValue() != 13) 
                return false;
        return true;
    }

    private static boolean testPreOrderTraversal() {
        IntBST bst = prepareIntBST();
        String traversal = bst.preOrderPrintTraversal();
        return traversal.equals("6 3 1 8 7 13 9 11 ");
        }

    private static boolean testPostOrderPrintTraversal() {
        IntBST bst = prepareIntBST();
        String traversal = bst.postOrderPrintTraversal();
        return traversal.equals("1 3 7 11 9 13 8 6 ");
        }

    private static boolean testInOrderPrintTraversal() {
        IntBST bst = prepareIntBST();
        String traversal = bst.inOrderPrintTraversal();
        return traversal.equals("1 3 6 7 8 9 11 13 ");
      }

      private static boolean removeTest() {
         IntBST bst = prepareIntBST();
         bst.remove(13);
        if (!(bst.inOrderPrintTraversal().equals("1 3 6 7 8 9 11 ")))
            return false;
        bst.remove(3);
        if (!(bst.inOrderPrintTraversal().equals("1 6 7 8 9 11 ")))
             return false;
        bst.remove(11);
        if (!(bst.inOrderPrintTraversal().equals("1 6 7 8 9 ")))
            return false;
   
        return true;
   
      }
}


