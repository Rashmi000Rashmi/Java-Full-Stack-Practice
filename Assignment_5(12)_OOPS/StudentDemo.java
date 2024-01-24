/*
 * Create a class Student with the following members 
 * 
 * Data Members
 * ______________________
 * rollNumber, studName, marks1, marks2, marks3, totalMarks.
 * 
 * Methods
 * ______________
 * setStudDetails() - which set the details of the data members except totalMarks.
 * calculateMarks() - which calculate total marks
 * displyStudDetails() = which display the details of the student i.e rollNumber, studName, totalMarks
 * 
 * 
 * Create a class StudentDemo which test all the functionality of the student class
 * 
 * 
 */
class Student {

    int rollNumber;
    String studName;
    double marks1;
    double marks2;
    double marks3;
    double totalMarks;


    void setStudDetails(int rollNumber, String studName, double marks1, double marks2, double marks3){
        this.rollNumber = rollNumber;
        this.studName = studName;
        this.marks1 = marks1;
        this.marks2 = marks2;
        this.marks3 = marks3;

    }

    void calculateMarks(){
        this.totalMarks = marks1+marks2+marks3;

    }

    void displyStudDetails(){
        System.out.println("Roll Number: "+ this.rollNumber);
        System.out.println("Student Name "+ this.studName);
        System.out.println("Total Marks "+this.totalMarks);
    }

    
}


public class  StudentDemo {
    public static void main(String[] args){
        Student student = new Student();
        student.setStudDetails(1, "Rashmi", 40, 38, 39);
        student.calculateMarks();
        student.displyStudDetails();
    }

    
}