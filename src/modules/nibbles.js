import projects, { Project } from './projects';

// create nibble
class Nibble {
	constructor(name, notes, dueDate, priority = 'medium') {
		this.name = name,
		this.notes = notes,
		this.dueDate = dueDate,
		this.priority = priority;
	}
}
// edit nibble
function editNibble(nibble) {}
// delete nibble

// export class, methods
export default Nibble;
