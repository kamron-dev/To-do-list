//Function to create the div inside the main part of the screen
export function createMainDiv() {
    const main = document.getElementById("main");
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "mainDiv");
    main.appendChild(mainDiv);
    
    return main
};
// Function to render the projects to the DOM as buttons (into the projects-div), exported to use in index.js
export function renderProjectsToButtons(projects) {
    const projectsDiv = document.querySelector("#projects-div")
    const projectsKeys = Object.keys(projects);

    projectsKeys.forEach(key => {
        const button = document.createElement("button");
        button.classList.add("projects-list-button");
        button.textContent = key;
        projectsDiv.appendChild(button);
    });

    return projectsDiv;
};


// Function to create the mainDiv header that should be updated
export function createHeader(name) {
    const main = document.getElementById("main");
    const mainHeader = document.createElement("h1");
    mainHeader.textContent = name;
    mainHeader.setAttribute("id", "mainHeader");
    main.appendChild(mainHeader);

    return main;

};


// export function displayProjects() {
//     const buttons = document.querySelectorAll(".project-list-button");
//     const mainHeader = document.querySelector("#mainHeader")
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             console.log("clicked!")
//             mainHeader.textContent = button.key;
//         })
//     })
// };



