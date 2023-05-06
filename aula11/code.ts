// Variable private
function run() {

    // Class - modifiers
    class Human {
        private name: string; // Only the constructor has access

        constructor(n: string) {
            this.name = n;
        }

        public speak(text: string) {
            return `I, ${this.name}, say ${text}`;
        }
    }

    let person = new Human('Jack');
    document.write(person.speak("hello"));
    // person.name = "Joao"; // Does not allow, only the constructor has access
}

// Method end variable private
function run2() {

    // Class - modifiers
    class Human {
        private name: string; // Only the constructor has access

        constructor(n: string) {
            this.name = n;
        }

        private speak(text: string) {
            return `I, ${this.name}, say ${text}`;
        }

        // A private method can only be changed by another method (public)
        public shout() {
            return this.speak("Hellooo");
        }
    }

    let person = new Human('Jack');
    document.write(person.shout());
    // person.name = "Joao"; // Does not allow, only the constructor has access
}

// Class derivate other
function run3() {

    // Class - modifiers
    class Human {
        protected name: string; // Only the constructor has access

        constructor(n: string) {
            this.name = n;
        }
    }

    class Man extends Human {
        setName(v: string) {
            this.name = v;
        }

        getName() {
            return this.name;
        }
    }

    let x = new Human("Joao");

    let m = new Man("Jack");
    m.setName("David");
    let s = m.getName();

    document.write(s);
}