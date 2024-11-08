#! /usr/bin/env node
import inquirer from "inquirer";
//printing a welcome message to user
console.log("\n\t Welcome to Javeria's CLI - Number Guessing Game!\n\t");
// generating any randome num from 1-10 
const randomNumber = Math.floor(Math.random() * 10 + 1);
// taking input number from user
const Input = await inquirer.prompt([
    {
        name: "YourGuesedNumber",
        type: "number",
        message: "Enter your Guess Number from(1-10), and test your Luck!",
    }
]);
if (Input.YourGuesedNumber === randomNumber) {
    console.log("CONGRATULATIONS! You've guessed a correct number!");
}
else {
    console.log("OPPS! you've guessed an in-correct number, Try again!");
}
;
