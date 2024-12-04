function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Access the first element of the array

//Alternative solution: Modify function signature to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));