const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, "data");

if(!fs.existsSync(dataFolder)) {
    fs.mkdirSync(dataFolder);
    console.log("Data Folder Created");
}

const filePath = path.join(dataFolder, 'data.csv');
// synchronous way of creating the file
fs.writeFileSync(filePath, "Hello from node js");
console.log("File created successfully");

const content = fs.readFileSync(filePath, 'utf-8');
console.log(content);

fs.appendFileSync(filePath, "\nThis is a new file line added to the data file");
console.log("Data appended successfully");

// async way of writing code
const asyncFilePath = path.join(dataFolder, "async-example.txt");

fs.writeFile(asyncFilePath, "Hello from async node js", (error) => {
    if(error) {
        console.log(error.message);
    } else {
        console.log("Async file is created successfully");
    }
});

fs.readFile(asyncFilePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(data);
  }
});

fs.appendFile(asyncFilePath, "\nThis is appended data1", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("\ndata appended to txt file");
  }
});
