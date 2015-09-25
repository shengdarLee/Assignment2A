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
8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
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

//------------------------------------------------------------
//COMM644
//Assinment2, Part 2

//------------------------------------------------------------
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
/*    var fiveNumbers = new Array(5);
    var input = prompt("Please enter 5 numbers separated by commas.");*/
/*    fiveNumbers[]= input.split(",");
    console.log(fiveNumber[]);*/
//   console.log(input.split(","));
//    console.log(input.match([0-9]));
//   console.log(Math.max(fiveNumbers));

// STEP 5
/*
5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
*/
/*
    var x = prompt("Please enter a number.");
    console.log(Math.sqrt(x));
*/

//-----------------------------------------------------------
//Part 2 - Date and Date Functions (6 points)

// STEP 6
/*
6.	Create an application that gets the current date. Display that result within the console window.
*/
/*
    var d = new Date();
    console.log(d.toDateString());
*/

// STEP 7
/*
7.	Create an application that gets the number of days in a month. Display that result within the console window.
*/
/*
    var d = new Date();
    console.log(d.getDate());
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

//--------------------------------------------------------------------
//Part 3 - Conditional Logic and Looping Operations (4 points)

// STEP 12
/*
12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
*/
/*
    var integer1 = prompt("Please enter an integer:");
    var integer2 = prompt("Please enter a second integer:");
    console.log(Math.max(integer1, integer2));
*/

//STEP 13
/*
13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
 
Student Name	Marks
Ursula	80
Paul	77
Henry	88
Tabitha	95
Lucy	68

The grades are computed as follows:

Range	Grade
<60	F
<70	D
<80	C
<90	B
<100	A
*/
/*
    var studentName = ["Ursula", "Paul", "Henry", "Tabitha", "Lucy"]; 
    var marks = [80, 77, 88, 95, 68]; 
    for (var x in marks) {
        if (marks[x] < 60) {
            console.log ("Student Name: " + studentName[x] + " Marks: " + marks[x] + " Grade: F");
        } else if (marks[x] < 70) {
            console.log ("Student Name: " + studentName[x] + " Marks: " + marks[x] + " Grade: D");
        } else if (marks[x] < 80) {
            console.log ("Student Name: " + studentName[x] + " Marks: " + marks[x] + " Grade: C");
        } else if (marks[x] < 90) {
            console.log ("Student Name: " + studentName[x] + " Marks: " + marks[x] + " Grade: B");
        } else {
            console.log ("Student Name: " + studentName[x] + " Marks: " + marks[x] + " Grade: A");
        }
    }
*/

// STEP 14
/*
14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
*/
/*
        for (var i = 1; i <= 15; i++) {
           if (i%2 == 0) {
                console.log(i + " is even");
            } else {
                console.log(i + " is odd");
            } 
        }
*/

// STEP 15
/*
15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/
/*
        for (var i = 1; i <= 100; i++) {
           if (i%3 == 0 && i%5 == 0) {
                console.log("FizzBuzz");
           } else if (i%3 == 0) {
                console.log("Fizz");
             } else if (i%5 == 0) {
                console.log("Buzz");             
            } else {
                console.log(i);
            } 
        }
*/
//--------------------------------------------------------------------
//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
/*
        var userChoice = confirm("Are you ready to play the game?");
        if (userChoice) {
            alert("Awesome, our hero is waiting!");
            alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");
//PLAY GAME
         var direction = prompt("Which direction would you like to head (please enter forward, left, or right).");
         direction = direction.toLowerCase();
        switch (direction) {
            case "forward":
                alert("You walk about 100 yards and safely make your way out of the cave.");
                break;
            case "left":
                alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
		          break;
            case "right":
                alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
                break;
            default:
                alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
        }
//RATE GAME
         var rating = prompt("Please rate the game on a scale of 1 to 10.");
            if (rating >5) {
                alert("Thank you, we will continue to make improvements to the game!");            
            } else {
                alert("Whatever, you weren’t very good at this game anyway");
            }
//
        } else {
            alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");        
        }
*/
//--------------------------------------------------------------------
//Part 5 - The “Coin Flip” Game (5 points)
/*

//STEP 1-7
    
        var coinFlip = Math.random();  
        var choice = window.prompt("Heads or Tails?");
        choice = choice.toLowerCase();   
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
*/

//---------------------------------------------------------------------
//Part 6 - The “Coin Flip” Game Redux (5 points)
/*
        var coinFlip;
        for (var i = 1; i <= 10; i++) {
            coinFlip = Math.round(Math.random());
           if (coinFlip) {
                console.log("Tails");
            } else {
               console.log("Heads");
            }
        }
*/

//---------------------------------------------------------------------
//Part 7 - The “Coin Flip Streak” Game (5 points)
/*

        var coinFlip;
        do {
            coinFlip = Math.round(Math.random());
           if (coinFlip) {
                console.log("Tails");
            } else {
               console.log("Heads");
            }   
        } while (coinFlip != true);
*/

//---------------------------------------------------------------------
//Part 8 – Looping a Triangle (5 points)
/*
        var triangle = "";
        for (var i = 1; i <= 7; i++) {
            triangle = triangle.concat("#");
             console.log(triangle);
        }
*/

//---------------------------------------------------------------------
//Part 9 – Odd or Even? (5 points)
/*
        for (var i = 0; i <= 15; i++) {
           if (i%2 == 0) {
                console.log(i + " is even");
            } else {
                console.log(i + " is odd");
            } 
        }
*/

