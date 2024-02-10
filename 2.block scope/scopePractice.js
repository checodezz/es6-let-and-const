/* 
1. Write a program to increment age by 1 if birthday.
 */
const isBirthday = true;
let age = 21;

if (isBirthday) {
    age += 1;
} else {
    age = 0;
}

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

/* 
2. The condition has been written to print the message. Declare all the necessary variables needed and calculate ticket price based on age. Use appropriate declarations. If the passenger age is greater than 60, then there is a 15% discount on the ticket price.
 */
// your code here
console.log("Program 2:");

const passengerAge = 90;
const ticketPrice = 100;
const discountPercentage = 0.15;
let discountedPrice = ticketPrice * discountPercentage;
let finalTicketPrice = ticketPrice - discountedPrice;

if (passengerAge > 60) {
    // discountedPrice = ticketPrice * 0.15
    console.log(`Ticket price for age greater than 60: ${finalTicketPrice}`);
} else {
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

/* 3. Declare three variables, num1, num2 and num3 and write a program to find out if third number the largest. Print appropriate message as per the values taken.
 */
console.log("Program 3:");
const num1 = 65;
const num2 = 54;
const num3 = 54;

if (num3 > num1 && num3 > num2) {
    console.log(`The third number ${num3} is largest \n`);
} else {
    console.log(`The third number ${num3} is not the largest \n`);
}

/* 
4. Define four items (Saree, Kurta, Jeans, Shoes) and their respective prices in a shopping cart. Use appropriate variable declarations. Calculate the total cart price by summing up the individual prices of all items.

Determine the delivery charge status based on the total cart price. If the total cart price is less than 1999, set an optional delivery charge of 99 and update the total cart price accordingly. If the total cart price is 1999 or more, indicate "No Delivery Charge" in the delivery charge status. Finally print the Shopping Cart with Optional Delivery Charge.
 */
console.log("Program 4:\n");
const saree = 900;
const kurta = 400;
const jeans = 500;
const shoes = 400;
let deliveryChargeStatus;
let totalCartPrice = saree + kurta + jeans + shoes;

if (totalCartPrice < 1999) {
    deliveryChargeStatus = "Additional Delivery Charge of 99 Rs";
    totalCartPrice += 99;
} else {
    deliveryChargeStatus = "No Delivery Charge";
}
console.log("Shopping Cart:");
console.log("---------------------------");
console.log(`Item: Saree, Price: ${saree}`);
console.log(`Item: Kurtta, Price: ${kurta}`);
console.log(`Item: Jeans, Price: ${jeans}`);
console.log(`Item: Shoes, Price: ${shoes}`);
console.log("---------------------------");
console.log(`Delivery Charges: ${deliveryChargeStatus}`);
console.log("---------------------------");
console.log(`Total Cart Price: ${totalCartPrice}`);

/* 
5. Declare appropriate variable and write code to check if a number is positive or negative.

If the number is greater than zero, print a message indicating that the number is positive.
If the number is less than zero, print a message indicating that the number is negative.
If the number is exactly zero, print a message indicating that the number is zero.
*/

console.log("\nProgram 5:");
const number = 9;

if (number === 0) {
    console.log("The number is zero");
} else if (number < 0) {
    console.log("The number is negative");
} else if (number > 0) {
    console.log("The number is positive");
} else {
    console.log("enter a nummber");
}

/* 
6. Find the students with highest marks. Declare three variables marks1, marks2 and marks3 to represent the marks of three students. Assign them the values 85, 90, and 78, respectively. Declare three variables for student names student1, student2 and student3. Assign them the values Rahul, Priya, and Tina, respectively.

If student1 has the highest marks, print a message to the console indicating that student 1 has the highest marks, in the following format: "Rahul has the highest marks: {marks1}". Print similar message if any other student has highest marks. 
*/
console.log("\nProgram 6:");

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tina";

if (marks1 > marks2 && marks1 > marks3) {
    console.log(`${student1}, scored the highest marks`);
} else if (marks2 > marks1 && marks2 > marks3) {
    console.log(`${student2}, scored the highest marks`);
} else {
    console.log(`${student3}, scored the highest marks`);
}


