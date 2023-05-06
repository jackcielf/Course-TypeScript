function run() {

    // Class - static properties
    class Family_felix {
        private _name: string;
        static _nickname: string = "Felix";
        // private _nickname: string = "Felix";

        constructor(n: string) {
            // this._name = n + " - " + this._nickname;
            this._name = n + " " + Family_felix._nickname;
        }

        get Name() {
            return this._name;
        }
    }

    let familiar = new Family_felix("Jack");
    let familiar2 = new Family_felix("Joao");
    document.write(familiar2.Name);
}

// CLASS - ABSTRACT
function run2() {

    // Class - static properties
    abstract class Human {
        name: string;
        age: number;

        // abstract speak() {
        //     return "I saying";
        // }

        abstract speak(t: string): string;
    }

    class Man extends Human {
        speak(t: string) {
            return "I speaking what are man";
        }
    }

    class Woman extends Human {
        speak(t: string): string {
            return "I speaking what are woman";
        }
    } 

    let h = new Man();
    let w = new Woman();

    document.write(h.speak(""));
}

