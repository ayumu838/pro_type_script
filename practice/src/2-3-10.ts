import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('数値を入力してください: ', (line) => {
  const num: number = Number(line);
  console.log(num + 1000);
  rl.close();
})
