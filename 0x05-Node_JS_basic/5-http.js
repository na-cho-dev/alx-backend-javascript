const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.write('This is the list of our students\n');
    const dbFile = process.argv[2];
    countStudents(dbFile)
      .then((data) => {
        res.write(`Number of students: ${data.students.length}\n`);
        res.write(
          `Number of students in CS: ${
            data.csStudents.length
          }. List: ${data.csStudents.join(', ')}\n`,
        );
        res.write(
          `Number of students in SWE: ${
            data.sweStudents.length
          }. List: ${data.sweStudents.join(', ')}`,
        );
        res.end();
      })
      .catch((err) => res.end(err.message));
  }
});

app.listen(1245, 'localhost');

module.exports = app;
