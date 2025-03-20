import './styles.css';
import { createAddProjectModal, createAddNibbleModal } from './modules/modals'
import { renderProjects, renderNibbles } from './modules/view';
import { getProjectsFromStorage } from './modules/database';
import projects from './modules/projects';
import createChaosBox from './modules/chaosBox';


const newProjectButton = document.getElementById('new-proj-btn')
const newNibbleButton = document.getElementById('new-nibble-btn');
const addProjectModal = document.getElementById('add-project-modal')
const submitProjectButton = document.getElementById('submit-project')
const cancelProjectButton = document.getElementById('cancel-project')

newProjectButton.addEventListener('click', () => {
	createAddProjectModal();
});

if (JSON.parse(localStorage.getItem('all-projects')) === null) {
    createChaosBox();
}
// getProjectsFromStorage();
renderProjects()
renderNibbles(projects.getProjects()[0])


