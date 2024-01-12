// Obj that stores to-dos arrays and project names
export const toDosObj = {
    "default": [],
    "home": [],
    "work": [],
};

// Function to add to-dos to toDos object
export const addToDoObj = (toDo, project = "default") => {
    toDosObj[project].push(toDo);
    return toDosObj;
};

export const addNewProject = (projectName) => {
    toDosObj[projectName] = [];
    return toDosObj;
}

//addNewProject("Mystikal");



