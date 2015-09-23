//COMM644
//Assinment2, Part 1

//Strings and String Manipulation (5 points)
// STEP 1
/*
1.	Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
*/
/*
var name = prompt("What is your name?");
alert(name.length);
*/

// STEP 2
/*
2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
*/
/*
var name = prompt("What is your name?");
var sequence = prompt("What is the sequence of the letter in your name you want to show?");
alert(name.charAt(sequence - 1));
*/

// STEP 3
/*
3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
*/
/*
var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
alert(" Your name is: " + firstName + " " + lastName);
*/

// STEP 4
/*
4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
*/
/*
var strfox = "The quick brown fox jumps over the lazy fox";
alert(strfox.indexOf("fox"));
*/

// STEP 5
/*
5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
*/
/*
var strfox = "The quick brown fox jumps over the lazy fox";
alert(strfox.lastIndexOf("fox"));
*/

// STEP 6
/*
6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
*/
/*
var strfox = "The quick brown fox jumps over the lazy dog";
var strname = prompt("What is your full name?"); 
alert(strfox.replace("the lazy dog", strname));
*/

// STEP 7
/*
7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
*/
/*
var strfox = "The quick brown fox jumps over the lazy dog";
var strword = prompt("What is the word you want to search?"); 
alert(strfox.search(strword));
*/

// STEP 8
/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
*/
/*
var old_string = "The quick brown fox jumps over the lazy dog";
new_string = old_string.slice(31,43);
alert(new_string.toUpperCase());
new_string = old_string.substr(31,43);
alert(new_string.toUpperCase());
new_string = old_string.substring(31,43);
alert(new_string.toUpperCase());
*/

// STEP 9
/*
9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
*/
/*
var old_string = "       THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    ";
new_string = old_string.trim();
alert(new_string.toLowerCase());
*/

// STEP 10
/*
10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
*/
/*
var old_string = "the quick brown fox jumps over the lazy dog";
firstChar = old_string.charAt(0);
firstCharUpper = firstChar.toUpperCase();
alert(old_string.replace(firstChar, firstCharUpper));
*/

//COMM644
//Assinment2, Part 2

//Part 1 - Math and Math Functions (5 points)

// STEP 1
/*
1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
*/
/*
var x = prompt("Please enter a positive or negative number.");
console.log(Math.abs(x));
*/

// STEP 2
/*
2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
*/
/*
var x = prompt("Please enter a floating point value.");
console.log(Math.ceil(x));
*/

// STEP 3
/*
3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
*/
/*
var x = prompt("Please enter a floating point value.");
console.log(Math.floor(x));
*/

// STEP 4
/*
4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
*/
/*
var x = prompt("Please enter 5 numbers separated by commas.");
console.log(Math.max(x));
*/

// STEP 5
/*
5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
*/
/*
var x = prompt("Please enter a number.");
console.log(Math.sqrt(x));
*/

//Part 2 - Date and Date Functions (6 points)

// STEP 6
/*
6.	Create an application that gets the current date. Display that result within the console window.
*/
var d = new Date();
console.log(d.toDateString());

// STEP 7
/*
7.	Create an application that gets the number of days in a month. Display that result within the console window.
*/
var d = new Date();
console.log(d.toDateString());

Use switch

// STEP 8
/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';
console.log(someString);
*/
/*
var old_string = "The quick brown fox jumps over the lazy dog";
new_string = old_string.slice(31,43);
alert(new_string.toUpperCase());
new_string = old_string.substr(31,43);
alert(new_string.toUpperCase());
new_string = old_string.substring(31,43);
alert(new_string.toUpperCase());
*/

// STEP 9
/*
9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
*/
/*
var old_string = "       THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG    ";
new_string = old_string.trim();
alert(new_string.toLowerCase());
*/

// STEP 10
/*
10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
*/
/*
var old_string = "the quick brown fox jumps over the lazy dog";
firstChar = old_string.charAt(0);
firstCharUpper = firstChar.toUpperCase();
alert(old_string.replace(firstChar, firstCharUpper));
*/

//--------------------------------------------------------------------
//Part 5 - The “Coin Flip” Game (5 points)

//STEP 1-7
    
        var coinFlip = Math.random();  
        var choice = window.prompt("Heads or Tails?");
        choice = choice.toLowerCase();
/*        alert (choice);           
        alert (Math.round(coinFlip)); */         
        if (coinFlip < 0.5) {
            if (choice == "heads") {
                alert("The flip was heads and you chose heads...you win!");
            } else if (choice == "tails") {
                alert("The flip was heads but you chose tails...you lose!");      
            } else {
                alert("Please spell correctly as prompted!")
            }              
        } else {
            if (choice == "heads") {
                alert("The flip was tails but you chose heads...you lose!");
            } else if (choice == "tails") {
                alert("The flip was tails and you chose tails...you win!");            
            } else {
                alert("Please spell correctly as prompted!")
            }
        }

//STEP 8

        var coinFlip = Math.random();  
        var choice = window.prompt("Heads or Tails?");
        choice = choice.toLowerCase();
/*        alert (choice);           
        alert (Math.round(coinFlip)); */         
        if (Math.round(coinFlip)) {
            if (choice == "heads") {
                alert("The flip was tails but you chose heads...you lose!");
            } else if (choice == "tails") {
                alert("The flip was tails and you chose tails...you win!");     
            } else {
                alert("Please spell correctly as prompted!")
            }              
        } else {
            if (choice == "heads") {
                alert("The flip was heads and you chose heads...you win!");   
            } else if (choice == "tails") {
               alert("The flip was heads but you chose tails...you lose!");              
            } else {
                alert("Please spell correctly as prompted!")
            }
        }

//---------------------------------------------------------------------
//Part 6 - The “Coin Flip” Game Redux (5 points)

        var coinFlip;
        for (var i = 1; i <= 10; i++) {
            coinFlip = Math.random();
            coinFlip = Math.round(coinFlip);
            if (coinFlip) {
                console.log("Tails");
            } else {
               console.log("Heads");
            }
        }

//---------------------------------------------------------------------
//Part 7 - The “Coin Flip Streak” Game (5 points)

        var coinFlip;
        for (var i = 1; i <= 10; i++) {
            coinFlip = Math.random();
            coinFlip = Math.round(coinFlip);
            if (coinFlip) {
                console.log("Tails");    
            } else {
               console.log("Heads");    
            }
        }

// STEP 11
//alert("Hello " +  "Shengdar Lee" + ", welcome to the JavaScript class!");
    
// STEP 12
/*
var name = "Shengdar Lee";
alert("Hello " + name  + ", welcome to the JavaScript class!");
*/

//STEP 13
/*
var name = "Shengdar Lee";
var course = "JavaScript";
alert("Hello " + name  + ", welcome to the " + course + "  class!");
*/

// STEP 14
/*
var name = "Shengdar Lee";
var course = "JavaScript";
alert("Hello " + name  + ",\nWelcome to the " + course + "  class!");
*/

// STEP 15
/*
var name = prompt("What is your name?");
var course = "JavaScript";
alert("Hello " + name  + ",\nWelcome to the " + course + "  class!");
*/

// STEP 16
/*
var name = prompt("What is your name?");
var course = prompt("What course are you taking?");
alert("Hello " + name  + ",\nWelcome to the " + course + "  class!");
*/

// STEP 17
/*
var x, y
x = 10;
y = 20;
console.log(x+y);
*/

// STEP 18
/*
var x = 20;
x += 20;
console.log(x);
*/

// STEP 19
/*
var x = 20;
x *= 5;
console.log(x);
*/

// STEP 20
/*
var x = 20%3;
x /= 1;
console.log(x);
*/

// STEP 21
/*
var x = 5;
var y = 10;
console.log(x <= y && y%x == 0);
*/

// STEP 22
/*
var x = 5;
var y = 10;
console.log(x == y || y%x != 0);
*/

// STEP 23
/*
var widget = new Object();
console.log(typeof widget);
*/
            
// STEP 24
/*
var newString = new String("Shengdar");
console.log(newString instanceof String);
*/

// STEP 25
/*
var newString = new String("Shengdar");
console.log(newString instanceof Number);
*/
