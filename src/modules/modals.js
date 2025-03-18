import projects, { Project } from './projects'
import { renderProjects, renderNibbles } from './view'
import { saveProjects } from './database'

function createAddProjectModal() {

    const addProjectModal = document.createElement('dialog')
    const addProjectForm = document.createElement('form')
    const newProjectLabel = document.createElement('label')
    newProjectLabel.htmlFor ='new-project-name'
    newProjectLabel.textContent = 'Project Name:'
    const newProjectInput = document.createElement('input')
    newProjectInput.setAttribute('id', 'new-project-name')
    newProjectInput.type = 'text'
    newProjectInput.name = 'new-project-name'
    // max length?? 
    const submitNewProjectBtn = document.createElement('input')
    submitNewProjectBtn.type = 'submit'
    submitNewProjectBtn.value = 'add project'
    submitNewProjectBtn.textContent = 'Submit'
    const cancelNewProjectBtn = document.createElement('button')
    cancelNewProjectBtn.textContent = 'Cancel'
    cancelNewProjectBtn.type = 'button'
    cancelNewProjectBtn.addEventListener('click', () => {
        addProjectModal.close()
    })

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
        saveProjects()
    })
}

// create edit project modal
function createEditProjectModal(project) {
    const editProjectModal = document.createElement('dialog')
    const editProjectForm = document.createElement('form')
    const projectLabel = document.createElement('label');
	projectLabel.htmlFor = 'project-name';
	projectLabel.textContent = 'Project Name:';
	const projectInput = document.createElement('input');
	projectInput.setAttribute('id', 'project-name');
	projectInput.setAttribute('required', 'true');
	projectInput.type = 'text';
	projectInput.name = 'project-name';
    projectInput.value = `${project.name}`
	// max length??
	const submitEditProjectBtn = document.createElement('input');
	submitEditProjectBtn.type = 'submit';
	submitEditProjectBtn.value = 'edit project';
	submitEditProjectBtn.textContent = 'Submit';
	const cancelEditProjectBtn = document.createElement('button');
    cancelEditProjectBtn.type = 'button'
	cancelEditProjectBtn.textContent = 'Cancel';
    cancelEditProjectBtn.addEventListener('click', () => {
        editProjectModal.close()
    })

	document.body.appendChild(editProjectModal);
	editProjectForm.appendChild(projectLabel);
	editProjectForm.appendChild(projectInput);
	editProjectForm.appendChild(submitEditProjectBtn);
	editProjectForm.appendChild(cancelEditProjectBtn);
	editProjectModal.appendChild(editProjectForm);
	editProjectModal.showModal();

    editProjectForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
		const newName = formData.get('project-name');
		project.editProject(newName);
		console.log(projects.getProjects());
        saveProjects()
		renderProjects();
		// set projects to render in reverse
		// render nibbles
		editProjectModal.close();
    })

}

export { createAddProjectModal, createEditProjectModal }