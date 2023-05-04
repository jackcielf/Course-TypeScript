var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function run() {
    // Spread
    var names_1 = ['Jack', 'Felix'];
    var names_2 = ['Joao', 'Ribeiro'];
    var names_full = __spreadArray(__spreadArray(__spreadArray(['Ana'], names_1, true), ['Clara'], false), names_2, true);
    document.write(JSON.stringify(names_full));
}
function run2() {
    var _a;
    // Spread
    var person = {
        name: "Jack",
        nickname: "Felix",
        age: 17
    };
    var new_person = __assign(__assign({}, person), { profission: "Programmer" });
    (_a = document.getElementById('info')) === null || _a === void 0 ? void 0 : _a.innerHTML = new_person.name;
}
