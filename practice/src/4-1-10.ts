type User4_1_10 = {name: string; age: number}
const getName = (u: User4_1_10): string => u.name

const users4_1_10: User4_1_10[] = [
  {name: "ayumu838", age: 26},
  {name: "John Smith", age: 15}
]

const names = users4_1_10.map(getName)
console.log(names)
