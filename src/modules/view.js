import projects, { Project } from "./projects";
import { createEditProjectModal } from "./modals";
import { getProjectsFromStorage, saveProjects } from "./database";

// create variables for containers
const projectsContainer = document.getElementById('projects-container');
const nibblesContainer = document.getElementById('nibbles-container')

// render projects
function renderProjects() {
    console.log('renderProjects fired')

    // clear projects container
    projectsContainer.innerHTML = '';

    // get projects from project list
    const projectList = projects.getProjects()
    console.log({projectList})

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
        
        // delete button
        const projectDeleteBtn = document.createElement('button')
        projectDeleteBtn.id = 'project-delete-btn'
        projectDeleteBtn.textContent = 'Delete Project'
        projectDeleteBtn.addEventListener('click', () => {
            projects.deleteProject(project) 
            saveProjects()
            renderProjects()
        })
            // append elements to project div
            
        projectCard.appendChild(projectName)
        projectCard.appendChild(projectStatus);
        projectButtons.appendChild(projectEditBtn);
        projectButtons.appendChild(projectDeleteBtn);
        projectCard.appendChild(projectButtons);
        
        projectsContainer.append(projectCard)
    }) 

    // event listener to check which project has focus and render its nibbles
}


// delete project handler

    // confirm if want to delete

    // delete from project list

    // rerender stuff

    // store updated list


function renderNibbles() {

    // clear main container
    nibblesContainer.innerHTML = ''

    const nibbleHeader = document.createElement('h2')
    nibbleHeader.classList.add('headers')
    const projectName = Project.getProject(project)
    nibbleHeader.textContent = `${projectName}`

    // for each nibble

    // check if nibble active,

    // create nibble container div

    // elements - name, notes, dueDate, priority, edit, delete, checkbox

    // check if all nibbles eaten, update project status

    // append elements

    // add event listener to change active class on nibble
}

// edit nibble handler

    // create edit modal


// delete nibble handler

    // confirm delete nibble

    // delete nibble


export { renderProjects, renderNibbles }