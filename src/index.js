//Function that creates to-dos
const createToDo = (title, desc, dueDate, priority = 1, completed = false) => {
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
const priorities = {
    "very": "very important",
    "important": "important",
    "not": "not important",
};



// addToDo(createToDo("Milk", "Buy some milk for the cat", "Some day", priorities.very));
// addToDo(createToDo("Reading", "Read the book that I recently bought", "This evening", priorities.important));
// addToDo(createToDo("Water", "Buy some water", "Next week", priorities.not, true));

export { createToDo, priorities }





