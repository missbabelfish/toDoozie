import projects, { Project } from "./projects";

function saveProjects() {
    console.log('save projects fired')
    const allProjects = projects.getProjects()
    localStorage.setItem('all-projects', JSON.stringify(allProjects))
}

function getProjectsFromStorage() {
    const allProjects = JSON.parse(localStorage.getItem('all-projects')) || [];
    console.log({allProjects})
    allProjects.forEach(project => {
        projects.projects.push(project)
        Object.setPrototypeOf(project, Project.prototype);
    })
    // return projects.projects
}

function deleteProjectFromStorage() {

}


export { saveProjects, getProjectsFromStorage }