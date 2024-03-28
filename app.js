// What is a Single Page Application (SPA)?
// An application with one html page that is dynamically updated as the user interacts with the app.
// SPA's typically use AJAX to fetch data from an API and update the page without refreshing the browser.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var message = "Hello, TypeScript!!!";
console.log(message);
// What are Data Types in TypeScript?
// Built-in Data Types
// - String
var fullName = "John"; // Error: Type '5' is not assignable to type 'string'.
// - Number
var age = 25;
// - Boolean
var isStudent = true;
// - Array
// - Void (no return type)
function greet() {
    console.log("Hello, World!"); // logging the message to console is not the same as returning a value
    return; // we are not returning any real value here
}
// - Null (no value)
var nullValue = null;
// - Undefined (initialized without a value)
var undefinedValue = undefined;
// - Any (any data type)
var anyValue = "Hello, World!";
anyValue = 5; // anyValue can be assigned to any kind of value
anyValue = true;
// Type operator
console.log(typeof fullName); // String
console.log(typeof age); // number
console.log(typeof isStudent); // boolean;
// - Arrays
var numbers = [1, 2, 3, 4, 5];
var names = ["John", "Jane", "Doe"];
// - Tuples - fixed number of elements with different data types
var person = ["John", 25, true];
// We can compile the TypeScript code to Javascript using the tsc command after installing typescript ( npm install -g typescript)
// - Interfaces a structure/rule a class must follow
// Object oriented programming (OOP) in TypeScript
// - Classes data type
var Person = /** @class */ (function () {
    // Constructor - used to initialize the properties of the class
    function Person(name, age, isStudent) {
        // this keyword is used to access the properties or methods of the class
        this.name = name;
        this.age = age;
        this.isStudent = isStudent;
    }
    // Methods/functions
    Person.prototype.displayInfo = function () {
        // Use template literals ( backticks & ${} ) to concatenate strings and variables
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Student: ").concat(this.isStudent));
    };
    return Person;
}());
var Jair = new Person("Jair", 25, true);
Jair.displayInfo();
var Sharegh = new Person("Sharegh", 30, false);
Sharegh.displayInfo();
var Elon = new Person("Elon", 50, null);
Elon.displayInfo();
// Creating a class that must follow the Animal interface rules
var Dog = /** @class */ (function () {
    function Dog(name, age, isPet) {
        this.name = name;
        this.age = age;
        this.isPet = isPet;
    }
    Dog.prototype.sound = function () {
        console.log("Dog: Woof! Woof!");
    };
    return Dog;
}());
// Creating an instance of the Dog class
var dog = new Dog("Buddy", 5, true);
dog.sound(); // Woof! Woof!
var Bird = /** @class */ (function () {
    // legs is optional because birds have 2
    function Bird(name, age, isPet, legs) {
        if (legs === void 0) { legs = 2; }
        this.name = name;
        this.age = age;
        this.isPet = isPet;
        this.legs = 2; // default value for legs
    }
    Bird.prototype.sound = function () {
        console.log("Chirp! Chirp!");
    };
    return Bird;
}());
// Creating an instance of the Bird class
var bird = new Bird("Tweety", 2, true);
bird.sound(); // Chirp! Chirp!
// Inheritance - a class can inherit (extends) properties and methods from another class
// Since we extend dog, we must call super in the constructor to pass the properties to the parent class
var DogChild = /** @class */ (function (_super) {
    __extends(DogChild, _super);
    function DogChild(name, age, isPet, legs) {
        var _this = _super.call(this, name, age, isPet) || this; // super references the Dog constructor function
        _this.legs = legs;
        return _this;
    }
    // overriding the sound method
    DogChild.prototype.sound = function () {
        console.log("DogChild: Woo! Woo!");
    };
    return DogChild;
}(Dog));
var dogChild = new DogChild("Buddy Jr.", 1, true, 4);
console.log(dogChild);
dogChild.sound(); // Woof! Woof!
