import './styles.css';
import { createAddProjectModal } from './modules/modals'
import { renderProjects, renderNibbles } from './modules/view';

const newProjectButton = document.getElementById('new-proj-btn')
const addProjectModal = document.getElementById('add-project-modal')
const submitProjectButton = document.getElementById('submit-project')
const cancelProjectButton = document.getElementById('cancel-project')

newProjectButton.addEventListener('click', () => {
    createAddProjectModal()
})

renderProjects()


