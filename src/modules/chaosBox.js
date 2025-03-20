import projects, { Project } from "./projects";

export default function createChaosBox() {
    console.log('default fired')
    projects.addProject('Chaos Box', 'working');
}

