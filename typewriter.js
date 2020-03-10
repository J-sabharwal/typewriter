// Paired Programming with @Alan-Marx and @J-sabharwal

const sentence = "hello there from lighthouse labs";
let counter = 1000;

for (let i = 0; i < sentence.length; i++) {
  if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
      console.log("\n");
    }, counter);
  } else {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, counter);
    counter += 50;
  }
}
