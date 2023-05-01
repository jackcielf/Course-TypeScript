// Array
function run() {
    var name = [string, string] = ["Jack", "Soares"];

    document.getElementById('info').innerHTML = name[0];
}

function run2() {
    enum RGB { red, green, blue } // Creating a type variable

    let name: string = RGB[2];

    document.getElementById('info').innerHTML = name;
}

function run3() {
    enum RGB { red = 10, green, blue }

    let color: RGB = RGB.blue;

    document.getElementById('info').innerHTML = color.toString();
}

function run4() {
    // Victory = 3 pontos
    // Tie = 1 pontos
    // Defeat = 0 pontos

    enum Score { Defeat = 0, Tie = 1, Victory = 3 }

    let result: Score = Score.Victory;

    document.getElementById('info').innerHTML = result.toString();
}

function run5() {
    // Lets redefine the type automatically
    let value: any[] = ["Jack", 17, false];

    value[0] = 2023;

    document.getElementById('info').innerHTML = value[0];
}