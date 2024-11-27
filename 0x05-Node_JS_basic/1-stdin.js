process.stdin.resume();
process.stdin.setEncoding('utf-8');

console.log(`Welcome to Holberton School, what is your name?`);
let userInput;

process.stdin.on('data', (data) => {
  userInput = data.trim();

  if (process.stdin.isTTY) {
    console.log(`Your name is: ${userInput}`);
    process.exit();
  }
});

process.stdin.on('end', () => {
  console.log(`Your name is: ${userInput}`);
  console.log('This important software is now closing');
  process.exit();
});
