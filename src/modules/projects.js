import Nibble from './nibbles'

// create project
class Project {
    constructor(name, status) {
        this.name = name,
        this.status = 'working'
        this.nibbles = []
    }
    editProject(newName) {
        this.name = newName
    }
    addNibble(name, notes, dueDate, priority) {
        const newNibble = new Nibble(name, notes, dueDate, priority)
        this.nibbles.push(newNibble)
    }
    getProject() {
        return this.name
    }
}

// project list, methods
class ProjectList {
    constructor() {
        this.projects = []
    }
    // add project to list
    addProject(name, status) {
        const newProject = new Project(name, status)
        this.projects.push(newProject)
        return newProject
    }
    // delete project
    deleteProject(project) {
        const index = this.projects.indexOf(project);
		if (index > -1) {
			this.projects.splice(index, 1);
		}
    }
    // get projects
    getProjects() {
        return this.projects
    }
}

export { Project }
export default new ProjectList