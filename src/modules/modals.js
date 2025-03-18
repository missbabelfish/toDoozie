import { Project, ProjectList } from './projects'

function createAddProjectModal() {
    const addProjectModal = document.createElement('dialog')
    const addProjectForm = document.createElement('form')
    const newProjectTitle = document.createElement('label')
    newProjectTitle.htmlFor('new-project-name')
    newProjectTitle.textContent = 'Project Name:'
    const newProjectInput = document.createElement('input')
    newProjectInput.id = 'new-project-name'
    newProjectInput.type = 'text'
    newProjectInput.name = 'new-project-name'
    const submitNewProjectBtn = document.createElement('button')
    submitNewProjectBtn.setAttribute('type', 'submit')
    submitNewProjectBtn.textContent = 'Submit'
    const cancelNewProjectBtn = document.createElement('button')
    cancelNewProjectBtn.textContent = 'Cancel'

    document.body.appendChild(addProjectModal)
    addProjectForm.appendChild(newProjectTitle)
    addProjectForm.appendChild(newProjectInput);
    addProjectForm.appendChild(submitNewProjectBtn);
    addProjectForm.appendChild(cancelNewProjectBtn);
    addProjectModal.appendChild(addProjectForm)
    addProjectModal.showModal()

    submitNewProjectBtn.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const projectName = formData.get('new-project-name')
        ProjectList.addProject(projectName, 'incomplete')
        // render project list
        // set projects to render in reverse
        // render nibbles
        addProjectModal.close()

        // add projectList to storage

    })
}

export { createAddProjectModal }