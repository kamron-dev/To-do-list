import { createToDo, priorities, toDosObj, addToDoObj } from "./createToDo";
import { createMainDiv, createButtonsForEachProjectOnSidebar, createHeader, displayProjects } from "./UI";
// import { alertDate } from "./dates";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);
const thirdToDo = createToDo("Buy cat food", "Buy some kitekat", "Today", priorities.very);


// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo/*, e.g. home*/); // optional argument that specifies the project to put the to-do into
addToDoObj(thirdToDo);


(function createPage() {
    createHeader("Lika i Ya");
    createMainDiv();
    createButtonsForEachProjectOnSidebar(toDosObj);
    displayProjects(toDosObj);
})();