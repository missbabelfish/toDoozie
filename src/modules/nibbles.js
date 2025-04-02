import projects from './projects';

// create nibble
class Nibble {
	constructor(name, notes, dueDate, priority = 'medium') {
		this.name = name,
		this.notes = notes,
		this.dueDate = dueDate,
		this.priority = priority;
  }
    // edit nibble
  editNibble(newName, newNotes, newDueDate, newPriority) {
    this.name = newName
    this.notes = newNotes
    this.dueDate = newDueDate
    this.priority = newPriority.toLowerCase();
  }
  // delete nibble
  deleteNibble(project, nibbleIndex) {
    const projectList = projects.getProjects();
    const projectIndex = projectList.indexOf(project)
    projectList[projectIndex].nibbles.splice(nibbleIndex, 1)
  }
}

// export class, methods
export default Nibble ;
