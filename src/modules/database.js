import projects, { Project } from "./projects";
import Nibble from "./nibbles";

function saveProjects() {
    const allProjects = projects.getProjects()
    localStorage.setItem('all-projects', JSON.stringify(allProjects))
}

function getProjectsFromStorage() {
    const allProjects = JSON.parse(localStorage.getItem('all-projects')) || [];
    allProjects.forEach(project => {
        projects.projects.push(project)
        Object.setPrototypeOf(project, Project.prototype);
        project.nibbles.forEach(nibble => {
            Object.setPrototypeOf(nibble, Nibble.prototype)
        })
    })
}

export { saveProjects, getProjectsFromStorage }