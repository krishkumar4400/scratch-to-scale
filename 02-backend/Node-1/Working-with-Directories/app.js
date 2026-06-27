const fs = require('fs');

//  creating a folder or directory using asynchronous method
// fs.mkdir('newDirectory', (err) => {
//     if(err) {
//         return console.error('Error creating directory: ', err);
//     }
//     console.log('Directory created successfully');
// });

// //  creating a folder or directory using asynchronous method
// fs.mkdirSync('newDirectory3');
// console.log("Directory created successfully");

// Reading directory asynchronous method:
// fs.readdir('./', (err, files) => {
//     if(err) {
//         return console.error("Error Reading directory: ", err);
//     }
//     console.log("Directory Content: ", files);
// });
/**
 * Directory Content:  [
  'app.js',
  'intro.txt',
  'newDirectory',
  'newDirectory2',
  'newDirectory3'
]
 */

// Reading directory asynchronous method:
// const files = fs.readdirSync('./');
//  console.log("Directory Content sync: ", files);
 /**
  * Directory Content:  [
  'app.js',
  'intro.txt',
  'newDirectory',
  'newDirectory2',
  'newDirectory3'
]
  */


// // check if a directory is exists:
// const dirname = 'newDirectory4';
// if(fs.existsSync(dirname)) {
//   console.log('Directory Exists');
// } else {
//   console.log('Directory does not exit');
// }

// // Removing a DIrectory async method
// Note: rmdir() method can delete the directory if the directory is empty.
// fs.rmdir('newDirectory', (err) => {
//   if(err) {
//     return console.error("Error removing Directory: ", err);
//   }
//   console.log('Directory deleted successfully');
// });

// if is directory is not empty then to delete that directory we use rm() method:
// fs.rm('newDirectory3', {recursive:true}, (err) => {
//   if(err) {
//     return console.error("Error removing directory: ", err);
//   }
//   console.log("Directory removed successfully");
// });

// // Removing a DIrectory async method
// fs.rmdirSync('newDirectory2');
// console.log("Directory deleted successfully");


// Renaming a Directory
// fs.rename('newDirectory', 'renamedDirectory', (err) => {
//   if(err) {
//     return console.error("Error renaming directory: ", err);
//   }
//   console.log("Directory renamed successfully");
// });

// // Getting directory stats:
// fs.stat('intro.txt', (err, stats) => {
//   if(err) {
//     return console.error(err);
//   }
//   console.log("Directory stats: ", stats);
//   console.log("Is Directory : ", stats.isDirectory()); // to check the './' is a directory or a file, return true is it's a folder and false if it's a file. 
// });
// // Is Directory :  true

// // Watching a Directory:
fs.watch('./', (eventType, fileName) => {
  console.log(`Event: ${eventType}`);
  if(fileName) {
    console.log(`Filename: ${fileName}`);
  }
});