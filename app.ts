// What is a Single Page Application (SPA)?
// An application with one html page that is dynamically updated as the user interacts with the app.
// SPA's typically use AJAX to fetch data from an API and update the page without refreshing the browser.

// What is a Multi Page Application (MPA)?
// An application with multiple html pages where the server sends a new page for each user interaction.
// MPA's typically use server-side rendering to generate the html for each page.

// What are the benefits of a SPA?
// - Faster navigation
// - Better user experience
// - Less bandwidth
// - More interactivity
// - Better performance

// What are the drawbacks of a SPA?
// - SEO
// - Initial load time because of all of the JavaScript
// - Security concerns surround cross-site scripting (XSS)
// - Memory management due to the large amount of JavaScript

// What is AJAX?
// Asynchronous JavaScript and XML
// We can use AJAX to send and receive data(json or xml format) from a server without refreshing the page.

// What is TypeScript?
// Typescript is a superset of JavaScript that adds static types to the language.
// Static types help us catch errors at compile time instead of runtime.
// Compile is the process of converting TypeScript code to JavaScript code which is done by the TypeScript compiler.
// Runtime is the process of executing the Javascript code in a JavaScript engine like V8.
// Browsers cannot run TypeScript code, so we need to compile it to JavaScript first.
// TypeScript can be used to create classes, methods and variables.
// Benefits? we can find syntax errors at compile time instead of runtime (i.e. before running the code vs after).

// Declaring a variable in TypeScript using const, let, or var.
let message = "Hello, TypeScript!!!";
console.log(message);

// What are Data Types in TypeScript?
// Built-in Data Types
// - String
let fullName: string = "John"; // Error: Type '5' is not assignable to type 'string'.

// - Number
let age: number = 25;
// - Boolean
let isStudent: boolean = true;
// - Array
// - Void (no return type)
function greet(): void {
  console.log("Hello, World!"); // logging the message to console is not the same as returning a value
  return; // we are not returning any real value here
}
// - Null (no value)
let nullValue: null = null;
// - Undefined (initialized without a value)
let undefinedValue: undefined = undefined;
// - Any (any data type)
let anyValue: any = "Hello, World!";
anyValue = 5; // anyValue can be assigned to any kind of value
anyValue = true;

// Type operator
console.log(typeof fullName); // String
console.log(typeof age); // number
console.log(typeof isStudent); // boolean;

// - Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Doe"];
// - Tuples - fixed number of elements with different data types
let person: [string, number, boolean] = ["John", 25, true];

// We can compile the TypeScript code to Javascript using the tsc command after installing typescript ( npm install -g typescript)
// - Interfaces a structure/rule a class must follow

// Object oriented programming (OOP) in TypeScript
// - Classes data type
class Person {
  // Properties/variables
  name: string;
  age: number;
  isStudent: boolean;

  // Constructor - used to initialize the properties of the class
  constructor(name: string, age: number, isStudent: boolean) {
    // this keyword is used to access the properties or methods of the class
    this.name = name;
    this.age = age;
    this.isStudent = isStudent;
  }

  // Methods/functions
  displayInfo() {
    // Use template literals ( backticks & ${} ) to concatenate strings and variables
    console.log(
      `Name: ${this.name}, Age: ${this.age}, Student: ${this.isStudent}`
    );
  }
}

let Jair = new Person("Jair", 25, true);
Jair.displayInfo();
let Sharegh = new Person("Sharegh", 30, false);
Sharegh.displayInfo();
let Elon = new Person("Elon", 50, null);
Elon.displayInfo();

// - Interfaces data type - a structure/rule a class must follow
// An animal must have a name, age, and isPet property
interface Animal {
  name: string;
  age: number;
  isPet: boolean;
  sound(): void; // A method that must be implemented
}

// Creating a class that must follow the Animal interface rules
class Dog implements Animal {
  name: string;
  age: number;
  isPet: boolean;

  constructor(name: string, age: number, isPet: boolean) {
    this.name = name;
    this.age = age;
    this.isPet = isPet;
  }

  sound(): void {
    console.log("Dog: Woof! Woof!");
  }
}

// Creating an instance of the Dog class
let dog = new Dog("Buddy", 5, true);
dog.sound(); // Woof! Woof!

class Bird implements Animal {
  name: string;
  age: number;
  isPet: boolean;
  legs?: number; // ? makes the property optional
  // legs is optional because birds have 2
  constructor(name: string, age: number, isPet: boolean, legs: number = 2) {
    this.name = name;
    this.age = age;
    this.isPet = isPet;
    this.legs = 2; // default value for legs
  }

  sound() {
    console.log("Chirp! Chirp!");
  }
}

// Creating an instance of the Bird class
let bird = new Bird("Tweety", 2, true);
bird.sound(); // Chirp! Chirp!

// Inheritance - a class can inherit (extends) properties and methods from another class
// Since we extend dog, we must call super in the constructor to pass the properties to the parent class
class DogChild extends Dog implements Animal {
  legs: number;
  constructor(name: string, age: number, isPet: boolean, legs: number) {
    super(name, age, isPet); // super references the Dog constructor function
    this.legs = legs;
  }
  // overriding the sound method
  sound(): void {
    console.log("DogChild: Woo! Woo!");
  }
}

let dogChild = new DogChild("Buddy Jr.", 1, true, 4);
console.log(dogChild);
dogChild.sound(); // Woof! Woof!
