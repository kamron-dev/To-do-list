import toDosObj from "./createToDo";
import { handleDates, createButtonsForEachProjectOnSidebar, createDates, displayProjects } from "./UI";

// creating three new todos with createToDo function
const newDo = createToDo("Milk", "Buy some milk for the cat", "2024-01-30", "very-important");
const anotherDo = createToDo("Writing", "Write some text to my book", "2024-01-30", "not-important", true);
const thirdToDo = createToDo("Buy cat food", "Buy some kitekat", "2024-01-31", "very-important");


// adding previously created todos to the object holding todos with the addToDoObj function
addToDoObj(newDo);
addToDoObj(anotherDo/*, e.g. home*/); // optional argument that specifies the project to put the to-do into
addToDoObj(thirdToDo);


(function createPage() {
    console.table(toDosObj);
    if (!localStorage.length > 0) {
        for (const key in toDosObj) {
            localStorage.setItem(key, JSON.stringify(toDosObj[key]));
        };
        alert("I saved the new data!")
    } else {
        let newObj = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const storedValue = localStorage.getItem(key);

            const parsedValue = JSON.parse(storedValue);
            newObj[key] = parsedValue;
        };

        toDosObj = newObj;
        alert("I got it from the localStorage!");
    }
    createDates();
    handleDates(toDosObj);
    createButtonsForEachProjectOnSidebar(toDosObj);
    displayProjects(toDosObj);
})();