process.stdin.resume();
process.stdin.setEncoding('utf-8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const userInput = process.stdin.read();
  if (userInput !== null) {
    process.stdout.write(`Your name is: ${userInput}`);
  }
});

process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
