import { toDosObj, addToDoObj } from "./to-dos";
import { createToDo, priorities } from "./createToDo";
import renderUI from "./UI";


const newDo = createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very);
const anotherDo = createToDo("Writing", "Write some text to my book", "Today", priorities.not, true);


addToDoObj(newDo);
addToDoObj(anotherDo);


console.table(toDosObj["home"]);
console.table(toDosObj["default"]);

console.log(toDosObj)



renderUI();