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








