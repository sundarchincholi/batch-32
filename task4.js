// let age = Number(prompt("Enter your age:"));

// if (age >= 0 && age <= 12) {
//     console.log("Child");
// } else if (age >= 13 && age <= 19) {
//     console.log("Teenager");
// } else if (age >= 20 && age <= 59) {
//     console.log("Adult");
// } else if (age >= 60) {
//     console.log("Senior Citizen");
// } else {
//     console.log("Invalid Age");
// }
// let salary = Number(prompt("Enter your salary:"));
// let hike;
// let newSalary;

// if (salary < 20000) {
//     hike = salary * 0.20; // 20%
// } else if (salary <= 50000) {
//     hike = salary * 0.10; // 10%
// } else {
//     hike = salary * 0.05; // 5%
// }

// newSalary = salary + hike;

// console.log("Old Salary : " + salary);
// console.log("New Salary : " + newSalary);

// let units = Number(prompt("Enter units consumed:"));
// let bill;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = units * 7;
// } else {
//     bill = units * 10;
// }

// console.log("Units Consumed : " + units);
// console.log("Total Bill : ₹" + bill);

// let balance = 10000;
// let withdrawal = Number(prompt("Enter withdrawal amount:"));

// if (withdrawal <= balance) {
//     balance = balance - withdrawal;

//     console.log("Withdrawal Successful");
//     console.log("Remaining Balance : ₹" + balance);
// } else {
//     console.log("Insufficient Funds");
// }

// let username = prompt("Enter Username:");
// let password = prompt("Enter Password:");

// if (username === "admin" && password === "12345") {
//     console.log("Login Successful");
// } else {
//     console.log("Invalid Username or Password");
// }

// let rechargeAmount = Number(prompt("Enter recharge amount:"));

// if (rechargeAmount >= 499) {
//     console.log("Netflix Offer");
// } else if (rechargeAmount >= 299) {
//     console.log("2GB Extra Data");
// } else {
//     console.log("No Offer");
// }

// let color = prompt("Enter signal color (Red, Yellow, Green):");

// switch (color.toLowerCase()) {
//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid Signal Color");
// }

// let workingDays = Number(prompt("Enter total working days:"));
// let presentDays = Number(prompt("Enter present days:"));

// let attendancePercentage = (presentDays / workingDays) * 100;

// console.log("Attendance Percentage : " + attendancePercentage.toFixed(2) + "%");

// if (attendancePercentage >= 75) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// let ticketPrice = 500;
// let numberOfTickets = Number(prompt("Enter number of tickets:"));

// let totalAmount = ticketPrice * numberOfTickets;
// let gst = totalAmount * 0.05; 
// let finalAmount = totalAmount + gst;

// console.log("Total Amount : ₹" + totalAmount);
// console.log("GST (5%) : ₹" + gst);
// console.log("Final Amount : ₹" + finalAmount);

// let foodCost = Number(prompt("Enter Food Cost:"));
// let finalBill;

// if (foodCost > 2000) {
//     finalBill = foodCost - (foodCost * 0.10);
// } else {
//     finalBill = foodCost;
// }

// console.log("Final Bill : ₹" + finalBill);

// let age1 = Number(prompt("Enter Age:"));
// let height = Number(prompt("Enter Height:"));
// let weight = Number(prompt("Enter Weight:"));

// if (age >= 18) {
//     if (height >= 160) {
//         if (weight >= 55) {
//             console.log("Selected");
//         } else {
//             console.log("Rejected: Weight below 55");
//         }
//     } else {
//         console.log("Rejected: Height below 160");
//     }
// } else {
//     console.log("Rejected: Age below 18");
// }

// let m1 = Number(prompt("Subject 1 Marks:"));
// let m2 = Number(prompt("Subject 2 Marks:"));
// let m3 = Number(prompt("Subject 3 Marks:"));
// let m4 = Number(prompt("Subject 4 Marks:"));
// let m5 = Number(prompt("Subject 5 Marks:"));

// let total = m1 + m2 + m3 + m4 + m5;
// let percentage = total / 5;

// console.log("Total :", total);
// console.log("Percentage :", percentage);

// if (percentage >= 90) {
//     console.log("Grade : A+");
// } else if (percentage >= 80) {
//     console.log("Grade : A");
// } else if (percentage >= 70) {
//     console.log("Grade : B");
// } else if (percentage >= 60) {
//     console.log("Grade : C");
// } else {
//     console.log("Fail");
// }

// let time = Number(prompt("Enter Hour (0-23):"));

// if (time >= 6 && time < 14) {
//     console.log("Morning Shift");
// } else if (time >= 14 && time < 22) {
//     console.log("Afternoon Shift");
// } else {
//     console.log("Night Shift");
// }

// let age2 = Number(prompt("Enter Age:"));
// let salary1 = Number(prompt("Enter Salary:"));
// let experience = Number(prompt("Enter Experience (Years):"));

// if (age >= 21 && salary >= 25000 && experience >= 2) {
//     console.log("Eligible");
// } else {
//     console.log("Not Eligible");
// }

// let distance = Number(prompt("Enter Distance in KM:"));
// let fare;

// if (distance <= 5) {
//     fare = distance * 20;
// } else {
//     fare = (5 * 20) + ((distance - 5) * 15);
// }

// console.log("Total Fare : ₹" + fare);

// let num = Number(prompt("Enter a Number:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(num + " x " + i + " = " + (num * i));
// }

// let password1 = prompt("Enter Password:");

// if (password.length < 6) {
//     console.log("Weak");
// } else if (password.length <= 10) {
//     console.log("Medium");
// } else {
//     console.log("Strong");
// }


// let salary2 = Number(prompt("Enter Salary:"));
// let experience1 = Number(prompt("Enter Experience:"));

// let bonus;

// if (experience <= 2) {
//     bonus = salary * 0.05;
// } else if (experience <= 5) {
//     bonus = salary * 0.10;
// } else {
//     bonus = salary * 0.20;
// }

// console.log("Bonus : ₹" + bonus);


// let count = 10;

// while (count >= 1) {
//     console.log(count);
//     count--;
// }

// console.log("Happy New Year");

// let degree = prompt("Degree Completed? (yes/no)");
// let communication = prompt("Communication Good? (yes/no)");
// let technicalScore = Number(prompt("Technical Score:"));

// if (degree === "yes") {
//     if (communication === "yes") {
//         if (technicalScore >= 70) {
//             console.log("Selected");
//         } else {
//             console.log("Rejected: Technical Score below 70");
//         }
//     } else {
//         console.log("Rejected: Communication Skills Not Good");
//     }
// } else {
//     console.log("Rejected: Degree Not Completed");
// }