import { toDosObj } from "./createToDo";

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
    // const projectValues = Object.values(projects);

    //Clear out the projects div first ALWAYS CLEAR OUT BEFORE ADDING NEW
    projectsDiv.innerHTML = "";

    //Creating buttons from toDosObj keys
    projectsKeys.forEach(key => {
        const button = document.createElement("button");
        button.classList.add("projects-list-button");
        button.textContent = key;
        projectsDiv.appendChild(button);
    });

    projectsKeys.forEach(key => {
        const array = projects[key];
        const valueDiv = document.createElement("div");
        array.forEach(toDo => {
            Object.keys(toDo).forEach(key => {
                const ul = document.createElement("ul");
                const li = document.createElement("li");
                const p = document.createElement("p");
                if (key === "desc") {
                    li.innerHTML = toDo[key];
                }
                p.innerHTML = `${toDo[key]}`
                valueDiv.appendChild(p);
                console.log(key, toDo[key]);
            })
            
        })
        
        mainDiv.appendChild(valueDiv);
    })
    
    

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

export function displayProjects() {
    const buttons = document.querySelectorAll(".projects-list-button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            mainHeader.textContent = button.textContent
            
        })
    })
};













