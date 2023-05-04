function run(): void {

    // Interface
    function person(name: string, nickname: string) {
        return name + " " + nickname;
    }

    let name_full = person("Jack", "Felix");
    document.getElementById('info').innerHTML = name_full;
}

function run2(): void {

    // Interface 
    interface intPerson {
        name: string;
        nickname: string;
    }

    function person(data: intPerson) {
        return data.name + " " + data.nickname;
    }

    let name_full = person({ name: "Jack", nickname: "Felix" });
    document.getElementById('info').innerHTML = name_full;
}

function run3(): void {

    // Interface 
    interface intPerson {
        name?: string; // The question mark indicates this is an variable optional
        nickname?: string;
    }

    function person(data: intPerson) {

        let final = '';

        if (data.name) {
            final = data.name;
        }
        if (data.nickname) {
            final += " " + data.nickname;
        }
        return final;
    }

    let d = { name: 'Jack' };

    document.getElementById('info').innerHTML = person(d);
}

function run4(): void {

    // Interface 
    interface intCoordinates {
        x: number;
        y: number;
    }

    let position = intCoordinates = { x: 100, y: 300 };

    position.x = 500;

    document.getElementById('info').innerHTML = position.x + " - " + position.y;
}

function run4(): void {

    // Interface 
    interface intCoordinates {
        x: number;
        readonly y: number; // 'readonly' used for define variable similar an constant; variable read 
    }

    let position = intCoordinates = { x: 100, y: 300 };

    position.x = 500;

    document.getElementById('info').innerHTML = position.x + " - " + position.y;
}