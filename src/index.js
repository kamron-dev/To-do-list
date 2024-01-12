import { toDosObj, addToDoObj, addNewProject } from "./to-dos";
import { createToDo, priorities } from "./createToDo";
import { createMainDiv, renderProjects } from "./UI";
import { alertDate } from "./dates";

// creating two new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);

// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo);


console.table(toDosObj["home"]);
console.table(toDosObj["default"]);

console.log(toDosObj)

// rendering the projects from the object to the projects-div
renderProjects(toDosObj);


//rendering the mainDiv into the main 
createMainDiv();

