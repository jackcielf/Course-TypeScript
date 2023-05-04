function run() {

    // Classe
    class veiculo {
        marca: string;
        ano: number;

        constructor(m: string, a: number) {
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