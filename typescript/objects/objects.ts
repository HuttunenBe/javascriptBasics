// Movie example

interface Movie {
  name: string;
  rating: number;
  filmLocation?: string;
  filmLenght?: number;
  director?: string;
}

const movies: Movie = {
  name: "Matrix",
  rating: 10000,
};

console.log(movies.name);
console.log(movies.rating);

// Dot & bracket notation
console.log(movies["name"]);
console.log(movies["filmLocation"]);

// Update properties
movies.name = "Star Wars";
movies.filmLocation = "New York";
movies.filmLenght = 200;

// Add & delete properties
movies.director = "Beniitta";
delete movies.director;
delete movies["director"];

// Check property existence
console.log("name" in movies);
console.log("year" in movies);

// Extract keys, values, entries
console.log(Object.keys(movies));
console.log(Object.values(movies));
console.log(Object.entries(movies));

// Object arrays

// 1. Access the first object in an array
interface Student {
  name: string;
  age: number;
  isStudent: boolean;
  grade?: number; // optional
}

const students: Student[] = [
  { name: "Juhani", age: 25, isStudent: true },
  { name: "Raul", age: 56, isStudent: false },
];

console.log(students[0]); // Juhani line full
console.log(students[1].name); // Raul

// Looping through and printing names
students.forEach(student => console.log(student.name));

// Filter objects based on a property
const activeStudents: Student[] = students.filter(student => student.isStudent);
console.log(activeStudents); // Only students with isStudent = true

// Add a new property to all objects
students.forEach(student => student.grade = 100);
console.log(students);

// Find an object by a property
const raul: Student | undefined = students.find(student => student.name === "Raul");
console.log(raul);

// Remove an object from the array
const index: number = students.findIndex(student => student.name === "Raul");
if (index !== -1) students.splice(index, 1);
console.log(students);

// Sort array of objects by age
students.sort((a, b) => a.age - b.age);
console.log(students);

// Map objects to a new array of names
const name2: string[] = students.map(student => student.name);
console.log(name2);

// Array of larger objects
interface Employee {
  id: number;
  name: string;
  age: number;
  department: string;
  salary: number;
  isFullTime: boolean;
}

const employees: Employee[] = [
  { id: 1, name: "John", age: 30, department: "HR", salary: 5000, isFullTime: true },
  { id: 2, name: "Jane", age: 25, department: "IT", salary: 6000, isFullTime: false },
  { id: 3, name: "Mike", age: 40, department: "Finance", salary: 7000, isFullTime: true },
];

// Access specific property of an employee
console.log(employees[1].department); // IT

// Update salary of a specific employee
employees[0].salary += 1000;
console.log(employees[0].salary); // 6000

// Filter full-time employees
const fullTimeEmployees: Employee[] = employees.filter(emp => emp.isFullTime);
console.log(fullTimeEmployees);

// Get total salary of all employees
const totalSalary: number = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log(totalSalary);

// Add a new employee
employees.push({ id: 4, name: "Lucy", age: 28, department: "Marketing", salary: 5500, isFullTime: true });
console.log(employees);

// Remove an employee by ID
const removeIndex: number = employees.findIndex(emp => emp.id === 2);
if (removeIndex !== -1) employees.splice(removeIndex, 1);
console.log(employees);

// Find the highest paid employee
const highestPaid: Employee = employees.reduce((prev, curr) => (curr.salary > prev.salary ? curr : prev));
console.log(highestPaid);

// Sort employees by name alphabetically
employees.sort((a, b) => a.name.localeCompare(b.name));
console.log(employees);

// Extract only employee names and salaries
const nameSalary: { name: string; salary: number }[] = employees.map(emp => ({ name: emp.name, salary: emp.salary }));
console.log(nameSalary);

// Check if any employee is under 25
const anyUnder25: boolean = employees.some(emp => emp.age < 25);
console.log(anyUnder25);
