export function renderUI() {
    const header = document.getElementById("header");
    const sidebar = document.getElementById("sidebar");
    const main = document.getElementById("main");


};

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

function createButtons(keys, divToAppendTo) {
    keys.forEach(key => {
        const button = document.createElement("button");
        button.textContent = key;
        divToAppendTo.appendChild(button);
    });
    return divToAppendTo;
}