// RECEIVE VALUE TYPE NUMBER
function run() {
    // NUMBERs
    // This way this variable just receive values type Number 
    var num1 = 10; // Number 10 in Decimal
    var num2 = 0xA; // Number 10 in Hexadecimal
    var num3 = 100; // Number 10 in Binário
    var num4 = 100; // Number 10 in Octal
    // document.getElementById('info').innerHTML = value; // Show error in type
    document.getElementById('info').innerHTML = num1.toString();
}
// RECEIVE VALUE TYPE BOOLEAN
function run2() {
    var value = false; // This way this variable just receives values the type Boolean
    document.getElementById('info').innerHTML = value.toString();
}
// TemplateStrings
function run3() {
    var primeiroNome = "Jack";
    var segundoNome = "Felix";
    var nomeCompleto = "".concat(primeiroNome, " ").concat(segundoNome);
    document.getElementById('info').innerHTML = nomeCompleto;
}
// Arrays - Ways to declare
function run4() {
    var names = ['Jackciel', 'Ana', 'Joao'];
    var nickname = ['Felix', 'Sousa', 'Silva'];
    document.getElementById('info').innerHTML = "".concat(names[0], " ").concat(nickname[0]);
}
/*
    - The 'innerHTML' always wait a value type String, then is necessary pass to String
    - Links the class: https://coderstoolbox.net/number/
*/ 
