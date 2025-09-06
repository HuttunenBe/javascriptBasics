// JSON.stringify(obj) → convert object/array to string

interface Persona {
  name: string;
  age: number;
}

const objectJson: Persona = { name: "Antero", age: 27 };

const jsonString: string = JSON.stringify(objectJson);
console.log(jsonString); // '{"name":"Antero","age":27}' json format 

// Parse - Convert back 

const jsonString2: string = '{"name":"Antero","age":27}';

const objectJson2: Persona = JSON.parse(jsonString2);
console.log(objectJson2); // { name: 'Antero', age: 27 }
