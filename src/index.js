const createToDo = (title, desc, dueDate, priority = 1) => {
    return {
        title,
        desc,
        dueDate,
        priority
    }
};

const priorities = {
    "very important": 0,
    "important": 1,
    "not important": 2
};

let newToDo = createToDo("Do the dishes", "Need to wash the dishes that are in the sink", "Tomorrow");

console.table(newToDo);