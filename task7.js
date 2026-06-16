

let signalColor = prompt("Enter Signal Color (Red, Yellow, Green):");

switch (signalColor.toLowerCase()) {
    case "red":
        console.log("Action: Stop");
        break;

    case "yellow":
        console.log("Action: Get Ready");
        break;

    case "green":
        console.log("Action: Go");
        break;

    default:
        console.log("Action: Invalid Signal");
}
for(let i = 1; i <= 30; i++) {
    console.log("Employee " + i + " Present");
}
let balance = 10000;

while(balance > 0) {
    balance -= 500;
    console.log("Remaining Balance: ₹" + balance);
}
let age = 18;
let percentage = 75;
let entranceExamPassed = true;

if(age >= 18) {
    if(percentage >= 70) {
        if(entranceExamPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Rejected: Percentage Below 70");
    }
} else {
    console.log("Rejected: Age Below 18");
}
function deliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(
        "Hello " + customerName +
        ", your order of " + foodItem +
        " will be delivered to " + deliveryAddress
    );
}

deliveryStatus("Rahul", "Pizza", "Chennai");
function calculateSalary() {
    return 30000;
}

function calculateBonus(salary) {
    return salary + (salary * 10 / 100);
}

let salary = calculateSalary();
let finalSalary = calculateBonus(salary);

console.log("Salary:", salary);
console.log("Final Salary:", finalSalary);
function applyDiscount(amount, callback) {
    let discountedAmount = amount - (amount * 10 / 100);
    callback(discountedAmount);
}

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + finalAmount);
}

applyDiscount(5000, generateInvoice);
function* offers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offer = offers();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
let scienceStudents = ["Rahul", "Kiran", "Ajay"];
let commerceStudents = ["Priya", "Anu", "Ravi"];

let allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents);
function calculateMarks(studentName, ...marks) {
    let total = 0;

    for(let mark of marks) {
        total += mark;
    }

    console.log("Student:", studentName);
    console.log("Total Marks:", total);
}

calculateMarks("Rahul", 80, 90, 85, 95, 88);
let employee = {
    name: "Rahul",
    department: "Development",
    salary: 50000,
    experience: 3
};

let {name, department, salary1, experience} = employee;

console.log(name);
console.log(department);
console.log(salary);
console.log(experience);
let products = [
    {name:"Laptop", price:50000, category:"Electronics"},
    {name:"Mouse", price:800, category:"Electronics"},
    {name:"Mobile", price:25000, category:"Electronics"},
    {name:"Keyboard", price:1200, category:"Electronics"}
];

let premiumProducts = products.filter(product => product.price > 5000);

console.log(premiumProducts);
let customers = [
    {name:"Rahul", purchase:30000},
    {name:"Kiran", purchase:60000},
    {name:"Ajay", purchase:70000}
];

let premiumCustomer = customers.find(
    customer => customer.purchase > 50000
);

console.log(premiumCustomer);
let expenses = [10000, 15000, 25000, 5000];

let totalExpense = expenses.reduce(
    (total, expense) => total + expense,
    0
);

console.log("Total Expense: ₹" + totalExpense);
let players = [20, 25, 22, 19, 30];

let result = players.every(age => age > 18);

console.log(result);
let candidates = [
    {name:"Rahul", skill:"Java"},
    {name:"Kiran", skill:"React"},
    {name:"Ajay", skill:"Python"}
];

let reactDeveloper = candidates.some(
    candidate => candidate.skill === "React"
);

console.log(reactDeveloper);
let mobile = "9876543210";

if(
    mobile.length === 10 &&
    (mobile.startsWith("6") ||
     mobile.startsWith("7") ||
     mobile.startsWith("8") ||
     mobile.startsWith("9"))
) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}
let title = "Learn JavaScript Complete Course";

let slug = title.toLowerCase().split(" ").join("-");

console.log(slug);
let employees = [
    {name:"Rahul", salary:30000},
    {name:"Kiran", salary:50000},
    {name:"Ajay", salary:40000}
];


employees.sort((a, b) => b.salary - a.salary);
console.log(employees);


employees.sort((a, b) => a.salary - b.salary);
console.log(employees);
let movies = ["Leo", "Jailer", "Vikram", "Master"];

let bookingIds = movies.map(
    (movie, index) => ({
        movieName: movie,
        bookingId: "MOV" + (index + 1)
    })
);

console.log(bookingIds);