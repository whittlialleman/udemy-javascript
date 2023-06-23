'use strict';

/*
/////////////////////////////////////
//Constructor Functions and the New Operator

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never create a method (function) inside of a constructor function
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // };
};

const whip = new Person('Whip', 1997);
console.log(whip);

//1. New empty object {} is created
//2. function is called, this keyword is set to the empty object {}
//3. {} is linked to prototype
//4. function automatically returns {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(whip instanceof Person);

/////////////////////////////////////
//Prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
};

whip.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(whip.__proto__);
console.log(whip.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(whip)); //true
console.log(Person.prototype.isPrototypeOf(matilda)); //true
console.log(Person.prototype.isPrototypeOf(Person)); //false - it is the prototype of the linked objects, not of itself

Person.prototype.species = "Homo Sapiens";
console.log(whip, matilda);

console.log(whip.hasOwnProperty('firstName')); //true
console.log(whip.hasOwnProperty('species')); //false

console.log(whip.__proto__); //whip prototype
console.log(whip.__proto__.__proto__); //object.prototype - top of prototype chain
console.log(whip.__proto__.__proto__.__proto__); //null

console.dir(Person.prototype.constructor);

const arr = [3,4,6,6,9,5,6,9,3];
console.log(arr.__proto__); //Array prototype
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() { //Be careful adding onto built-in prototypes - don't do this in general
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
//Coding Challenge 1

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

Car.prototype.accelerate = function() {
    const newSpeed = this.speed += 10; //could have bypassed the variable and just done this.speed in the object literal
    console.log(`${this.make} is going ${newSpeed} km/h.`);
};

Car.prototype.brake = function() {
    const newSpeed = this.speed -= 5;
    console.log(`${this.make} is going ${newSpeed} km/h.`);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.brake();
bmw.accelerate();
mercedes.brake();
mercedes.accelerate();

///////////////////////////////////////////
//ES6 Classes

//class expression
//const PersonCl = class {}

//class declaration
class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    };

    //methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }
};

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

// PersonCl.prototype.greet = function() {
//     console.log(`Hey ${this.firstName}`);
// };

jessica.greet();

//1. Classes are not hoisted
//2. Classes are first-class citizens
//3. Classes are executed in strict mode (even if it's not declared at the top of the file)

////////////////////////////////////
//Getters and Setters

const account = {
    owner: 'Whip',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    //methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    get age() {
        return 2037 - this.birthYear;
    };

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    };

    get fullName() {
        return this._fullName;
    };
};

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica.age);

const walter = new PersonCl('Walter White', 1965);

/////////////////////////////////////
//Static Methods

const Person = function(firstName, birthYear) {
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.hey = function() {
    console.log('Hey there!');
};

Person.hey();
//whip.hey(); //this doesn't work because the hey function was not added to the prototype

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    //methods will be added to .prototype property - instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    get age() {
        return 2037 - this.birthYear;
    };

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    };

    get fullName() {
        return this._fullName;
    };

    //Statid method
    static hey() {
        console.log('Hey there!');
        console.log(this);
    }
};

PersonCl.hey();

//////////////////////////////////
//Object.create

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const piper = Object.create(PersonProto);
piper.init('Piper', 1998);
piper.calcAge();

////////////////////////////////////
//Coding Challenge 2

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going ${this.speed} km/h.`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going ${this.speed} km/h.`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
};

const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.speedUS = 50;
console.log(ford);

///////////////////////////////////////
//Inheritance between classes: constructor functions

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
};

const Student = function(firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
};

//Linking prototypes
Student.prototype = Object.create(Person.prototype); //we have to create this before we add methods because it returns an empty string

Student.prototype.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);

//////////////////////////////////////
//Coding challenge 3

const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
};

const EV = function(make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
    console.log(`${this.make} is charged to ${this.charge}`);
};

EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going ${this.speed} km/h, with a charge of ${this.charge}.`);
}

const elecCar = new EV('Tesla', 120, 23);
console.log(elecCar);

elecCar.accelerate();
elecCar.chargeBattery(50);

//////////////////////////////////////
//Inheritance between classes: ES6 Classes

class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    };

    //methods will be added to .prototype property - instance methods
    calcAge() {
        console.log(2037 - this.birthYear);
    };

    greet() {
        console.log(`Hey ${this.firstName}`);
    };

    get age() {
        return 2037 - this.birthYear;
    };

    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        else alert(`${name} is not a full name!`)
    };

    get fullName() {
        return this._fullName;
    };

    //Static method
    static hey() {
        console.log('Hey there!');
        console.log(this);
    }
};

class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        //Always needs to happen first as this creates the this keyword
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}`);
    }

    calcAge() {
        console.log(`I am ${2037 - this.birthYear} years old, but as a student, I feel more like ${2037 - this.birthYear + 30}`)
    }
};

const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();

//////////////////////////////////////
//Inheritance between classes: ES6 Classes

const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);

StudentProto.init = function(firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
}

StudentProto.introduce = function() {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
}

const jay = Object.create(StudentProto);
jay.init('Jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();
*/

//////////////////////////////////
//Class example
//Encapsulation: protected properties and methods
//Encapsulation: private class fields and methods

//Public Fields, private fields, public methods, and private methods (there are also static versions of these)

class Account {
    //public fields (instances)
    locale = navigator.language;
    
    //private fields
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin; //protected property because of the _
        // this._movements = []; //protected property because of the _
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    //Public methods
    //Public interface is made up of the public methods
    getMovements() {
        return this.#movements;
    }

    deposit(val) {
        this.#movements.push(val);
        return this;
    }

    withdrawal(val) {
        this.deposit(-val);
        return this;
    }

    requestLoan(val) {
        if(this.#approveLoan(val)) {
            this.deposit(val);
            console.log('Loan Approved');
            return this;
        }
    }

    static helper() {
        console.log('Helper');
    }

    //Private methods
    #approveLoan(val) {
        return true;
    }
}

const acc1 = new Account('Whip', 'USD', 1223);
console.log(acc1);

acc1.deposit(250);
acc1.withdrawal(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
Account.helper();

//console.log(acc1.#movements); //This won't work because we made this a private field
//console.log(acc1.#pin); //This won't work because we made this a private field
//console.log(acc1.#approveLoan(100)); //This won't work because we made this a private method

//Chaining
acc1.deposit(300).deposit(500).withdrawal(35).requestLoan(25000).withdrawal(4000);
console.log(acc1.getMovements());