import projects, { Project } from "./projects";

function saveProjects() {
    console.log('save projects fired')
    const allProjects = projects.getProjects()
    localStorage.setItem('all-projects', JSON.stringify(allProjects))
}

function getProjectsFromStorage() {
    console.log(`get projects fired`)
    const allProjects = JSON.parse(localStorage.getItem('all-projects')) || [];
    allProjects.forEach(project => {
        projects.projects.push(project)
        Object.setPrototypeOf(project, Project.prototype);
    })
    console.log(projects.getProjects())
}

export { saveProjects, getProjectsFromStorage }