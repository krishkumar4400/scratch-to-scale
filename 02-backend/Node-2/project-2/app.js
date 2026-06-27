// CLI File creation App in Node.Js

import fs from "fs";
import path from "path";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const showContent = () => {
  fs.readFile("amanSing.txt", "utf-8", (err, data) => {
    if (err) {
      return console.error(err.message);
    }
    console.log(data);
  });
};

const menu = () => {
  console.log("1. Create a file ?");
  console.log("2. Read a file ?");
  console.log("3. Delete a file ?");
  console.log("4. Update content of a file ?");
  console.log("5. Rename a file ?");
  console.log("6. Exit ?");

  rl.question("Enter your choice", handleChoice);
};

const handleChoice = (choice) => {
  if (1 === parseInt(choice)) {
    rl.question("Enter the file name: ", (fileName) => {
      if (fileName) {
        rl.question("Enter the content of the file: ", (content) => {
          if (content) {
            fs.writeFile(fileName + ".txt", content, "utf-8", (err) => {
              if (err) {
                console.error(err.message);
                rl.close();
              }
              console.log("File created Successfully ~ ");
              menu();
            });
          }
        });
      }
    });
  } else if (2 === parseInt(choice)) {
    rl.question("Enter the file name: ", (fileName) => {
      if (fileName) {
        fs.readFile(fileName + ".txt", "utf-8", (err, data) => {
          if (err) {
            console.error(err.message);
            rl.close();
          }
          console.log("Content of the file:-\n", data, "\n\n");
          menu();
        });
      }
    });
  } else if (3 === parseInt(choice)) {
    rl.question("Enter the file name you want to delete: ", (filename) => {
      fs.unlink(filename + ".txt", (err) => {
        if (err) {
          console.error(err.message);
          rl.close();
        }
        console.log("File deleted successfully");
        menu();
      });
    });
  } else if (4 === parseInt(choice)) {
    rl.question("Enter the file name you want to update: ", (fileName) => {
      if (fileName) {
        rl.question("Enter the data you want to append: ", (data) => {
          if (data) {
            fs.appendFile(fileName + ".txt", "\n" + data, "utf-8", (err) => {
              if (err) {
                console.error(err.message);
                rl.close();
              }
              rl.question(
                "Data updated on the file Do you want to read again ? ",
                (res) => {
                  if ("no" === res.toLowerCase()) {
                    console.log("ok, what do you want to do ? ");
                    menu();
                  }
                  fs.readFile(fileName + ".txt", "utf-8", (err, data) => {
                    if (err) {
                      console.log(err.message);
                      rl.close();
                    }
                    console.log("Data of the file: \n", data, "\n\n");
                    menu();
                  });
                }
              );
            });
          }
        });
      }
    });
  } else if (5 === parseInt(choice)) {
    rl.question(
      "Enter name of the file you want to rename: ",
      (prevFileName) => {
        if (prevFileName) {
          rl.question("Enter the new name of the file: ", (newFileName) => {
            if (newFileName) {
              fs.rename(prevFileName + ".txt", newFileName + ".txt", (err) => {
                if (err) {
                  console.error(err.message);
                  rl.close();
                }
                console.log(
                  "File renamed successfully | Please check your directory ~"
                );
                menu();
              });
            }
          });
        }
      }
    );
  } else if (6 === parseInt(choice)) {
    console.log("Good Byee");
    rl.close();
  } else {
    console.log("Invalid Choice ! Try again- ");
    menu();
  }
};

menu();

// const showMenu = () => {
//     rl.question("Enter the File Name: ", (fileName) => {
//         if(fileName) {
//             rl.question("Enter the Content of the File: ", (content) => {
//                 if(content) {
//                     fs.writeFile(fileName + ".txt", content, 'utf8', (err) => {
//                         if(err) {
//                             return console.error(err.message);
//                         }
//                         console.log("File created successfully");
//                         rl.question("Do you want to see the content of any file ?", (res) => {
//                             if(res === "no") {
//                                 return rl.close();
//                             }
//                             showContent();
//                             rl.close();
//                         })
//                     })
//                 }
//             })
//         }
//     });
// }

// showMenu();


import fs from "fs";
import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const getFileName = (name) => (name.endsWith(".txt") ? name : name + ".txt");

const menu = () => {
  console.log("\n📂 File Manager Menu:");
  console.log("1. Create a file");
  console.log("2. Read a file");
  console.log("3. Delete a file");
  console.log("4. Append content to a file");
  console.log("5. Rename a file");
  console.log("6. Exit\n");

  rl.question("👉 Enter your choice: ", handleChoice);
};

const handleChoice = (choice) => {
  switch (parseInt(choice)) {
    case 1:
      rl.question("Enter file name: ", (fileName) => {
        fileName = getFileName(fileName);
        rl.question("Enter file content: ", (content) => {
          fs.writeFile(fileName, content, "utf-8", (err) => {
            if (err) console.error("❌", err.message);
            else console.log("✅ File created:", fileName);
            menu();
          });
        });
      });
      break;

    case 2:
      rl.question("Enter file name to read: ", (fileName) => {
        fileName = getFileName(fileName);
        fs.readFile(fileName, "utf-8", (err, data) => {
          if (err) console.error("❌", err.message);
          else console.log(`\n📖 Content of ${fileName}:\n${data}\n`);
          menu();
        });
      });
      break;

    case 3:
      rl.question("Enter file name to delete: ", (fileName) => {
        fileName = getFileName(fileName);
        fs.unlink(fileName, (err) => {
          if (err) console.error("❌", err.message);
          else console.log("🗑️ File deleted:", fileName);
          menu();
        });
      });
      break;

    case 4:
      rl.question("Enter file name to update: ", (fileName) => {
        fileName = getFileName(fileName);
        rl.question("Enter text to append: ", (data) => {
          fs.appendFile(fileName, "\n" + data, "utf-8", (err) => {
            if (err) console.error("❌", err.message);
            else console.log("✏️ Content appended to", fileName);
            menu();
          });
        });
      });
      break;

    case 5:
      rl.question("Enter current file name: ", (oldName) => {
        rl.question("Enter new file name: ", (newName) => {
          oldName = getFileName(oldName);
          newName = getFileName(newName);
          fs.rename(oldName, newName, (err) => {
            if (err) console.error("❌", err.message);
            else console.log("🔄 File renamed to:", newName);
            menu();
          });
        });
      });
      break;

    case 6:
      console.log("👋 Goodbye!");
      rl.close();
      break;

    default:
      console.log("⚠️ Invalid choice, try again.");
      menu();
  }
};

menu();
