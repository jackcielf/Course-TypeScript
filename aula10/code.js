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
    // Class - heredity
    var Animal = /** @class */ (function () {
        function Animal(designation) {
            this.designation = designation;
        }
        Animal.prototype.move = function (meters) {
            return "I moved ".concat(meters, " meters");
        };
        return Animal;
    }());
    // The class horse inherit/herda the class animal
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(designation) {
            return _super.call(this, designation) || this;
        }
        Horse.prototype.move = function (meters) {
            // super.move();
            return "Riding for... " + _super.prototype.move.call(this, meters);
        };
        return Horse;
    }(Animal));
    var Fish = /** @class */ (function (_super) {
        __extends(Fish, _super);
        function Fish() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Fish.prototype.move = function (meters) {
            return "<br>The swim... " + _super.prototype.move.call(this, meters);
        };
        return Fish;
    }(Animal));
    var h = new Horse('Horse');
    var p = new Fish('Fish');
    document.write(h.move(200));
    document.write(p.move(50));
}
