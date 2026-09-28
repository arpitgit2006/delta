let j='{"fact":"It has been scientifically proven that stroking a cat can lower one blood pressure.","length":85}';
console.log("j = ",j);
let o=JSON.parse(j);
console.log("o.fact = ",o.fact);
let obj={
    "hello":"greetings!",
    "bye":"seeing off!"
};
console.log("obj = ",obj);
let json=JSON.stringify(obj);
console.log("json = ",json);