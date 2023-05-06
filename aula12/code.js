function run() {
    // Class - readonly
    var Human = /** @class */ (function () {
        function Human(n, a) {
            this.name = n;
            this.age = a;
        }
        return Human;
    }());
    var h = new Human("Jack", 17);
    // h.name = "Joao"; // Can't define, 'cause is a read variable
    document.write(h.name + " - " + h.age);
}
function run2() {
    // Class - readonly
    var Human = /** @class */ (function () {
        // readonly age: number;
        // Too can init a variable in constructor
        function Human(n, age) {
            this.age = age;
            this.name = n;
        }
        return Human;
    }());
    var h = new Human("Jack", 17);
    // h.name = "Joao"; // Can't define, 'cause is a read variable
    document.write(h.name + " - " + h.age);
}
// CLASS - ACCESSORS
function run3() {
    // Class - GET and SET
    var Human = /** @class */ (function () {
        function Human() {
        }
        Object.defineProperty(Human.prototype, "Name", {
            // Getter
            get: function () {
                return this._name;
            },
            // NAME
            // Setter
            set: function (v) {
                if (v != "x") {
                    this._name = v;
                }
                else {
                    this._name = "Undefined";
                }
            },
            enumerable: false,
            configurable: true
        });
        return Human;
    }());
    var h = new Human();
    h.Name = 'x';
    document.write(h.Name);
}
