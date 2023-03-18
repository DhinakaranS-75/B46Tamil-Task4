
console.log ("Hello World");

//(1).Declare four variables without assigning values and print them in console

    let variable1, variable2, variable3, variable4;

    console.log(variable1);
    console.log(variable2);
    console.log(variable3);
    console.log(variable4);

//(2).How to get value of the variable myvar as output

    let myvar = "Hello Dhinakaran";
    console.log(myvar);
//(3).Declare variables to store your first name, last name, marital status, country and age in multiple lines

    var firstName = "Dhinakaran";
    var lastName = "S";
    var maritalstatus = "single";
    var country = "India";
    var age = 30;
//(4).Declare variables to store your first name, last name, marital status, country and age in a single line

    var firstName = "Dhinakaran" , lastName = "S",  maritalstatus = "single", country = "India", age = 30;
//(5).Declare variables and assign string, boolean, undefined and null data types

    var myAge = 25;
    var yourAge = 30;
    var myString = `iam ${myAge} years old`;
    var yourString = `you are ${yourAge} years old`
    var myBoolean = true;
    var myUndefined = undefined;
    var myNull = null;

    console.log(myString);
    console.log(yourString);

//(6).Convert the string to integer
    let myString = "Dhinakaran"; 
    let myInt1 = parseInt(myString); 
    let myInt2 = Number(myString); 
    let myInt3 = +myString; 

    console.log(myInt1); 
    console.log(myInt2); 
    console.log(myInt3); 
//(7).Write 6 statement which provide truthy & falsey values.

//True values:

    // `true` - The boolean value true is always truthy.
    // "hello" - Any non-empty string is truthy.
    // `42` - Any non-zero number is truthy.
    // `[]` - An empty array is truthy.
    // `{} `- An empty object is truthy.
    // `function() {}` - Any non-empty function is truthy.

//Falsey values:

    // `false` - The boolean value false is always falsey.
    // `"" `- An empty string is falsey.
    // `0 `- The number zero is falsey.
    // `null` - The value null is always falsey.
    // `undefined` - The value undefined is always falsey.
    // `NaN` - The value NaN (Not a Number) is always falsey.

//Task 2: Simple Programs todo for Operators

//(1).Square of a number

    console.log(7 ** 5);

//(2).Swapping 2 number
    let a = prompt('Enter the first Name: ');
    let b = prompt('Enter the second name: ');

    let temp;

    temp = "Dhinakaran";
    a = "5";
    b = temp;

    console.log(`The value of a after swapping: ${a}`);
    console.log(`The value of b after swapping: ${b}`);
//(3).Addition of 3 numbers
    
    let X  = 7;
    let Y = 5;
    let Z = 6;

    console.log(X+Y+Z);
//(4).Celsius to Fahrenheit conversion
    let celsius = 25;
    let fahrenheit = (celsius * 1.8) + 32;
    console.log(fahrenheit);
//(5).Meter to miles
    let meters = 5000;
    let miles = meters / 1609.344;
    console.log(miles); // 
//(6).Pounds to kg
    function lbsToKg(lbs) {
        var kg = lbs * 0.453592;
        return kg;
    }
//(7).Calculate Batting Average
var timeLeft = 600; // 10 minutes in seconds
var countdownTimer = setInterval(function() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  if (timeLeft <= 0) {
    clearInterval(countdownTimer);
    alert("Time's up!");
  } else {
    document.getElementById("timer").innerHTML = "Time left: " + minutes + " minutes " + seconds + " seconds";
  }
  timeLeft -= 1;
}, 1000);
//(8).Calculate five test scores and print their average
    var score1 = 85;
    var score2 = 90;
    var score3 = 92;
    var score4 = 88;
    var score5 = 95;

    var totalScore = score1 + score2 + score3 + score4 + score5;
    var averageScore = totalScore / 5;

    console.log("The average test score is: " + averageScore);
//(9).Power of any number x ^ y.
    var base = 2;
    var exponent = 5;
    var result = power(base, exponent);
    console.log(base + " raised to the power of " + exponent + " is " + result);
//(10).Calculate Simple Interest
    var principal = 5000;
    var rate = 2.5;
    var time = 2;
    var result = calculateSimpleInterest(principal, rate, time);
    console.log("Simple interest on Rs." + principal + " at " + rate + "% interest rate for " + time + " years is Rs." + result.interest);
    console.log("Total amount payable after " + time + " years is Rs." + result.totalAmount);
//(11).Calculate area of an equilateral triangle
    var side = 5;
    var area = calculateEquilateralTriangleArea(side);
    console.log("Area of an equilateral triangle with side " + side + " is " + area);
//(12).Area Of Isosceles Triangle
    const A = 5;
    const B = 5;
    const C = 8;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("The area of the isosceles triangle is " + area);
//(13).Volume Of Sphere
    
    const radius = 5;
    const volume = (4/3) * Math.PI * Math.pow(radius, 3);
    console.log("The volume of the sphere is " + volume);


//(14).Volume Of Prism
    const baseLength = 10;
    const baseWidth = 5;
    const Height = 8;


    const baseArea = baseLength * baseWidth;

    const Volume = baseArea * height;
    console.log("The volume of the prism is " + volume);

//(15).Find area of a triangle.

    const base = 10;
    const height = 5;


    const area = (base * height) / 2;

    console.log("The area of the triangle is " + area);


//(16).Give the Actual cost and Sold cost, Calculate Discount Of Product
    const actualCost = 100;
    const soldCost = 75;


    const discount = actualCost - soldCost;


    console.log("The discount is " + discount);
//(17).Given their radius of a circle and find its diameter, circumference and area.
    const Radius = 5;

    const diameter = 2 * radius;
    const circumference = 2 * Math.PI * radius;
    const area = Math.PI * radius ** 2;

    console.log("The diameter of the circle is " + diameter);
    console.log("The circumference of the circle is " + circumference);
    console.log("The area of the circle is " + area);
//(18).Given two numbers and perform all arithmetic operations.
    const num1 = 10;
    const num2 = 5;

    const sum = num1 + num2;
    const difference = num1 - num2;
    const product = num1 * num2;
    const quotient = num1 / num2;
    const modulus = num1 % num2;

    console.log("The sum of the two numbers is " + sum);
    console.log("The difference of the two numbers is " + difference);
    console.log("The product of the two numbers is " + product);
    console.log("The quotient of the two numbers is " + quotient);
    console.log("The modulus of the two numbers is " + modulus);
//(19).Display the asterisk pattern as shown below(No loop needed): `*****`
    console.log("*****");
    console.log("*****");
    console.log("*****");
    console.log("*****");
    console.log("*****");
    
//(20).Calculate electricity bill?

   
    const dailyConsumption = 100 * 24;
    const monthlyConsumption = dailyConsumption / 1000 * 30;
    const perUnitRate = 10;

    const totalBill = monthlyConsumption * perUnitRate;

    console.log("The total energy bill is Rs. " + totalBill);
//(21).Program To Calculate CGPA

    
    const grades = [3.5, 4.0, 3.0, 3.7];
    const creditHours = [3, 4, 3, 2];

    let totalGradePoints = 0;
    let totalCreditHours = 0;

    for (let i = 0; i < grades.length; i++) {
    totalGradePoints += grades[i] * creditHours[i];
    totalCreditHours += creditHours[i];
    }

   
    const cgpa = totalGradePoints / totalCreditHours;


    console.log("The CGPA is " + cgpa.toFixed(2));

