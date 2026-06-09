let basicSalary = 25000;

let hra = basicSalary * 20 / 100;
let bonus = basicSalary * 10 / 100;

let totalSalary = basicSalary + hra + bonus;

let tax = totalSalary * 5 / 100;

let finalSalary = totalSalary - tax;

console.log("Basic Salary :", basicSalary);
console.log("HRA :", hra);
console.log("Bonus :", bonus);
console.log("Tax :", tax);
console.log("Final Salary :", finalSalary);

let marks = prompt("Enter Student Marks:");

if (marks >= 90 && marks <= 100) {
    console.log("Grade : A+");
}
else if (marks >= 80 && marks <= 89) {
    console.log("Grade : A");
}
else if (marks >= 70 && marks <= 79) {
    console.log("Grade : B");
}
else if (marks >= 60 && marks <= 69) {
    console.log("Grade : C");
}
else {
    console.log("Grade : Fail");
}

let username = prompt("Enter Username:");
let password = prompt("Enter Password:");

if (username === "admin") {

    if (password === "12345") {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
}

let balance = 5000;
let withdrawAmount = Number(prompt("Enter Withdrawal Amount:"));

if (withdrawAmount > balance) {
    console.log("Insufficient Balance");
} else {
    balance = balance - withdrawAmount;

    console.log("Withdrawal Success");
    console.log("Remaining Balance :", balance);
}

let purchaseAmount = Number(prompt("Enter Purchase Amount:"));
let discount = 0;

if (purchaseAmount >= 10000) {
    discount = purchaseAmount * 20 / 100;
}
else if (purchaseAmount >= 5000) {
    discount = purchaseAmount * 10 / 100;
}
else if (purchaseAmount >= 2000) {
    discount = purchaseAmount * 5 / 100;
}
else {
    discount = 0;
}

let finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);

let helmet = prompt("Do you have Helmet? (Yes/No)");
let license = prompt("Do you have License? (Yes/No)");

if (helmet === "No" && license === "No") {
    console.log("Fine : ₹3000");
}
else if (helmet === "No") {
    console.log("Fine : ₹1000");
}
else if (license === "No") {
    console.log("Fine : ₹2000");
}
else {
    console.log("No Fine");
}

let attendance = ["P", "P", "A", "P", "A", "P", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
    if (attendance[i] === "P") {
        presentDays++;
    } else if (attendance[i] === "A") {
        absentDays++;
    }
}

console.log("Present Days :", presentDays);
console.log("Absent Days :", absentDays);

let product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};

for (let key in product) {
    console.log(key + " : " + product[key]);
}


let distance = Number(prompt("Enter Distance in KM:"));
let fare = 0;

if (distance <= 5) {
    fare = distance * 20;
}
else if (distance <= 10) {
    fare = (5 * 20) + ((distance - 5) * 15);
}
else {
    fare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}

console.log("Total Fare : ₹" + fare);



let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kiran", salary: 30000 },
    { id: 3, name: "Navi", salary: 40000 }
];

console.log("Employee Details");
for (let i = 0; i < employees.length; i++) {
    console.log(
        "ID:", employees[i].id,
        "Name:", employees[i].name,
        "Salary:", employees[i].salary
    );
}


let highest = employees[0];
let lowest = employees[0];

let totalSalary1 = 0;

for (let i = 0; i < employees.length; i++) {

    if (employees[i].salary > highest.salary) {
        highest = employees[i];
    }

    if (employees[i].salary < lowest.salary) {
        lowest = employees[i];
    }

    totalSalary += employees[i].salary;
}


let totalEmployees = employees.length;


console.log("\nHighest Salary Employee");
console.log(highest);

console.log("\nLowest Salary Employee");
console.log(lowest);

console.log("\nTotal Employees :", totalEmployees);

console.log("Total Salary Expenditure :", totalSalary);