// Obj that stores to-dos arrays
const toDosObj = {
    "default": [],
    "home": [],
    "work": [],
};

// Function to add to-dos to toDos object
const addToDoObj = (toDo, project = "default") => {
    toDosObj[project].push(toDo);
};


export { toDosObj, addToDoObj };