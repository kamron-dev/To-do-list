import { toDosObj, addToDoObj } from "./to-dos";
import { createToDo, priorities } from "./createToDo";
import anything from "./UI";

anything();

const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);


addToDoObj(newDo);
addToDoObj(anotherDo);


console.table(toDosObj["home"]);
console.table(toDosObj["default"]);

console.log(toDosObj)


// addToDo(createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very));
// addToDo(createToDo("Reading", "Read the book that I recently bought", "This evening", priorities.important));
// addToDo(createToDo("Water", "Buy some water", "Next week", priorities.not, true));