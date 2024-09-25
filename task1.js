//Write a program to check whether the number is positive, negative, or zero. Additionally, if the number is positive, check if it is even or odd.

var num=8
if(num>0){
    console.log("positive number")
    if(num%2==0){
        console.log("even number")
    }
    else{
        console.log("odd number")
    }

}
else if(num<0){
    console.log("negative number")
}
else{
    console.log("zero")
}


//write a program to add two numbers if only both are even numbers
var num1=4
var num2=6
if(num1 % 2===0 && num2 % 2===0){

    console.log(num1 + num2)
}
else{
    console.log("not valid")
}


//Write a program with a num prints the multiplication table for that number from 1 to 10 using a loop.

num=10;
for(var i=1;i<=10;i++){
    console.log(num+"x" +i+ "="+ (num*i))
}

