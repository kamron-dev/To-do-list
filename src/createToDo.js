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
    "Default": [],
    "Home": [],
    "Work": [],
};

// Function to add to-dos to toDos object

export const addToDoObj = (toDo, project = "Default") => {
    if (localStorage) {
        let theStorage = JSON.parse(localStorage.getItem(project));
        theStorage.push(toDo);
        let updatedStorage = JSON.stringify(theStorage);
        localStorage.setItem(project, updatedStorage);
    };
};

// Function to add new projects

export const addNewProject = (projectName) => {
    localStorage.setItem([projectName], []);
};












