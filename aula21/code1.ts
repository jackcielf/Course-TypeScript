interface Person {
    name: string;
    age: number;
}

enum enumSex {
    MALE,
    FEMALE
}

class Human {
    name: string;
    sex: enumSex;

    // Methods
    walk() {
    
    }
    jump() {

    }
    speak() {
        
    }
}

export { Person, Human, enumSex }