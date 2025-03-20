import projects, { Project } from "./projects";
import { saveProjects } from "./database";

export default function createChaosBox() {
    console.log(projects.getProjects())
    console.log(JSON.parse(localStorage.getItem('all-projects')));
    if (JSON.parse(localStorage.getItem('all-projects')) === null) {
		projects.addProject('Chaos Box', 'working');
		console.log(projects.getProjects());
		saveProjects();
	}
    
}