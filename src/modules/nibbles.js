import projects, { Project } from './projects';

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
      this.newPriority = newPriority
    }
    // delete nibble
    deleteNibble(project, nibble) {
        
    }
}

// export class, methods
export default Nibble;
