// type User ={
function getldest(x) {
    return x.sort(function (a, b) { return a.age - b.age; })[0];
}
var person = [{ age: 30 }, { age: 34 }, { age: 38 }, { age: 30 }];
var players = [{ name: "ram", age: 30 },
    { name: "ramesh", age: 34 },
    { name: "rohit", age: 38 },
    { name: "rahul", age: 30 }];
console.log(getldest(person));
