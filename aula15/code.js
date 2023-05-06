function run() {
    // Functions
    // Rest
    function listNames(name) {
        var rest = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            rest[_i - 1] = arguments[_i];
        }
        return name + " " + rest.join(" "); // Show all names separating with space 
    }
    // let nameComplete = listNames("Jack", "Felix");
    var names = listNames("Jack", "Ana", "Joao", "Carlos");
    document.write(names);
}
function run2() {
    // Functions
    // Overload
    function join(x, y) {
        return x + y;
    }
    // let nameComplete = listNames("Jack", "Felix");
    var name = join("Jack", "Felix");
    var r = join(10, 20);
    document.write(name);
}
