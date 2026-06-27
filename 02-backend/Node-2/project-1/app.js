// CLI ToDo App using node.js

import readline from "readline"; // allows to interact with CLI

const rl = readline.createInterface({
  // interface for onteract with cli
  input: process.stdin, // allow to read in cli
  output: process.stdout, // allow to write in cli
});

const todos = [];

const showMenu = () => {
  console.log("\n1: Add a Task");
  console.log("2: View Tasks");
  console.log("3: Exit");

  rl.question("Choose an option", handleInput);
};

const handleInput = (option) => {
  if (option === '1') {
    rl.question("Enter the Task: ", (task) => {
      todos.push(task);
      console.log("Task added successfully", task);
      showMenu();
    });
  } else if (option === '2') {
    console.log("\nYour ToDo List: ");
    todos.forEach((task, index) => {
      console.log(`${index + 1}. ${task}`);
    });
    showMenu();
  } else if (option === '3') {
        console.log("Good Byee");
        rl.close();
  } else {
    console.log("Invalid Chioce! Try again- ");
    showMenu();
  }
};

showMenu();
