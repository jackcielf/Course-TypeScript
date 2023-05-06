function run() {
    // Functions
    function multiply(a, b) {
        return a * b;
    }
    var result = multiply(23, 40);
    // Anonymous
    var f = function (c, d) {
        var ss = c + d;
        return ss + 1000;
    };
    var r = f(10, 30);
}
// Scope
function run2() {
    var x = 10; // Exists only in the scope of this function
    function subtraction(a, b) {
        return a - b - x;
    }
    var r = subtraction(20, 10);
    document.write(r.toString());
}
// Types
function run3() {
    function add(a, b) {
        return a + b;
    }
    var r = add(20, 10);
    document.write(r.toString());
}
function run4() {
    var addition = function (a, b) {
        return a + b;
    };
    var r = addition(20, 10);
    document.write(r.toString());
}
// Parameters
function run5() {
    function nameComplete(name, nickname) {
        var n; // or let n = "";
        if (nickname) {
            n = name + ' ' + nickname;
        }
        else {
            n = name;
        }
        return n;
    }
    document.write(nameComplete("Jack"));
}
