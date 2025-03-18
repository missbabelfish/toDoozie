import './styles.css';

const newProjectButton = document.getElementById('new-proj-btn')
const addProjectModal = document.getElementById('add-project-modal')
const submitProjectButton = document.getElementById('submit-project')
const cancelProjectButton = document.getElementById('cancel-project')

newProjectButton.addEventListener('click', () => {
    addProjectModal.showModal()
})

cancelProjectButton.addEventListener('click', (e) => {
    e.preventDefault()
    addProjectModal.close()
})


