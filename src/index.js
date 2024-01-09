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
const addToDo = (toDo) => {
    toDos.push(toDo);
}

const toDos = [];

addToDo(createToDo("Milk", "Buy some milk for the cat", "Some day", 0,))


const priorities = {
    0: "very important",
    1: "important",
    2: "not important"
};



// let newToDo = createToDo("Do the dishes", "Need to wash the dishes that are in the sink", "Tomorrow");
// let anotherToDo = createToDo("Buy water", "Need to buy two 18l water bottles", "In two days")

console.table(toDos);



