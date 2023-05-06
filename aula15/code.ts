function run() {

    // Functions
    // Rest

    function listNames(name: string, ...rest: string[]): string {
        return name + " " + rest.join(" "); // Show all names separating with space 
    }

    // let nameComplete = listNames("Jack", "Felix");
    let names = listNames("Jack", "Ana", "Joao", "Carlos");
    document.write(names);
}

function run2() {

    // Functions
    // Overload

    function join(x: any, y: any): any {
        return x + y;
    }

    // let nameComplete = listNames("Jack", "Felix");
    let name = join("Jack", "Felix");
    let r = join(10, 20);
    document.write(name);
}