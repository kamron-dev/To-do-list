export function renderUI() {
    const header = document.getElementById("header");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");


};
// Function to render the projects to the DOM (into the projects-div), exported to use in index.js
export function renderProjects(projects) {
    const projectsDiv = document.querySelector("#projects-div")
    const projectsKeys = Object.keys(projects);

    // projectsKeys.forEach(key => {
    //     const button = document.createElement("button");
    //     button.textContent = key;
    //     projectsDiv.appendChild(button);
    // });
    createButtons(projectsKeys, projectsDiv);

    return projectsDiv;
};

/* Helper function that creates buttons from object keys so 
that the function above only has one responsibility (Solid) */
function createButtons(keys, divToAppendTo) {
    keys.forEach(key => {
        const button = document.createElement("button");
        button.textContent = key;
        divToAppendTo.appendChild(button);
    });
    return divToAppendTo;
};