let students = [
    { id: 1, name: "Rahul", department: "CSE", mark: 95 },
    { id: 2, name: "Kiran", department: "ECE", mark: 82 },
    { id: 3, name: "Navi", department: "MECH", mark: 67 },
    { id: 4, name: "Priya", department: "CIVIL", mark: 45 },
    { id: 5, name: "Arun", department: "IT", mark: 78 }
];

function printStudentDetails(student) {
    console.log("ID:", student.id);
    console.log("Name:", student.name);
    console.log("Department:", student.department);
    console.log("Mark:", student.mark);
    console.log("--------------------");
}

console.log("Student Names:");
for (let student of students) {
    console.log(student.name);
}

let totalMarks = 0;

for (let student of students) {
    totalMarks += student.mark;
}

console.log("Total Marks:", totalMarks);

console.log("Students Scored Above 80:");

for (let student of students) {
    if (student.mark > 80) {
        console.log(student.name);
    }
}

console.log("Student Grades:");

for (let student of students) {
    let grade;

    if (student.mark >= 90) {
        grade = "A";
    } else if (student.mark >= 75) {
        grade = "B";
    } else if (student.mark >= 50) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    console.log(student.name + " : " + grade);
}

console.log("Student Details:");

for (let student of students) {
    printStudentDetails(student);
}


let employees = [
    { id: 1, name: "Rahul", salary: 25000, department: "HR" },
    { id: 2, name: "Kiran", salary: 35000, department: "IT" },
    { id: 3, name: "Navi", salary: 45000, department: "Finance" },
    { id: 4, name: "Priya", salary: 28000, department: "Marketing" },
    { id: 5, name: "Arun", salary: 50000, department: "IT" }
];


console.log("Employee Names:");

for (let employee of employees) {
    console.log(employee.name);
}
let totalSalary = 0;

for (let employee of employees) {
    totalSalary += employee.salary;
}

console.log("Total Company Salary Expense: ₹" + totalSalary);
console.log("Employees Earning Above ₹30,000:");

for (let employee of employees) {
    if (employee.salary > 30000) {
        console.log(employee.name + " - ₹" + employee.salary);
    }
}

console.log("Department Descriptions:");

for (let employee of employees) {
    let description;

    switch (employee.department) {
        case "HR":
            description = "Human Resources Department";
            break;

        case "IT":
            description = "Information Technology Department";
            break;

        case "Finance":
            description = "Finance and Accounts Department";
            break;

        case "Marketing":
            description = "Marketing Department";
            break;

        default:
            description = "Unknown Department";
    }

    console.log(employee.name + " : " + description);
}

function generatePayrollReport(employee, callback) {
    callback(employee);
}

function payrollReport(employee) {
    console.log(
        "Payroll Report -> ID: " + employee.id +
        ", Name: " + employee.name +
        ", Salary: ₹" + employee.salary +
        ", Department: " + employee.department
    );
}

console.log("Payroll Reports:");

for (let employee of employees) {
    generatePayrollReport(employee, payrollReport);
}


let foods = [
    { id: 1, foodName: "Chicken Biryani", price: 250, category: "Main Course" },
    { id: 2, foodName: "Burger", price: 180, category: "Fast Food" },
    { id: 3, foodName: "Pizza", price: 350, category: "Fast Food" },
    { id: 4, foodName: "Ice Cream", price: 120, category: "Dessert" },
    { id: 5, foodName: "Paneer Tikka", price: 220, category: "Starter" }
];

console.log("Food Names:");

for (let food of foods) {
    console.log(food.foodName);
}
let totalMenuValue = 0;

for (let food of foods) {
    totalMenuValue += food.price;
}

console.log("Total Menu Value: ₹" + totalMenuValue);

console.log("Foods Above ₹200:");

for (let food of foods) {
    if (food.price > 200) {
        console.log(food.foodName + " - ₹" + food.price);
    }
}

console.log("Category Descriptions:");

for (let food of foods) {
    let description;

    switch (food.category) {
        case "Main Course":
            description = "Full Meal Item";
            break;

        case "Fast Food":
            description = "Quick Service Food";
            break;

        case "Dessert":
            description = "Sweet Dish";
            break;

        case "Starter":
            description = "Appetizer Item";
            break;

        default:
            description = "Unknown Category";
    }

    console.log(food.foodName + " : " + description);
}

function placeOrder(food, callback) {
    callback(food);
}

function orderConfirmation(food) {
    console.log(
        "Order Confirmed -> " +
        food.foodName +
        " | Price: ₹" +
        food.price
    );
}

console.log("Order Confirmations:");

for (let food of foods) {
    placeOrder(food, orderConfirmation);
}


let movies = [
    {
        movieName: "Leo",
        ticketPrice: 250,
        availableSeats: 50,
        language: "Tamil"
    },
    {
        movieName: "Kalki 2898 AD",
        ticketPrice: 300,
        availableSeats: 0,
        language: "Telugu"
    },
    {
        movieName: "KGF Chapter 2",
        ticketPrice: 200,
        availableSeats: 30,
        language: "Kannada"
    },
    {
        movieName: "Jawan",
        ticketPrice: 220,
        availableSeats: 15,
        language: "Hindi"
    },
    {
        movieName: "Avatar",
        ticketPrice: 350,
        availableSeats: 25,
        language: "English"
    }
];

console.log("Movie Names:");

for (let movie of movies) {
    console.log(movie.movieName);
}


let totalSeats = 0;

for (let movie of movies) {
    totalSeats += movie.availableSeats;
}

console.log("Total Available Seats:", totalSeats);


console.log("Booking Status:");

for (let movie of movies) {
    if (movie.availableSeats > 0) {
        console.log(movie.movieName + " : Booking Available");
    } else {
        console.log(movie.movieName + " : House Full");
    }
}

console.log("Movie Language Details:");

for (let movie of movies) {
    let description;

    switch (movie.language) {
        case "Tamil":
            description = "Tamil Language Movie";
            break;

        case "Telugu":
            description = "Telugu Language Movie";
            break;

        case "Kannada":
            description = "Kannada Language Movie";
            break;

        case "Hindi":
            description = "Hindi Language Movie";
            break;

        case "English":
            description = "English Language Movie";
            break;

        default:
            description = "Unknown Language";
    }

    console.log(movie.movieName + " : " + description);
}

function bookTicket(movie, callback) {
    callback(movie);
}

function bookingConfirmation(movie) {
    if (movie.availableSeats > 0) {
        console.log(
            "Booking Confirmed -> " +
            movie.movieName +
            " | Ticket Price: ₹" +
            movie.ticketPrice
        );
    } else {
        console.log(
            "Booking Failed -> " +
            movie.movieName +
            " | No Seats Available"
        );
    }
}

console.log("Booking Confirmations:");

for (let movie of movies) {
    bookTicket(movie, bookingConfirmation);
}



let patients = [
    {
        patientId: 1,
        patientName: "Ramesh",
        age: 65,
        disease: "Heart"
    },
    {
        patientId: 2,
        patientName: "Suresh",
        age: 45,
        disease: "Skin"
    },
    {
        patientId: 3,
        patientName: "Priya",
        age: 72,
        disease: "Eye"
    },
    {
        patientId: 4,
        patientName: "Kiran",
        age: 58,
        disease: "Bone"
    },
    {
        patientId: 5,
        patientName: "Anitha",
        age: 68,
        disease: "Heart"
    }
];


console.log("Patient Names:");

for (let patient of patients) {
    console.log(patient.patientName);
}

let totalPatients = 0;

for (let patient of patients) {
    totalPatients++;
}

console.log("Total Patients:", totalPatients);


console.log("Patients Above Age 60:");

for (let patient of patients) {
    if (patient.age > 60) {
        console.log(patient.patientName + " - Age: " + patient.age);
    }
}


console.log("Disease Departments:");

for (let patient of patients) {
    let department;

    switch (patient.disease) {
        case "Heart":
            department = "Cardiology Department";
            break;

        case "Skin":
            department = "Dermatology Department";
            break;

        case "Eye":
            department = "Ophthalmology Department";
            break;

        case "Bone":
            department = "Orthopedics Department";
            break;

        default:
            department = "General Medicine Department";
    }

    console.log(patient.patientName + " : " + department);
}

function bookAppointment(patient, callback) {
    callback(patient);
}

function appointmentConfirmation(patient) {
    console.log(
        "Appointment Confirmed -> ID: " +
        patient.patientId +
        ", Name: " +
        patient.patientName +
        ", Department: " +
        patient.disease
    );
}

console.log("Appointment Confirmations:");

for (let patient of patients) {
    bookAppointment(patient, appointmentConfirmation);
}


let books = [
    {
        bookId: 1,
        bookName: "JavaScript Basics",
        author: "John Smith",
        price: 450,
        category: "Programming"
    },
    {
        bookId: 2,
        bookName: "Python Complete Guide",
        author: "David Miller",
        price: 650,
        category: "Programming"
    },
    {
        bookId: 3,
        bookName: "Wings of Fire",
        author: "A.P.J Abdul Kalam",
        price: 550,
        category: "Biography"
    },
    {
        bookId: 4,
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        price: 350,
        category: "Novel"
    },
    {
        bookId: 5,
        bookName: "Data Structures",
        author: "Mark Allen",
        price: 700,
        category: "Education"
    }
];

console.log("Book Names:");

for (let book of books) {
    console.log(book.bookName);
}


let totalBookValue = 0;

for (let book of books) {
    totalBookValue += book.price;
}

console.log("Total Book Value: ₹" + totalBookValue);
console.log("Books Above ₹500:");

for (let book of books) {
    if (book.price > 500) {
        console.log(book.bookName + " - ₹" + book.price);
    }
}

console.log("Book Categories:");

for (let book of books) {
    let description;

    switch (book.category) {
        case "Programming":
            description = "Software Development Books";
            break;

        case "Biography":
            description = "Life History Books";
            break;

        case "Novel":
            description = "Fiction Story Books";
            break;

        case "Education":
            description = "Academic Learning Books";
            break;

        default:
            description = "General Category";
    }

    console.log(book.bookName + " : " + description);
}
function issueBook(book) {
    console.log(
        "Book Issued Successfully -> " +
        book.bookName +
        " by " +
        book.author
    );
}

console.log("Issued Books:");

for (let book of books) {
    issueBook(book);
}



let products = [
    {
        productId: 1,
        productName: "Laptop",
        price: 50000,
        stock: 5
    },
    {
        productId: 2,
        productName: "Mobile",
        price: 25000,
        stock: 15
    },
    {
        productId: 3,
        productName: "Headphones",
        price: 2000,
        stock: 8
    },
    {
        productId: 4,
        productName: "Smart Watch",
        price: 5000,
        stock: 20
    },
    {
        productId: 5,
        productName: "Keyboard",
        price: 1500,
        stock: 7
    }
];

console.log("Product List:");

for (let product of products) {
    console.log(product.productName);
}


let inventoryValue = 0;

for (let product of products) {
    inventoryValue += product.price * product.stock;
}

console.log("Total Inventory Value: ₹" + inventoryValue);


console.log("Products with Stock Less Than 10:");

for (let product of products) {
    if (product.stock < 10) {
        console.log(product.productName + " - Stock: " + product.stock);
    }
}

console.log("Stock Status:");

for (let product of products) {
    let status;

    if (product.stock === 0) {
        status = "Out of Stock";
    } else if (product.stock < 10) {
        status = "Low Stock";
    } else {
        status = "In Stock";
    }

    console.log(product.productName + " : " + status);
}

function generateReport(product, callback) {
    callback(product);
}

function productReport(product) {
    console.log(
        "Product ID: " + product.productId +
        " | Name: " + product.productName +
        " | Price: ₹" + product.price +
        " | Stock: " + product.stock
    );
}

console.log("Product Reports:");

for (let product of products) {
    generateReport(product, productReport);
}


let applicants = [
    {
        name: "Rahul",
        age: 19,
        percentage: 85,
        department: "CSE"
    },
    {
        name: "Priya",
        age: 17,
        percentage: 92,
        department: "ECE"
    },
    {
        name: "Kiran",
        age: 20,
        percentage: 58,
        department: "MECH"
    },
    {
        name: "Anitha",
        age: 18,
        percentage: 75,
        department: "CIVIL"
    },
    {
        name: "Arun",
        age: 21,
        percentage: 65,
        department: "IT"
    }
];

console.log("Applicant Names:");

for (let applicant of applicants) {
    console.log(applicant.name);
}

let eligibleCount = 0;

console.log("Eligibility Status:");

for (let applicant of applicants) {

    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(applicant.name + " : Eligible");
        eligibleCount++;
    } else {
        console.log(applicant.name + " : Not Eligible");
    }

}

console.log("Total Eligible Students:", eligibleCount);
console.log("Department Details:");

for (let applicant of applicants) {

    let departmentName;

    switch (applicant.department) {

        case "CSE":
            departmentName = "Computer Science Engineering";
            break;

        case "ECE":
            departmentName = "Electronics and Communication Engineering";
            break;

        case "MECH":
            departmentName = "Mechanical Engineering";
            break;

        case "CIVIL":
            departmentName = "Civil Engineering";
            break;

        case "IT":
            departmentName = "Information Technology";
            break;

        default:
            departmentName = "Unknown Department";
    }

    console.log(applicant.name + " : " + departmentName);
}

function admissionProcess(applicant, callback) {
    callback(applicant);
}

function admissionResult(applicant) {

    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(
            "Admission Approved -> " +
            applicant.name +
            " (" +
            applicant.department +
            ")"
        );
    } else {
        console.log(
            "Admission Rejected -> " +
            applicant.name
        );
    }

}

console.log("Admission Results:");

for (let applicant of applicants) {
    admissionProcess(applicant, admissionResult);
}



let passengers = [
    {
        passengerId: 1,
        name: "Rahul",
        seatNumber: 1,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 2,
        name: "Priya",
        seatNumber: 2,
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 3,
        name: "Kiran",
        seatNumber: 5,
        ticketPrice: 350,
        busType: "Non-AC"
    },
    {
        passengerId: 4,
        name: "Anitha",
        seatNumber: 8,
        ticketPrice: 700,
        busType: "Sleeper"
    },
    {
        passengerId: 5,
        name: "Arun",
        seatNumber: 10,
        ticketPrice: 700,
        busType: "Sleeper"
    }
];


console.log("Passenger Names:");

for (let passenger of passengers) {
    console.log(passenger.name);
}


let totalCollection = 0;

for (let passenger of passengers) {
    totalCollection += passenger.ticketPrice;
}

console.log("Total Collection: ₹" + totalCollection);


console.log("Occupied Seats:");

for (let passenger of passengers) {
    console.log(
        "Seat No: " +
        passenger.seatNumber +
        " occupied by " +
        passenger.name
    );
}

console.log("Bus Type Details:");

for (let passenger of passengers) {

    let description;

    switch (passenger.busType) {

        case "AC":
            description = "Air Conditioned Bus";
            break;

        case "Non-AC":
            description = "Non Air Conditioned Bus";
            break;

        case "Sleeper":
            description = "Sleeper Coach Bus";
            break;

        default:
            description = "Unknown Bus Type";
    }

    console.log(passenger.name + " : " + description);
}

function bookTicket(passenger, callback) {
    callback(passenger);
}

function ticketConfirmation(passenger) {
    console.log(
        "Ticket Confirmed -> ID: " +
        passenger.passengerId +
        ", Name: " +
        passenger.name +
        ", Seat No: " +
        passenger.seatNumber +
        ", Fare: ₹" +
        passenger.ticketPrice
    );
}

console.log("Ticket Confirmations:");

for (let passenger of passengers) {
    bookTicket(passenger, ticketConfirmation);
}




let mobiles = [
    {
        brand: "Samsung",
        model: "Galaxy S24",
        price: 75000,
        stock: 5
    },
    {
        brand: "Apple",
        model: "iPhone 15",
        price: 80000,
        stock: 3
    },
    {
        brand: "OnePlus",
        model: "OnePlus 12",
        price: 65000,
        stock: 7
    },
    {
        brand: "Xiaomi",
        model: "Redmi Note 13",
        price: 18000,
        stock: 10
    },
    {
        brand: "Realme",
        model: "Realme Narzo",
        price: 15000,
        stock: 8
    }
];


console.log("Mobile List:");

for (let mobile of mobiles) {
    console.log(mobile.brand + " " + mobile.model);
}


let totalStockValue = 0;

for (let mobile of mobiles) {
    totalStockValue += mobile.price * mobile.stock;
}

console.log("Total Stock Value: ₹" + totalStockValue);

console.log("Mobiles Above ₹20,000:");

for (let mobile of mobiles) {
    if (mobile.price > 20000) {
        console.log(
            mobile.brand +
            " " +
            mobile.model +
            " - ₹" +
            mobile.price
        );
    }
}

console.log("Brand Categories:");

for (let mobile of mobiles) {

    let category;

    switch (mobile.brand) {

        case "Samsung":
            category = "Premium Android Brand";
            break;

        case "Apple":
            category = "Premium iOS Brand";
            break;

        case "OnePlus":
            category = "Flagship Android Brand";
            break;

        case "Xiaomi":
            category = "Budget Android Brand";
            break;

        case "Realme":
            category = "Value for Money Brand";
            break;

        default:
            category = "Unknown Brand";
    }

    console.log(
        mobile.brand + " : " + category
    );
}
function generateSalesReport(mobile, callback) {
    callback(mobile);
}

function salesReport(mobile) {
    console.log(
        "Sales Report -> Brand: " +
        mobile.brand +
        ", Model: " +
        mobile.model +
        ", Price: ₹" +
        mobile.price +
        ", Stock: " +
        mobile.stock
    );
}

console.log("Sales Reports:");

for (let mobile of mobiles) {
    generateSalesReport(mobile, salesReport);
}