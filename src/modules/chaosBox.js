import projects, { Project } from "./projects";
import { saveProjects } from "./database";

export default function createChaosBox() {
	projects.addProject('Chaos Box', 'working');
}