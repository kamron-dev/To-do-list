import { createToDo, toDosObj, addToDoObj } from "./createToDo";
import { createMainDiv, createButtonsForEachProjectOnSidebar, createHeader, displayProjects } from "./UI";
// import { alertDate } from "./dates";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "12-02-2024", "very important");
const anotherDo = createToDo("Writing", "Write some text to my book", "14-04-2024", "not important", true);
const thirdToDo = createToDo("Buy cat food", "Buy some kitekat", "04-05-2024", "very important");


// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo/*, e.g. home*/); // optional argument that specifies the project to put the to-do into
addToDoObj(thirdToDo);


(function createPage() {
    createHeader("Lika i ya");
    createMainDiv();
    createButtonsForEachProjectOnSidebar(toDosObj);
    displayProjects(toDosObj);
})();