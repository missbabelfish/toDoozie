import projects, { Project } from "./projects";

// create variables for containers
const projectsContainer = document.querySelector('projects-container');
const nibblesContainer = document.querySelector('nibbles-container')

// render projects
function renderProjects() {
    console.log('renderProjects fired')

    // clear projects container
    // projectsContainer.innerHTML = '';

    // get projects from project list
    const projectList = projects.getProjects()

    // for each project
    projectList.forEach((project, index) => {
        console.log(project.name)
    }) 

    // create project div

    // project name

    // project status

    // button div

    // edit button

    // delete button

    // append elements to project div

    // event listener to check which project has focus and render its nibbles
}


// delete project handler

    // confirm if want to delete

    // delete from project list

    // rerender stuff

    // store updated list


function renderNibbles() {

    // clear main container
    projectsContainer.innerHTML = ''

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