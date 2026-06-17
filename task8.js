let employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];
let highSalary = employees.filter(emp => emp.salary > 40000);
console.log(highSalary);
let firstEmployee = employees.find(emp => emp.salary > 60000);
console.log(firstEmployee);
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary:", totalSalary);

let names = employees.map(emp => emp.name);
console.log(names);

function checkAdmission(name, age, percentage) {
    if (age >= 18 && percentage >= 60) {
        return `${name} Admission Approved`;
    } else {
        return `${name} Admission Rejected`;
    }
}

console.log(checkAdmission("Rahul", 20, 75));

let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];


let totalBill = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log("Total Bill:", totalBill);
let expensive = cart.reduce((a, b) =>
    a.price > b.price ? a : b
);
console.log(expensive);
cart.forEach(item => console.log(item.product));
let signal = "red";

switch (signal) {
    case "red":
        console.log("Stop - Fine ₹1000");
        break;

    case "yellow":
        console.log("Wait - Fine ₹500");
        break;

    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


let students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

let passed = students.filter(s => s.mark >= 50);
let failed = students.filter(s => s.mark < 50);

console.log("Passed:", passed);
console.log("Failed:", failed);

let grades = students.map(s => ({
    name: s.name,
    grade: s.mark >= 90 ? "A+" :
           s.mark >= 75 ? "A" :
           s.mark >= 50 ? "B" : "Fail"
}));

console.log(grades);




function placeOrder(customerName, ...items) {
    console.log("Customer:", customerName);
    console.log("Items:", items);
    console.log("Item Count:", items.length);
}

placeOrder("Rahul", "Pizza", "Burger", "Coke");



let balance = 10000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    balance -= amount;
    return balance;
}

function checkBalance() {
    return balance;
}

console.log(deposit(2000));
console.log(withdraw(1500));
console.log(checkBalance());






let bookedSeats = [];

function bookSeat(seatNo) {
    if (!bookedSeats.includes(seatNo)) {
        bookedSeats.push(seatNo);
        console.log(`Seat ${seatNo} booked`);
    } else {
        console.log(`Seat ${seatNo} already booked`);
    }
}

bookSeat(1);
bookSeat(2);
bookSeat(1);

console.log("Booked Seats:");
for (let seat of bookedSeats) {
    console.log(seat);
}






function validateUser(username, password, email) {

    if (username.includes(" ")) {
        console.log("Username should not contain spaces");
    }

    if (password.length < 8) {
        console.log("Password must be at least 8 characters");
    }

    if (!email.includes("@")) {
        console.log("Invalid Email");
    }
}

validateUser("Rahul", "password123", "rahul@gmail.com");




fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        products.forEach(product =>
            console.log(product.title)
        );

        let costlyProducts =
            products.filter(product => product.price > 1000);

        console.log(costlyProducts);

        console.log("Total Products:",
            products.length);
    })
    .catch(error => console.log(error));



    let dob = new Date("2000-06-15");

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log("Day:", dob.getDate());
console.log("Month:", dob.getMonth() + 1);
console.log("Year:", dob.getFullYear());
console.log("Weekday:", weekdays[dob.getDay()]);




let plan = "Premium";

let benefits =
    plan === "Mobile" ? "1 Screen" :
    plan === "Basic" ? "HD Quality" :
    plan === "Standard" ? "2 Screens + Full HD" :
    plan === "Premium" ? "4 Screens + Ultra HD" :
    "Invalid Plan";

console.log(benefits);





let patients = [
    { id: 1, name: "Ravi", status: "Critical" },
    { id: 2, name: "John", status: "Stable" },
    { id: 3, name: "Rahul", status: "Critical" }
];

let critical = patients.filter(
    patient => patient.status === "Critical"
);

console.log(critical);


let patient = patients.find(
    patient => patient.id === 2
);

console.log(patient);

console.log("Total Patients:", patients.length);





let inventory1 = [
    { id: 1, product: "Laptop" }
];

let inventory2 = [
    { id: 2, product: "Mobile" }
];

let mergedInventory = [...inventory1, ...inventory2];
console.log(mergedInventory);
let { id, product } = inventory1[0];
console.log(id, product);
let updatedInventory = [
    ...mergedInventory,
    { id: 3, product: "Tablet" }
];

console.log(updatedInventory);







let group = ["Rahul", "John", "Kavin"];
group.push("David");
group.pop();
group.unshift("Admin");
group.shift();
group.splice(1, 0, "Navi");
console.log("Final Group:");
console.log(group);