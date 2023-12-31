function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(1, 2));

enum Role {
  ADMIN,
  AUTHOR,
  DEVELOPER,
}
const person: {
  name: string;
  age: number;
  hobbies: string[];
  // role: [number, string]; //tuple= fixed length array
  role: Role;
} = {
  name: "Can",
  age: 30,
  hobbies: ["cooking", "sports", "reading"],
  // role: [0, "developer"],
  role: Role.ADMIN,
};

console.log(person.name);

console.log(person.role);

//union

function combine(
  input1: number | string,
  input2: number | string, //union type
  resultTyle: "as-number" | "as-text" //literal type
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine("Max is ", 10, "as-text"));

// void: function with no return
//undefined: function with return;
