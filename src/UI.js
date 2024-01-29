import { toDosObj, addNewProject, addToDoObj, createToDo, deleteToDo } from "./createToDo";
import { format } from "date-fns";

// Function to render the projects to the DOM as buttons (into the projects-div), exported to use in index.js
export function createButtonsForEachProjectOnSidebar(projects) {
    const projectsDiv = document.querySelector("#projects-div");
    const projectsKeys = Object.keys(projects);

    //Clear out the projects div first ALWAYS CLEAR OUT BEFORE ADDING NEW
    projectsDiv.innerHTML = "";
    const projectHeader = document.createElement("h3");
    projectHeader.textContent = "Projects";

    projectsDiv.appendChild(projectHeader);

    //Creating buttons from toDosObj keys
    projectsKeys.forEach(key => {
        const button = document.createElement("button");
        button.classList.add("projects-list-button");
        button.textContent = key;
        projectsDiv.appendChild(button);
    });

    addProjectButton("New project +", projects)
    return projectsDiv;
};


export function displayProjects(projects) {
    const buttons = document.querySelectorAll(".projects-list-button");
    const mainDiv = document.querySelector("#mainDiv");
    const h1 = document.getElementById("mainHeader");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const ul = test2(projects, button.textContent, null);
            mainDiv.innerHTML = "";
            mainDiv.appendChild(ul);
            h1.textContent = button.textContent;
            addNewToDoBtn();
        })
    })
}




function addProjectButton(buttonName, projects) {
    const projectsDiv = document.querySelector("#projects-div");
    const addButton = document.createElement("button");
    addButton.textContent = buttonName;
    addButton.setAttribute("id", "add-new-project-btn")
    
    projectsDiv.appendChild(addButton);
    
    addButton.addEventListener("click", () => {
        const form = document.createElement("form");
        form.classList.add("input-field");  
        form.setAttribute("id", "input-field");
        projectsDiv.appendChild(form);

        const inputField = createElAndAppend("input-field", "input", {
            "type": "text",
            "id": "project-input",
            "max-length": "24",
            "placeholder": "Enter project name",
            "autocomplete": "off"
        });
    

        const addProjectButton = createElAndAppend("input-field", "button", {
            "type": "button",
            "id": "add-project-btn",

        });
        addProjectButton.textContent = "Add";

        const cancelButton = createElAndAppend("input-field", "button", {
            "type": "button",
            "id": "cancel-add-project-btn"
        });
        cancelButton.textContent = "Cancel";

        
        
        addButton.setAttribute("disabled", true);
        handleNewProjects(projects);
    })
    
};

function handleNewProjects(projects) {
    const addBtn = document.getElementById("add-project-btn");
    const cancelBtn = document.querySelector("#cancel-add-project-btn");

    addBtn.addEventListener("click", () => {
        const inputtedName = document.getElementById("project-input").value;
        addNewProject(inputtedName);
        console.table(toDosObj);
        createButtonsForEachProjectOnSidebar(projects);
        displayProjects(projects);
    
    });
    
    cancelBtn.addEventListener("click", () => {
        const form = document.querySelector(".input-field");
        const button = document.querySelector("#add-new-project-btn");
        if (form) form.remove();
        button.removeAttribute("disabled");

    })
};

function addNewToDoBtn() {
    const main = document.getElementById("main");
    let existingButton = document.getElementById("new-ToDo-btn");

    if (!existingButton) {
        const button = document.createElement("button");
        button.setAttribute("id", "new-ToDo-btn");
        button.textContent = "add";
        main.appendChild(button);
        button.addEventListener("click", () => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", "input-Div");
        main.appendChild(newDiv);

        createElAndAppend("input-Div", "form", {
            "id": "input-form"
        });

        
        const titleLabel = createElAndAppend("input-form", "label", {
            "for": "title-input",

        });
        titleLabel.textContent = "Title";

        
        createElAndAppend("input-form", "input", {  //Title input
            "type": "text",
            "id": "title-input"
        });

       
        const descLabel = createElAndAppend("input-form", "label", {
            "for": "desc-input"
        });
        descLabel.textContent = "Description";

        
        createElAndAppend("input-form", "textarea", {
            "id": "desc-input",
            "rows": "5"
        });

        
        const dateLabel = createElAndAppend("input-form", "label", {
            "for": "dueDate"
        });
        dateLabel.textContent = "Due date";

        createElAndAppend("input-form", "input", {
            "type": "date",
            "id": "dueDate",
            //required
        });

        const priorityLabel = createElAndAppend("input-form", "label", {
            "for": "priority"
        });
        priorityLabel.textContent = "Priority";

        createElAndAppend("input-form", "select", {
            "id": "priority"
        })

        const very = createElAndAppend("priority", "option", {
            "value": "very",

        });
        very.textContent = "Very Important";

        const important = createElAndAppend("priority", "option", {
            "value": "important",

        });
        important.textContent = "Important";

        const not = createElAndAppend("priority", "option", {
            "value": "not",

        });
        not.textContent = "Not Important";

        // creating two buttons 

        const addButton = createElAndAppend("input-form", "button", {
            "id": "addToDoBtn",
            "type": "button"
        });
        addButton.textContent = "Add To-do";

        const cancelBtn = createElAndAppend("input-form", "button", {
            "id": "cancelBtn",
            "type": "button"
        });
        cancelBtn.textContent = "Cancel";
        
        handleButtons();

    });
    }

    
};

function handleButtons() {
    const addButton = document.getElementById("addToDoBtn");
    const cancelBtn = document.getElementById("cancelBtn");

    const title = document.getElementById("title-input");
    const desc = document.getElementById("desc-input");
    const dueDate = document.getElementById("dueDate");
    const priority = document.getElementById("priority");
    const project = document.getElementById("mainHeader");
    const inputDiv = document.getElementById("input-Div");

    addButton.addEventListener("click", () => {
        addToDoObj(createToDo(title.value, desc.value, dueDate.value = format(Date.now(), "MM-dd-yyyy"), priority.value), project.textContent);
        inputDiv.remove();
    });

    cancelBtn.addEventListener("click", () => {
        inputDiv.remove();
    })
};



//helper function to create elements and append them to the parent element
function createElAndAppend(parentElId, type, attributes) { 
    let newEl = document.createElement(type);
    
    for (let key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            newEl.setAttribute(key, attributes[key]);
        }
    };

    let parentEl = document.getElementById(parentElId);

    parentEl.appendChild(newEl);
    
    return newEl;
};

export function createDates() {
    //const div = document.getElementById("to-dos-div");
    
    const all = createElAndAppend("to-dos-div", "button", {
        "type": "button",
        "id": "all-to-dos"
    });
    all.textContent = "All";

    const today = createElAndAppend("to-dos-div", "button", {
        "type": "button",
        "id": "today-to-dos"
    })
    today.textContent = "Today";

    const nextWeek = createElAndAppend("to-dos-div", "button", {
        "type": "button",
        "id": "next-week-to-dos"
    })
    nextWeek.textContent = "Next week";
}

export function handleDates(projects) {
    const allBtn = document.getElementById("all-to-dos");
    const todayBtn = document.getElementById("today-to-dos");
    const nextWeekBtn = document.getElementById("next-week-to-dos");
    const mainDiv = document.getElementById("mainDiv");
    const h1 = document.getElementById("mainHeader");
    
    
    allBtn.addEventListener("click", () => {
        const ul = test2(projects, null, null);
        mainDiv.innerHTML = "";
        mainDiv.appendChild(ul);
        h1.textContent = allBtn.textContent;

        const buttonToRemove = document.getElementById("new-ToDo-btn");
        if (buttonToRemove) buttonToRemove.remove();
    });
};

function test2(obj, project = null, date = null) {
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
                // create a p element to hold the info
                const p = document.createElement("p");
                // putting the info from the above into the p
                p.textContent = toDo[key];
                //appending the ps as the li's child
                li.appendChild(p);
            };
            if (key === "priority") {
                if (toDo[key] === "very important") li.classList.add("red-text");
                if (toDo[key] === "important") li.classList.add("blue-text");
                  if (toDo[key] === "not important") li.classList.add("green-text");
                
            }
        }
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            // find the project that contains the toDo item
            const targetProject = Object.values(obj).find(project => project.includes(toDo));
            if (targetProject) {
                const index = targetProject.indexOf(toDo);
                targetProject.splice(index, 1);
                //ul.removeChild(li);
                li.remove();
            }
        });
        li.appendChild(deleteButton);

        
        // appendind the li to the ul
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
};





















