function run() {
    // Interface
    function person(name, nickname) {
        return name + " " + nickname;
    }
    var name_full = person("Jack", "Felix");
    document.getElementById('info').innerHTML = name_full;
}
function run2() {
    function person(data) {
        return data.name + " " + data.nickname;
    }
    var name_full = person({ name: "Jack", nickname: "Felix" });
    document.getElementById('info').innerHTML = name_full;
}
