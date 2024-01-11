// Obj that stores to-dos arrays and project names
const toDosObj = {
    "default": [],
    "home": [],
    "work": [],
};

// Function to add to-dos to toDos object
const addToDoObj = (toDo, project = "default") => {
    toDosObj[project].push(toDo);
    return toDosObj;
};

const addNewProject = (projectName) => {
    toDosObj[projectName] = [];
    return toDosObj;
}

//addNewProject("Mystikal");



export { toDosObj, addToDoObj, addNewProject };