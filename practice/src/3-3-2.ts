type Animal = {
  age: number;
}

type Human = {
  age: number;
  name: string;
}

type AnimalFamily = {
  familyName: string;
  mother: Animal;
  father: Animal;
  child: Animal;
}

type HumanFamily = {
  familyName: string;
  mother: Human;
  father: Human;
  child: Human;
}

const cat1: Animal = { age: 1 }
const cat2: Animal = { age: 2 }
const cat3: Animal = { age: 3 }
const human1: Human = { age: 11, name: 'human 1'}
const human2: Human = { age: 12, name: 'human 2'}
const human3: Human = { age: 13, name: 'human 3'}


const family1: AnimalFamily = { familyName: 'test', mother: human1, father: cat2, child: cat3}
