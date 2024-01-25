function showToDos(obj, project = null, date = null) {
    // getting the mainDiv
    const mainDiv = document.getElementById("mainDiv");
    const ul = document.createElement("ul");
    // clearing it out so it doesn't duplicate
    mainDiv.innerHTML = "";
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
    // appending the ul with todos to the mainDiv
    mainDiv.appendChild(ul);

}

