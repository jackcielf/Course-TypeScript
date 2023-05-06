function run() {

    // Functions
    function multiply(a, b) {
        return a * b;
    }

    let result = multiply(23, 40);

    // Anonymous
    let f = function (c: number, d: number) {
        let ss = c + d;
        return ss + 1000;


    }
    let r = f(10, 30);
}

// Scope
function run2() {

    let x = 10; // Exists only in the scope of this function

    function subtraction(a, b) {
        return a - b - x;
    }

    let r = subtraction(20, 10);

    document.write(r.toString());
}

// Types
function run3() {

    function add(a: number, b: number): number {
        return a + b;
    }

    let r = add(20, 10);

    document.write(r.toString());
}

function run4() {

    let addition: (a: number, b: number) => number = function (a: number, b: number): number {
        return a + b;
    }

    let r = addition(20, 10);

    document.write(r.toString());
}

// Parameters
function run5() {

    function nameComplete(name: string, nickname: string): string {
        let n: string; // or let n = "";

        if (nickname) {
            n = name + ' ' + nickname;
        } else {
            n = name;
        }

        return n;
    }


    document.write(nameComplete("Jack"));
}