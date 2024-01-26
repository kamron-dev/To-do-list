export function test2(obj, project = null, date = null) {
    // creating the ul that I will return afterwards to append to the div
    const ul = document.createElement("ul");
    // if no project specified show all todos
    if (!project && !date) {
        // iterating through project names
        for (const projectNames in obj) {
        // iterating through each todo object in the projects
        obj[projectNames].forEach(toDo => {
            // creating li's to hold each todo
            const li = document.createElement("li");
            li.classList.add("li-element");
            // looping through each key in the todo object
            for (const key in toDo) {
                // if the key is either title, desc, or date
                if (key === "title" || key === "desc" || key === "dueDate") {
                    // create a p element to hold the text
                    const p = document.createElement("p");
                    // put the text from the keys above in separate p created earlier
                    p.textContent = toDo[key];
                    // appending the p to the li
                    li.appendChild(p);
                }
                // appending the li's to the ul
                ul.appendChild(li);
            }
        })
    }
    }
    else if (project && !date) {
        // looping through the todo objects in the project name specified in the argument
        obj[project].forEach(toDo => {
            // creating li's to hold each todo
            const li = document.createElement("li");
            li.classList.add("li-element");
            // looping through each key in the todo object
            for (const key in toDo) {
                // if the key is either title, desc, or date
                if (key === "title" || key === "desc" || key === "dueDate") {
                    // create a p element to hold the text
                    const p = document.createElement("p");
                    // put the text from the keys above in separate p created earlier
                    p.textContent = toDo[key];
                    // appending the p to the li
                    li.appendChild(p);
                }
                // appending the li's to the ul
                ul.appendChild(li);
            }
        })
    }
    
    console.log("test2 working!");
    // returning the ul to append to the mainDiv
    return ul;

}

