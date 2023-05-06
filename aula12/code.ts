function run() {

    // Class - readonly
    class Human {
        readonly name: string;
        readonly age: number;

        constructor(n: string, a: number) {
            this.name = n;
            this.age = a;
        }
    }

    let h = new Human("Jack", 17);
    // h.name = "Joao"; // Can't define, 'cause is a read variable
    document.write(h.name + " - " + h.age);
}

function run2() {

    // Class - readonly
    class Human {
        readonly name: string;
        // readonly age: number;

        // Too can init a variable in constructor
        constructor(n: string, readonly age: number) {
            this.name = n;
        }
    }

    let h = new Human("Jack", 17);
    // h.name = "Joao"; // Can't define, 'cause is a read variable
    document.write(h.name + " - " + h.age);
}

// CLASS - ACCESSORS
function run3() {

    // Class - GET and SET
    class Human {
        private _name: string;
        private _nickname: string;

        // NAME
        // Setter
        set Name(v: string) {
            if (v != "x") {
                this._name = v;
            } else {
                this._name = "Undefined";
            }
        }

        // Getter
        get Name() {
            return this._name;
        }
    }

    let h = new Human();
    h.Name = 'x';
    document.write(h.Name);
}