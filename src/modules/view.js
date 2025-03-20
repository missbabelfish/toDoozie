import projects, { Project } from "./projects";
import 
{ 
    createEditProjectModal,
    createAddNibbleModal,
    createEditNibbleModal
} from "./modals";
import { getProjectsFromStorage, saveProjects } from "./database";

// create variables for containers
const projectsContainer = document.getElementById('projects-container');
const nibblesContainer = document.getElementById('nibbles-container');

// render projects
function renderProjects() {
    console.log('renderProjects fired')

    // clear projects container
    projectsContainer.innerHTML = '';

    // get projects from project list
    const projectList = projects.getProjects()

    // for each project
    projectList.forEach((project, index) => {
        console.log(project)
    
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
			createAddNibbleModal(project);
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
    }) 

    // event listener to check which project has focus and render its nibbles
}


// delete project handler
function projectDeleteHandler(project) {
    if (confirm(`Are you sure you want to delete ${project.name}?`)) {
        projects.deleteProject(project);
		saveProjects();
		renderProjects();
    }
    
}

function renderNibbles() {
	const seedProject = projects.getProjects()[0];
    console.log(seedProject)
	// clear main container
	nibblesContainer.innerHTML = '';

	// get all nibbles
	const nibbles = seedProject.nibbles;
    console.log(nibbles)

	const nibbleHeader = document.createElement('h2');
	nibbleHeader.classList.add('headers');
	nibbleHeader.textContent = `${seedProject.name}`;
	nibblesContainer.appendChild(nibbleHeader);

	// for each nibble
	nibbles.forEach(nibble => {
		console.log(nibble);
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
		// nibbleEditBtn.addEventListener('click', () => {
		// 	nibbleEditHandler(seedProject, nibble);
		// });
		const nibbleDeleteBtn = document.createElement('button');
		nibbleDeleteBtn.textContent = 'Delete Nibble';
		// nibbleDeleteBtn.addEventListener('click', () => {
        //     nibbleDeleteHandler(seedProject, nibble);
        // })
        console.log({
            nibbleName,
            nibbleNotes,
            nibbleDue,
            nibblePriority,
            nibbleEditBtn,
            nibbleDeleteBtn
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
	// (You can implement this logic here)
}

// function nibbleEditHandler(nibble) {
//     createEditNibbleModal(nibble)
// }

// delete nibble handler
// function nibbleDeleteHandler(project, nibble) {
//     if (confirm('Are you sure you want to delete this nibble?')) {
//         nibble.deleteNibble(project, nibble)
//     }
// }


export { renderProjects, renderNibbles }