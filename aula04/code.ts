// RECEIVE VALUE TYPE NUMBER
function run() {
    // NUMBERs
        // This way this variable just receive values type Number 
    let num1: number = 10; // Number 10 in Decimal
    let num2: number = 0xA; // Number 10 in Hexadecimal
    let num3: number = 0b1100100; // Number 10 in Binário
    let num4: number = 0o144; // Number 10 in Octal
   
    // document.getElementById('info').innerHTML = value; // Show error in type
    document.getElementById('info').innerHTML = num1.toString();
}

// RECEIVE VALUE TYPE BOOLEAN
function run2() {
    let value: boolean = false; // This way this variable just receives values the type Boolean
    
    document.getElementById('info').innerHTML = value.toString();
}

// TemplateStrings
function run3() {
    let primeiroNome = "Jack";
    let segundoNome = "Felix";
    let nomeCompleto = `${primeiroNome} ${segundoNome}`;

    document.getElementById('info').innerHTML = nomeCompleto;
}

// Arrays - Ways to declare
function run4() {
    let names: string[] = ['Jackciel', 'Ana', 'Joao'];
    let nickname: Array<string> = ['Felix', 'Sousa', 'Silva'];

    document.getElementById('info').innerHTML = `${names[0]} ${nickname[0]}`;
}

/*
    - The 'innerHTML' always wait a value type String, then is necessary pass to String
    - Links the class: https://coderstoolbox.net/number/
*/