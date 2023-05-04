function run() {

    // Class - heredity
    class Animal {
        designation: string;
        meters: number;

        constructor(designation: string) {
            this.designation = designation;
        }

        move(meters: number) {
            return `I moved ${meters} meters`;
        }
    }

    // The class horse inherit/herda the class animal
    class Horse extends Animal {
        constructor(designation: string) {
            super(designation);
        }

        move(meters: number) {
            // super.move();
            return "Riding for... " + super.move(meters);
        }
    }

    class Fish extends Animal {
        move(meters: number): string {
            return "<br>The swim... " + super.move(meters);
        }
    }

    let h = new Horse('Horse');
    let p = new Fish('Fish');
    document.write(h.move(200));
    document.write(p.move(50));
}