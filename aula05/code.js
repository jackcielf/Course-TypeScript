// Array
function run() {
    var _a;
    var name = (_a = ["Jack", "Soares"], string = _a[0], string = _a[1], _a);
    document.getElementById('info').innerHTML = name[0];
}
function run2() {
    var RGB;
    (function (RGB) {
        RGB[RGB["red"] = 0] = "red";
        RGB[RGB["green"] = 1] = "green";
        RGB[RGB["blue"] = 2] = "blue";
    })(RGB || (RGB = {})); // Creating a type variable
    var name = RGB[2];
    document.getElementById('info').innerHTML = name;
}
function run3() {
    var RGB;
    (function (RGB) {
        RGB[RGB["red"] = 10] = "red";
        RGB[RGB["green"] = 11] = "green";
        RGB[RGB["blue"] = 12] = "blue";
    })(RGB || (RGB = {}));
    var color = RGB.blue;
    document.getElementById('info').innerHTML = color.toString();
}
function run4() {
    // Victory = 3 pontos
    // Tie = 1 pontos
    // Defeat = 0 pontos
    var Score;
    (function (Score) {
        Score[Score["Defeat"] = 0] = "Defeat";
        Score[Score["Tie"] = 1] = "Tie";
        Score[Score["Victory"] = 3] = "Victory";
    })(Score || (Score = {}));
    var result = Score.Victory;
    document.getElementById('info').innerHTML = result.toString();
}
function run5() {
    var value = ["Jack", 17, false];
    value[0] = 2023;
    document.getElementById('info').innerHTML = value[0];
}
