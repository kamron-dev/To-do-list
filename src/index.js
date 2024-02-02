import { createToDo, toDosObj, addToDoObj } from "./createToDo";
import { createLocalStorage } from "./localStorage";
import { handleDates, createButtonsForEachProjectOnSidebar, createDates, displayProjects } from "./UI";
// import { alertDate } from "./dates";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "2024-01-30", "very-important");
const anotherDo = createToDo("Writing", "Write some text to my book", "2024-01-30", "not-important", true);
const thirdToDo = createToDo("Buy cat food", "Buy some kitekat", "2024-01-31", "very-important");


// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo/*, e.g. home*/); // optional argument that specifies the project to put the to-do into
addToDoObj(thirdToDo);


(function createPage() {
    createLocalStorage(toDosObj);
    createDates();
    handleDates(toDosObj);
    createButtonsForEachProjectOnSidebar(toDosObj);
    displayProjects(toDosObj);
})();