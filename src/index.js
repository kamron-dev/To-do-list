import { createToDo, priorities, toDosObj, addToDoObj, addNewProject } from "./createToDo";
import { createMainDiv, createButtonsForEachProjectOnSidebar, createHeader, displayProjects } from "./UI";
// import { alertDate } from "./dates";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);
const thirdToDo = createToDo("Buy cat food","Buy some kitekat", "Today", priorities.very);

// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo);
addToDoObj(thirdToDo);


console.table(toDosObj["home"]);
console.table(toDosObj["default"]);

console.log(toDosObj)


// creating the header to the mainDiv
createHeader("Lika i Ya");

//rendering the mainDiv into the main 
createMainDiv();

// rendering the project names into buttons from the object to the projects-div
createButtonsForEachProjectOnSidebar(toDosObj);

displayProjects(toDosObj);


