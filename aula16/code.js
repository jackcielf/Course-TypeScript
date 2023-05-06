function run() {
    // Generics
    // function present(value: any): any {
    //     return value;
    // }
    // This is a function generic, it must be the letter T
    function present(value) {
        return value;
    }
    var final = present("Jack");
    document.write(final);
}
function run2() {
    // Generics
    // This is a function generic, it must be the letter T
    function present(value, nickname) {
        return value + " " + nickname;
    }
    var final = present("Jack", "Felix");
    document.write(final);
}
