import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Arpit Is Learning Nodejs");
  console.log(text);
}

doStuff();