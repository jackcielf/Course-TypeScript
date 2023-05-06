function run() {
    // Enums
    var direction;
    (function (direction) {
        direction[direction["top"] = 0] = "top";
        direction[direction["down"] = 1] = "down";
        direction[direction["left"] = 2] = "left";
        direction[direction["right"] = 3] = "right"; // 3
    })(direction || (direction = {}));
    // if (key == direction.down) { }
    var sense = direction.top; // Sence will equal zero
    var sense2 = direction[2];
    document.write(sense2);
}
function run2() {
    // Enums
    var direction;
    (function (direction) {
        direction[direction["top"] = 0] = "top";
        direction[direction["down"] = 1] = "down";
        direction[direction["left"] = 2] = "left";
        direction[direction["right"] = 3] = "right"; // 3
    })(direction || (direction = {}));
    function move(sense) {
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
    var sense = move(3);
    document.write(sense.toString());
}
function run3() {
    // Enums
    var direction;
    (function (direction) {
        direction[direction["top"] = 0] = "top";
        direction[direction["down"] = 1] = "down";
        direction[direction["left"] = 100] = "left";
        direction[direction["right"] = 101] = "right"; // 101
    })(direction || (direction = {}));
    var sense = direction.right;
    document.write(sense.toString());
}
