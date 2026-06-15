
let employeeName = "Rahul";
let salary = 30000;
let experience = 4;

let bonus = 0;

if (experience >= 5) {
    bonus = salary * 0.20;
} else if (experience >= 2) {
    bonus = salary * 0.10;
} else {
    bonus = salary * 0.05;
}


let finalSalary = salary + bonus;

console.log("Employee Name :", employeeName);
console.log("Salary :", salary);
console.log("Experience :", experience, "Years");
console.log("Bonus :", bonus);
console.log("Final Salary :", finalSalary);


let studentName = "Sundar";
let age = 18;
let percentage = 75;


if (age >= 17) {
    if (percentage >= 60) {
        console.log("Student Name :", studentName);
        console.log("Admission Approved");
    } else {
        console.log("Student Name :", studentName);
        console.log("Admission Rejected");
    }
} else {
    console.log("Student Name :", studentName);
    console.log("Admission Rejected");
}



let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Selection");
}



let students = [
    "Rahul",
    "Kiran",
    "Sundar",
    "Naveen",
    "Arjun",
    "Ravi",
    "Manoj",
    "Deepak",
    "Vikas",
    "Ajay"
];


console.log("Student List:");
for (let student of students) {
    console.log(student);
}

console.log("Total Students :", students.length);


let cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];


console.log("Products in Cart:");
for (let item of cart) {
    console.log(item.product);
}


let total = 0;

for (let item of cart) {
    total += item.price;
}

console.log("Total Cart Value :", total);

let expensiveProduct = cart[0];

for (let item of cart) {
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Most Expensive Product :", expensiveProduct.product);
console.log("Price :", expensiveProduct.price);


let balance = 10000;


function deposit(amount) {
    balance += amount;
    console.log("Deposited :", amount);
}


function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn :", amount);
    } else {
        console.log("Insufficient Balance");
    }
}


function checkBalance() {
    console.log("Current Balance :", balance);
}


checkBalance();

deposit(5000);
checkBalance();

withdraw(3000);
checkBalance();




let age1 = 25;


if (age < 5) {
    console.log("Ticket Price : Free Ticket");
}
else if (age >= 5 && age < 18) {
    console.log("Ticket Price : ₹100");
}
else if (age >= 18 && age <= 60) {
    console.log("Ticket Price : ₹200");
}
else {
    console.log("Ticket Price : ₹120");
}





let purchaseAmount = 6000;

let discount = 0;
let finalAmount = 0;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 0.20;
}
else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 0.10;
}
else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 0.05;
}
else {
    discount = 0;
}

finalAmount = purchaseAmount - discount;

console.log("Original Amount :", purchaseAmount);
console.log("Discount :", discount);
console.log("Final Amount :", finalAmount);


let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

console.log("Original Inventory:");
console.log(inventory);


inventory.push("Bread");
inventory.push("Butter");


inventory.shift();


inventory.pop();


if (inventory.includes("Milk")) {
    console.log("Milk exists in inventory");
} else {
    console.log("Milk does not exist in inventory");
}

console.log("Final Inventory:");
console.log(inventory);

let patient = {
    patientName: "Ravi Kumar",
    age: 45,
    disease: "Fever",
    doctor: "Dr. Sharma"
};


console.log("Patient Details:");

for (let key in patient) {
    console.log(key + " : " + patient[key]);
}

let { patientName, age2, disease, doctor } = patient;

console.log("\nExtracted Values:");
console.log("Patient Name :", patientName);
console.log("Age :", age);
console.log("Disease :", disease);
console.log("Doctor :", doctor);



function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);






function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}
let offers = cashbackOffers();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);




let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];


console.log("Employee Names:");
for (let employee of employees) {
    console.log(employee.name);
}


let totalSalary = 0;

for (let employee of employees) {
    totalSalary += employee.salary;
}

console.log("Total Salary Expense :", totalSalary);

let highestSalaryEmployee = employees[0];

for (let employee of employees) {
    if (employee.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = employee;
    }
}

console.log("Highest Salary Employee :", highestSalaryEmployee.name);
console.log("Salary :", highestSalaryEmployee.salary);




let availableSeats = 50;

function bookSeats(seatsRequired) {
    if (seatsRequired <= availableSeats) {
        availableSeats -= seatsRequired;

        console.log("Booking Successful");
        console.log("Seats Booked :", seatsRequired);
        console.log("Available Seats :", availableSeats);
    } else {
        console.log("Booking Rejected");
        console.log("Seats Unavailable");
    }
}
bookSeats(10);
bookSeats(15);
bookSeats(30);



let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 3000
};


let selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

let totalAmount = 0;

console.log("Selected Products:");

for (let product of selectedProducts) {
    console.log(product);
    totalAmount += products[product];
}

let gst = totalAmount * 0.18;


let finalBill = totalAmount + gst;

console.log("Total Amount : ₹" + totalAmount);
console.log("GST (18%) : ₹" + gst);
console.log("Final Bill : ₹" + finalBill);