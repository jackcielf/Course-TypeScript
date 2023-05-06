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
// Variable private
function run() {
    // Class - modifiers
    var Human = /** @class */ (function () {
        function Human(n) {
            this.name = n;
        }
        Human.prototype.speak = function (text) {
            return "I, ".concat(this.name, ", say ").concat(text);
        };
        return Human;
    }());
    var person = new Human('Jack');
    document.write(person.speak("hello"));
    // person.name = "Joao"; // Does not allow, only the constructor has access
}
// Method end variable private
function run2() {
    // Class - modifiers
    var Human = /** @class */ (function () {
        function Human(n) {
            this.name = n;
        }
        Human.prototype.speak = function (text) {
            return "I, ".concat(this.name, ", say ").concat(text);
        };
        // A private method can only be changed by another method (public)
        Human.prototype.shout = function () {
            return this.speak("Hellooo");
        };
        return Human;
    }());
    var person = new Human('Jack');
    document.write(person.shout());
    // person.name = "Joao"; // Does not allow, only the constructor has access
}
// Class derivate other
function run3() {
    // Class - modifiers
    var Human = /** @class */ (function () {
        function Human(n) {
            this.name = n;
        }
        return Human;
    }());
    var Man = /** @class */ (function (_super) {
        __extends(Man, _super);
        function Man() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Man.prototype.setName = function (v) {
            this.name = v;
        };
        Man.prototype.getName = function () {
            return this.name;
        };
        return Man;
    }(Human));
    var x = new Human("Joao");
    var m = new Man("Jack");
    m.setName("David");
    var s = m.getName();
    document.write(s);
}
