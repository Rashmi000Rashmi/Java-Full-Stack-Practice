/*
 Note: Arrays in Java are referencing data types that need to
       be instantiated (created) during runtime using "new" keyword. 

WAP to find the biggest, second biggest, smallest, and second smallest
of the arrays

Ex: int[] n = {1,2,3,4,5}

output
_______________
big: 5
second_big: 4
small: 1
second_small: 2

 */

import java.util.Scanner;

public class Big_Small_elements {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Size of the element: ");
        int size = sc.nextInt();

        // checking if the size is array is zero then return message
        if(size<1){
            System.err.println("There is no elements in the array. Big and Small can not be found");
            System.exit(size);  //It terminates the program
        }

        int array[] = new int[size]; 
        System.out.println("Enter the "+size+" of the arrays");
        for(int i=0;i<array.length;i++){
            array[i] = sc.nextInt();
        }

        int big = Integer.MIN_VALUE;
        int second_big = Integer.MIN_VALUE;
        int small = Integer.MAX_VALUE;
        int second_small = Integer.MAX_VALUE;

        // looping array for the search of big, second_big, small, second_small values
        // Using advance for loop in java which was added in java 5 and above versions
        for(int x:array){
            if(size == 1){
                big = x;
                second_big = x;
                small=x;
                second_small=x;
            }
            if(x>big){
                second_big = big;
                big = x;
            }else{
                if(x>second_big){
                    second_big = x;
                }
            }
            
            if(x<small){
                second_small = small;
                small = x;
            }else{
                if(x<second_small){
                    second_small = x;
                }
            }
        }

        // printing all the values
        System.out.println("Big: "+big);
        System.out.println("Second Big: "+second_big);
        System.out.println("Small: "+small);
        System.out.println("Second Small: "+second_small);

        sc.close();
        
    }
}
