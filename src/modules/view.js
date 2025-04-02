import projects, { Project } from "./projects";
import 
{ 
    createEditProjectModal,
    createAddNibbleModal,
    createEditNibbleModal
} from "./modals";
import Nibble from './nibbles';
import { getProjectsFromStorage, saveProjects } from "./database";

// create variables for containers
const projectsContainer = document.getElementById('projects-container');
const nibblesContainer = document.getElementById('nibbles-container');

// render projects
function renderProjects() {

    // clear projects container
    projectsContainer.innerHTML = '';

    // get projects from project list
    const projectList = projects.getProjects()

    // for each project
    projectList.forEach((project, index) => {
    
        // create project div
        const projectCard = document.createElement('div')
        projectCard.classList.add('project-card')
    
        // project name
        const projectName = document.createElement('h3')
        projectName.textContent = project.name
    
        // project status
        const projectStatus = document.createElement('span')
        projectStatus.textContent = project.status
    
        // button div
        const projectButtons = document.createElement('div')
    
        // edit button
        const projectEditBtn = document.createElement('button')
        projectEditBtn.id = 'project-edit-btn'
        projectEditBtn.textContent = 'Edit Project'
        projectEditBtn.addEventListener('click', () => {
            createEditProjectModal(project)
        })

        // add task button
        const addNibbleBtn = document.createElement('button');
		addNibbleBtn.id = 'add-nibble-btn';
		addNibbleBtn.textContent = 'Add Nibble';
		addNibbleBtn.addEventListener('click', () => {
			createAddNibbleModal(project, index);
		});
        
        // delete button
        const projectDeleteBtn = document.createElement('button')
        projectDeleteBtn.id = 'project-delete-btn'
        projectDeleteBtn.textContent = 'Delete Project'
        projectDeleteBtn.addEventListener('click', () => {
            projectDeleteHandler(project)
        })

        // append elements to project div
        projectCard.appendChild(projectName)
        projectCard.appendChild(projectStatus);
        projectButtons.appendChild(projectEditBtn);
        projectButtons.appendChild(addNibbleBtn);
        projectButtons.appendChild(projectDeleteBtn);
        projectCard.appendChild(projectButtons);
        
        projectsContainer.append(projectCard)

        // event listener to check which project has focus and render its nibbles
        projectCard.addEventListener('click', () => {
            // remove active class from all other projects
            displayActiveProject(projectCard, project)
        })

    }) 

}


// delete project handler
function projectDeleteHandler(project) {
    if (confirm(`Are you sure you want to delete ${project.name}?`)) {
        projects.deleteProject(project);
		saveProjects();
		renderProjects();
    }
    
}

function displayActiveProject(projectCard, project) {
    projectsContainer.childNodes.forEach(child => {
        if (child.classList.contains('active')) {
            child.classList.remove('active')
        }
    })
    projectCard.classList.add('active')
    renderNibbles(project);
}

function renderNibbles(project) {
    // clear main container
	nibblesContainer.innerHTML = '';

    if (project.nibbles.length === 0) {
        nibblesContainer.textContent = 'no nibbles to nibble'
        return
    }

	// get all nibbles
	const nibbles = project.nibbles;

	const nibbleHeader = document.createElement('h2');
	nibbleHeader.classList.add('headers');
	nibbleHeader.textContent = `${project.name}`;
	nibblesContainer.appendChild(nibbleHeader);

	// for each nibble
	nibbles.forEach((nibble, index) => {
		// check if nibble active,

		// create nibble container div
		const nibbleCard = document.createElement('div');
		const nibbleName = document.createElement('h3');
		nibbleName.textContent = nibble.name;
		const nibbleNotes = document.createElement('p');
		nibbleNotes.textContent = nibble.notes;
		const nibbleDue = document.createElement('p');
		nibbleDue.textContent = nibble.dueDate;
		const nibblePriority = document.createElement('p');
		nibblePriority.textContent = nibble.priority;
		const nibbleEditBtn = document.createElement('button');

		nibbleEditBtn.textContent = 'Edit Nibble';
		nibbleEditBtn.addEventListener('click', () => {
			nibbleEditHandler(project, nibble);
		});

		const nibbleDeleteBtn = document.createElement('button');
		nibbleDeleteBtn.textContent = 'Delete Nibble';
		nibbleDeleteBtn.addEventListener('click', () => {
            nibbleDeleteHandler(project, nibble, index);
        })

        // append elements
        nibbleCard.appendChild(nibbleName)
        nibbleCard.appendChild(nibbleNotes)
        nibbleCard.appendChild(nibbleDue)
        nibbleCard.appendChild(nibblePriority)
        nibbleCard.appendChild(nibbleEditBtn)
        nibbleCard.appendChild(nibbleDeleteBtn)
        
		// append to container
		nibblesContainer.appendChild(nibbleCard);
	});

	// check if all nibbles eaten, update project status
}

function nibbleEditHandler(project, nibble) {
    createEditNibbleModal(project, nibble)
}

// delete nibble handler
function nibbleDeleteHandler(project, nibble, nibbleIndex) {
    if (confirm(`Are you sure you want to delete ${nibble.name}?`)) {
        nibble.deleteNibble(project, nibbleIndex)
        renderNibbles(project)
        saveProjects()
    }
}


export { renderProjects, renderNibbles }