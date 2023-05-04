function run() {
    // Classe
    class veiculo {
        constructor(m, a) {
            this.marca = m;
            this.ano = a;
        }
        mover() {
            return "Eu movi-me";
        }
    }
    let automovel = new veiculo("Ferrari", 2050);
    // automovel.ano = 2020;
    // automovel.marca = "BMW";
    document.write(automovel.marca + " " + automovel.ano);
}
