import projects, { Project } from './projects'
import { renderProjects, renderNibbles } from './view'

function createAddProjectModal() {
    const addProjectModal = document.createElement('dialog')
    const addProjectForm = document.createElement('form')
    const newProjectLabel = document.createElement('label')
    newProjectLabel.htmlFor ='new-project-name'
    newProjectLabel.textContent = 'Project Name:'
    const newProjectInput = document.createElement('input')
    newProjectInput.setAttribute('id', 'new-project-name')
    newProjectInput.setAttribute('required', 'true')
    newProjectInput.type = 'text'
    newProjectInput.name = 'new-project-name'
    // max length?? 
    const submitNewProjectBtn = document.createElement('input')
    submitNewProjectBtn.type = 'submit'
    submitNewProjectBtn.value = 'add project'
    submitNewProjectBtn.textContent = 'Submit'
    const cancelNewProjectBtn = document.createElement('button')
    cancelNewProjectBtn.textContent = 'Cancel'

    document.body.appendChild(addProjectModal)
    addProjectForm.appendChild(newProjectLabel)
    addProjectForm.appendChild(newProjectInput);
    addProjectForm.appendChild(submitNewProjectBtn);
    addProjectForm.appendChild(cancelNewProjectBtn);
    addProjectModal.appendChild(addProjectForm)
    addProjectModal.showModal()

    addProjectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const projectName = formData.get('new-project-name')
        projects.addProject(projectName, 'incomplete')
        console.log(projects.getProjects())
        renderProjects()
        // set projects to render in reverse
        // render nibbles
        addProjectModal.close()

        // add projectList to storage

    })
}

export { createAddProjectModal }