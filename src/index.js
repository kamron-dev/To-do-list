import { createToDo, priorities, toDosObj, addToDoObj, addNewProject } from "./createToDo";
import { createMainDiv, createButtonsForEachProjectOnSidebar, createHeader, displayProjects, addProjectButton } from "./UI";
// import { alertDate } from "./dates";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);
const thirdToDo = createToDo("Buy cat food", "Buy some kitekat", "Today", priorities.very);

// function addingNewProject(name) { !!!Can be done later like this!!!
//     addNewProject(name);
//     createButtonsForEachProjectOnSidebar(toDosObj);
//     displayProjects(toDosObj);
// }

// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo/*, e.g. home*/); // optional argument that specifies the project to put the to-do into
addToDoObj(thirdToDo);


// console.table(toDosObj["home"]);
// console.table(toDosObj["default"]);

console.log(toDosObj)


// creating the header for the mainDiv
createHeader("Lika i Ya");

//rendering the mainDiv into the main 
createMainDiv();

// rendering the project names into buttons from the object to the projects-div
createButtonsForEachProjectOnSidebar(toDosObj);

displayProjects(toDosObj);


// addingNewProject("mystikalll");