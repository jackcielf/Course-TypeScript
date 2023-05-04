function run(): void {

    // Spread
    let names_1 = ['Jack', 'Felix'];
    let names_2 = ['Joao', 'Ribeiro'];
    let names_full = ['Ana', ...names_1, 'Clara', ...names_2];

    document.write(JSON.stringify(names_full));
}

function run2(): void {

    // Spread
    let person = {
        name: "Jack",
        nickname: "Felix",
        age: 17
    };

    let new_person = {
        ...person,
        profission: "Programmer"
    };

    document.getElementById('info')?.innerHTML = new_person.name;
}