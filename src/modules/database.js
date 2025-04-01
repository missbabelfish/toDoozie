import projects, { Project } from "./projects";

function saveProjects() {
    const allProjects = projects.getProjects()
    localStorage.setItem('all-projects', JSON.stringify(allProjects))
}

function getProjectsFromStorage() {
    const allProjects = JSON.parse(localStorage.getItem('all-projects')) || [];
    allProjects.forEach(project => {
        projects.projects.push(project)
        Object.setPrototypeOf(project, Project.prototype);
    })
}

export { saveProjects, getProjectsFromStorage }