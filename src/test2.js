export function test2(obj, project = null, date = null) {
    // creating the ul to hold all the li's and return at the end of the function
    const ul = document.createElement("ul");
    // helper function that will create li's 
    function createLi(toDo) {
        // creating the li
        const li = document.createElement("li");
        li.classList.add("li-element");
        // looping through the toDo obj that is passed as the argument 
        for (const key in toDo) {
            // if the key is title, desc, or dueDate
            if (["title", "desc", "dueDate"].includes(key)) {
                // create a p element to holde the info
                const p = document.createElement("p");
                // putting the info from the above into the p
                p.textContent = toDo[key];
                //appending the p as the li's child
                li.appendChild(p);
            }
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            // Remove the todo from the array
            const index = obj[project].indexOf(toDo);
            obj[project].splice(index, 1);
            // Update the UI
            ul.removeChild(li);
        });
        li.appendChild(deleteButton);

        
        // appendind the li's to the ul
        ul.appendChild(li);
    }
    
    
    // checking the conditions and adding the toDos accordingly
    // if no project or date specified
    if (!project && !date) {
        // loop through all the project names in the object
        for (const projectNames in obj) {
            // enter each project and loop all the todo objects in it
            obj[projectNames].forEach(toDo => {
                // call the above created function with the toDo passed as the argument
                createLi(toDo);
            });
        }
    
    // if only the project is specified and no date
    } else if (project && !date) {
        //check if the project passed as the argument is in the list 
        if (obj[project]) {
            // if it is loop through all the toDo objects in the project
            obj[project].forEach(toDo => {
                // and create li's with those todos
                createLi(toDo);
            });
        }
    }

    console.log("test2 working!");
    return ul;
}

function createDelBtn(li) {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    deleteBtn.addEventListener("click", () => {
        projects[button.textContent].splice(index, 1);
    })
    li.appendChild(deleteBtn);
}

