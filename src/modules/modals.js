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
        console.log(formData);
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

function createAddNibbleModal(project) {
	console.log(`creating add nibble for ${project.name}`);
	const addNibbleModal = document.createElement('dialog');
	const addNibbleForm = document.createElement('form');

	// Nibble Name
	const nibbleLabel = document.createElement('label');
	nibbleLabel.htmlFor = 'nibble-name';
	nibbleLabel.textContent = 'Nibble Name:';
	const nibbleInput = document.createElement('input');
	nibbleInput.setAttribute('id', 'nibble-name');
	nibbleInput.setAttribute('name', 'nibble-name'); 
	nibbleInput.setAttribute('required', 'true');

	// Notes
	const notesLabel = document.createElement('label');
	notesLabel.htmlFor = 'notes';
	notesLabel.textContent = 'Notes';
	const notesInput = document.createElement('textarea'); 
	notesInput.setAttribute('id', 'notes');
	notesInput.setAttribute('name', 'notes'); 

	// Due Date
	const dateLabel = document.createElement('label');
	dateLabel.htmlFor = 'due-date';
	dateLabel.textContent = 'Due Date:';
	const dateInput = document.createElement('input');
	dateInput.type = 'date';
	dateInput.setAttribute('id', 'due-date');
	dateInput.setAttribute('name', 'due-date'); 

	// Priority
	const priorityLabel = document.createElement('label');
	priorityLabel.htmlFor = 'priority';
	priorityLabel.textContent = 'Priority:';
	const priorityInput = document.createElement('select');
	priorityInput.setAttribute('id', 'priority');
	priorityInput.setAttribute('name', 'priority'); 

	// Priority options
	const priorities = ['Low', 'Medium', 'High'];
	priorities.forEach(priority => {
		const option = document.createElement('option');
		option.textContent = priority;
		option.value = priority.toLowerCase();
		priorityInput.appendChild(option);
	});

	// Buttons
	const cancelAddNibbleBtn = document.createElement('button');
	cancelAddNibbleBtn.textContent = 'Cancel';
	cancelAddNibbleBtn.type = 'button';
	cancelAddNibbleBtn.addEventListener('click', () => {
		addNibbleModal.close();
	});

	const submitAddNibbleBtn = document.createElement('input');
	submitAddNibbleBtn.type = 'submit';
	submitAddNibbleBtn.value = 'Submit'; 

	// Append elements to form
	[
		nibbleLabel,
		nibbleInput,
		notesLabel,
		notesInput,
		dateLabel,
		dateInput,
		priorityLabel,
		priorityInput,
		cancelAddNibbleBtn,
		submitAddNibbleBtn,
	].forEach(element => addNibbleForm.appendChild(element));

	addNibbleModal.appendChild(addNibbleForm);
	document.body.appendChild(addNibbleModal);
	addNibbleModal.showModal();

	addNibbleForm.addEventListener('submit', e => {
		e.preventDefault();
		const formData = new FormData(e.target);

		const nibbleName = formData.get('nibble-name');
		const nibbleNotes = formData.get('notes');
		const nibbleDate = formData.get('due-date'); 
		const nibblePriority = formData.get('priority');

		console.log({ nibbleName, nibbleNotes, nibbleDate, nibblePriority });

		project.addNibble(nibbleName, nibbleNotes, nibbleDate, nibblePriority);
		addNibbleModal.close();
		saveProjects();
		renderProjects();
        renderNibbles();

		console.log(projects.getProjects());
	});
}

function createEditNibbleModal(nibble) {

}

export { 
    createAddProjectModal, 
    createEditProjectModal, 
    createAddNibbleModal, 
    createEditNibbleModal
    }