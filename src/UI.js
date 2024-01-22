import { toDosObj, addNewProject, addToDoObj, createToDo } from "./createToDo";
import { format } from "date-fns";
//Function to create the div inside the main part of the screen
export function createMainDiv() {
    const main = document.getElementById("main");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    main.appendChild(mainDiv);
    
    return { main, mainDiv }
};

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

// Function to create the mainDiv header that should be updated
export function createHeader(name) {
    const main = document.getElementById("main");
    const mainHeader = document.createElement("h1");
    mainHeader.textContent = name;
    mainHeader.setAttribute("id", "mainHeader");
    main.appendChild(mainHeader);

    return { main, mainHeader };

};

export function displayProjects(projects) {
    // Choosing all the buttons with projectnames 
    const buttons = document.querySelectorAll(".projects-list-button");
    // Iterating through those buttons
    buttons.forEach(button => {
        // adding click event listeners to them
        button.addEventListener("click", () => {
            // updating the header
            mainHeader.textContent = button.textContent;
            console.log(projects[button.textContent]);
            // creating the button that shows up an input form
            addNewToDoBtn();
            // creating a ul element to hold all the toDos inside
            const ul = document.createElement("ul");
            // iterating through each projects array that hold toDo objects
            projects[button.textContent].forEach(item => {
                //creating a li element to hold each toDo objects
                const li = document.createElement("li");
                li.classList.add("li-element");
                // iterating through each toDo obj key
                Object.keys(item).forEach(key => {
                    // if the key equals description
                    if (key === "title" || key === "desc" || key === "dueDate") {
                        // create a p element to hold the text
                        const p = document.createElement("p");
                        // putting the value of the key inside the p element
                        p.innerHTML = item[key];
                        // appending the p element with info to the li element
                        li.appendChild(p);
                    }
                })
                // appending the li element to the parent ul element created on line 78
                ul.appendChild(li);
            })
            // clearing out the main div before rendering the content inside
            mainDiv.innerHTML = "";
            //appending the ul inside the mainDiv
            mainDiv.appendChild(ul);
            
        })
    })
};

function addProjectButton(buttonName, projects) {
    const projectsDiv = document.querySelector("#projects-div");
    const addButton = document.createElement("button");
    addButton.textContent = buttonName;
    addButton.setAttribute("id", "add-new-project-btn")
    
    projectsDiv.appendChild(addButton);
    
    addButton.addEventListener("click", () => {
        const form = document.createElement("form");
        form.classList.add("input-field");

        const inputField = document.createElement("input");
        inputField.setAttribute("type", "text");
        inputField.setAttribute("id", "project-input");
        inputField.setAttribute("maxlength", "24");
        inputField.setAttribute("placeholder", "Enter project name");
        inputField.setAttribute("autocomplete", "off");

        const addProjectButton = document.createElement("button");
        addProjectButton.setAttribute("type", "button");
        addProjectButton.setAttribute("id", "add-project-btn");
        addProjectButton.textContent = "Add";

        const cancelButton = document.createElement("button");
        cancelButton.setAttribute("type", "button");
        cancelButton.setAttribute("id", "cancel-add-project-btn");
        cancelButton.textContent = "Cancel";
        
        form.appendChild(inputField);
        form.appendChild(addProjectButton);
        form.appendChild(cancelButton);

        projectsDiv.appendChild(form);
        
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


















