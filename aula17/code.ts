function run() {

    // Enums
    enum direction {
        top, // 0
        down, // 1
        left, // 2
        right  // 3
    }

    // if (key == direction.down) { }
    let sense = direction.top; // Sence will equal zero
    let sense2 = direction[2];

    document.write(sense2);
}

function run2() {

    // Enums
    enum direction {
        top, // 0
        down, // 1
        left, // 2
        right  // 3
    }

    function move(sense: direction) {
        if (sense == direction.top) {
            return "Move for top";
        }
        if (sense == direction.down) {
            return "Move for down";
        }
        if (sense == direction.left) {
            return "Move for left";
        }
        if (sense == direction.right) {
            return "Move for right";
        }
    }

    let sense = move(3);

    document.write(sense.toString());
}

function run3() {

    // Enums
    enum direction {
        top, // 0
        down, // 1
        left = 100,
        right  // 101
    }

    let sense = direction.right;

    document.write(sense.toString());
}