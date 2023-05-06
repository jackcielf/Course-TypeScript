function run() {
    // Types and compatibility the types
    var a = "Jack";
    var b = 100;
    var c = true;
    var d = []; // Object
    var e = {}; // Object too
    document.write("Type variable A " + typeof (a) + "<br>");
    document.write("Type variable B " + typeof (b) + "<br>");
    document.write("Type variable C " + typeof (c) + "<br>");
    document.write("Type variable D " + typeof (d) + "<br>");
    document.write("Type variable E " + typeof (e) + "<br>");
}
function run2() {
    // Types and compatibility the types
    var a = "Jack";
    var b = 100;
    var c = true;
    var name = "Jack";
    var sense;
    (function (sense) {
        sense[sense["top"] = 0] = "top";
        sense[sense["down"] = 1] = "down";
        sense[sense["left"] = 2] = "left";
        sense[sense["right"] = 3] = "right";
    })(sense || (sense = {}));
    var s = sense.top; // Return a number '0'
    var x = sense[0]; // Return a string 'string'
    var y = [0, "Jack", 5]; // Return a string 'string'
    document.write(typeof (s));
}
function run3() {
    // Types and compatibility the types
    var Person = /** @class */ (function () {
        function Person() {
        }
        return Person;
    }());
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        return Animal;
    }());
    var x; // or let x: Person = new Person();
    var y;
    x = new Animal(); // Only possible in case the class will equals
    x = new Human(); // This can't, cause' class and interface are different
}
