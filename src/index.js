const fs = require("fs/promises");
const path = require('path');
const fileName = path.join(__dirname, '..', 'myfile.txt');

const reader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = reader;


reader(fileName);
