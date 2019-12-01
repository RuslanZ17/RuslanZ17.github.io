var number=5.5;
alert(typeof number);
alert(number+20);//25.5
var str="25";
var str1='25';
alert(str);
alert(typeof  str);
var strr=23;
alert(str+10);
number="Hello";

var nameNumber=15;
var b=nameNumber;
alert(b);
alert(nameNumber);
nameNumber=30;
alert(nameNumber);
var hello2="hello";
alert(hello2);

var $ =1.5;
//объявили переменную с именем "$"
var _=$;
//переменная с именем "_"
alert($+_);

const COLOR_RED="#ff050a";
COLOR_RED=30;
alert(COLOR_RED);

var firstNum=12, secondNum=3;
alert(firstNum+secondNum);
alert(firstNum-secondNum);
alert(firstNum*secondNum);
alert(firstNum%secondNum);
alert(firstNum/secondNum);

var num=10;
alert(num++);
alert(num);
alert(num--);
alert(num);

var num1=10,num2=5;
document.write(num>num2)+ "<br>");
document.write(num<num2)+ "<br>");
document.write(num>=num2)+ "<br>");
document.write(num<=num2)+ "<br>");
document.write(num==num2)+ "<br>");
document.write(num!=num2)+ "<br>");

var num1=10,num2=5;
var bool=true;
if(num1>num2){
    alert("Boolean is true");
}else {
    alert("Boolean is true")
}
bool ? alert("true"): alert("false")

var years=progress("сколько вам лет?");
alert(typeof years);
alert('Вам' + years+'лет');

var firstNumber=
    +prompt('Enter first number');
var secondNumber=
    +prompt("Enter second number")
alert(firstNumber+secondNumber);

var PasswordDb='Cat';
var password=prompt("enter password");
if (password=PasswordDb){
    alert("Access granted")
} else{
    alert("Access denied")
}

var i=10;
while(i<10){
    document.write(i,"<br>");
    i++;
}

i=0;
sum=0;
while (true){
    i=+prompt("enter the number:");
    if(i===0)break
    sum=+=1
}
alert(sum);

i=5;
while (i){
    alert(i);
    i--;
}

var i=1;
var size=10;
while(i<=size){
    if(i% 2 ===0) alert(i);
    i++;
}

for (var i= 5; i>0;--i){
    alert(i);
}

var  num=+prompt("enter number:");
var pow=+prompt("Enter stepen:")
var sum=1;
for (var i=0; i<pow; i++){
    sum *=num;
}
alert(num+ "In stepen" + pow + "=" + sum);

