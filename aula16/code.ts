function run() {

    // Generics

    // function present(value: any): any {
    //     return value;
    // }

    // This is a function generic, it must be the letter T
    function present<T>(value: T): T {
        return value;
    }

    let final = present<string>("Jack");

    document.write(final);
}

function run2() {

    // Generics

    // This is a function generic, it must be the letter T
    function present<T>(value: T, nickname: T): T {
        return value + " " + nickname; // This error is a bug, tha code will run normally
    }

    let final = present<string>("Jack", "Felix");

    document.write(final);
}

/*
    Links: https://www.typescriptlang.org/docs/handbook/2/generics.html
*/