const { readFile } = require('fs');
const os = require('os');
const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { readfile, writeFile } = require('fs');

const newFilePath = './test2.txt';
const newFileContent = 'Tis is test tuo';

console.log(os.type() + ' is the best!');
console.log(path.resolve(__dirname, '.'));

// console.log(readFileSync('./test.txt', 'utf8'));

// writeFileSync(newFilePath, newFileContent);

readFile('./test.txt', 'utf8', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
});

writeFile(newFilePath, newFileContent + ' but async', (err, res) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(res);
});
