function run() {

    // Types and compatibility the types
    let a = "Jack";
    let b = 100;
    let c = true;
    let d = []; // Object
    let e = {}; // Object too

    document.write("Type variable A " + typeof (a) + "<br>");
    document.write("Type variable B " + typeof (b) + "<br>");
    document.write("Type variable C " + typeof (c) + "<br>");
    document.write("Type variable D " + typeof (d) + "<br>");
    document.write("Type variable E " + typeof (e) + "<br>");
}

function run2() {

    // Types and compatibility the types
    let a = "Jack";
    let b = 100;
    let c = true;

    let name: string = "Jack";

    enum sense {
        top, down, left, right
    }
    let s = sense.top; // Return a number '0'
    let x = sense[0]; // Return a string 'string'
    let y = [0, "Jack", 5]; // Return a string 'object'

    document.write(typeof (s));
}

function run3() {

    // Types and compatibility the types
    class Person {
        name: string;
        height: string;
    }

    class Animal {
        name: string;
        height: string;
    }

    interface Human {
        name: string;
        height: string;
    }

    let x: Person; // or let x: Person = new Person();
    let y: Animal;

    x = new Animal(); // Only possible in case the class will equals
    x = new Human(); // This can't, cause' class and interface are different
}