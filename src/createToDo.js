

//Factory function that creates to-do objects
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

// Function to delete a to-do

export const deleteToDo = (index, project) => {
    toDosObj[project].splice(index, 1)
    return toDosObj;
}

// Function to add new projects

export const addNewProject = (projectName) => {
    toDosObj[projectName] = [];
    return toDosObj;
}












