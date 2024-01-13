//Function that creates to-dos
export const createToDo = (title, desc, dueDate, priority = "important", completed = false) => {
    return {
        id : Date.now(),
        title,
        desc,
        dueDate,
        priority, 
        completed
    }
};

// Object that holds priorities
export const priorities = {
    "very": "very important",
    "important": "important",
    "not": "not important",
};
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

// Function to add new projects

export const addNewProject = (projectName) => {
    toDosObj[projectName] = [];
    return toDosObj;
}













