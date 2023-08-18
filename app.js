function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["AUTHOR"] = 1] = "AUTHOR";
    Role[Role["DEVELOPER"] = 2] = "DEVELOPER";
})(Role || (Role = {}));
var person = {
    name: "Can",
    age: 30,
    hobbies: ["cooking", "sports", "reading"],
    // role: [0, "developer"],
    role: Role.ADMIN,
};
console.log(person.name);
console.log(person.role);
//union
function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
console.log(combine("Max is ", 10));
