interface Human {
  name: string,
  age: number,
  gender: string,
};

const person = {
  name: "Anton",
  age: 28,
  gender: 'man',

};

const sayHi = (person: Human): string => 
`Hello, ${person.name}. You ${person.age} year and you ${person.gender}`

console.log(sayHi(person)); 

