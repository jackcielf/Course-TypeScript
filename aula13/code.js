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
function run() {
    // Class - static properties
    var Family_felix = /** @class */ (function () {
        // private _nickname: string = "Felix";
        function Family_felix(n) {
            // this._name = n + " - " + this._nickname;
            this._name = n + " " + Family_felix._nickname;
        }
        Object.defineProperty(Family_felix.prototype, "Name", {
            get: function () {
                return this._name;
            },
            enumerable: false,
            configurable: true
        });
        Family_felix._nickname = "Felix";
        return Family_felix;
    }());
    var familiar = new Family_felix("Jack");
    var familiar2 = new Family_felix("Joao");
    document.write(familiar2.Name);
}
// CLASS - ABSTRACT
function run2() {
    // Class - static properties
    var Human = /** @class */ (function () {
        function Human() {
        }
        return Human;
    }());
    var Man = /** @class */ (function (_super) {
        __extends(Man, _super);
        function Man() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Man.prototype.speak = function (t) {
            return "I speaking what are man";
        };
        return Man;
    }(Human));
    var Woman = /** @class */ (function (_super) {
        __extends(Woman, _super);
        function Woman() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Woman.prototype.speak = function (t) {
            return "I speaking what are woman";
        };
        return Woman;
    }(Human));
    var h = new Man();
    var w = new Woman();
    document.write(h.speak(""));
}
