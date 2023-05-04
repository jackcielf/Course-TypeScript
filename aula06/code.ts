function run(): void {

    // Destructuring
    let values = ['Jack', 'Felix'];
    let [name, nickname] = values;
    document.getElementById('info').innerHTML = `${name} ${nickname}`;
}

function test([name, nickname]: [string, string]): string {
    return `${name} ${nickname}`;
}

/*
    - EcmaScript 5 is standard
    - Command 'tsc code --target es6' to use EcmaScript 6
*/