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