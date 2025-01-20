"use strict";
const assignTasks = (employee) => {
    if ('skills' in employee && 'teamSize' in employee) {
        return `Assigning tasks to DeveloperManager with skills: ${employee.skills.join(', ')} and managing team of size: ${employee.teamSize}`;
    }
    else if ('skills' in employee) {
        return `Assigning tasks to Developer with skills: ${employee.skills.join(', ')}`;
    }
    else if ('teamSize' in employee) {
        return `Assigning tasks to Manager managing team of size: ${employee.teamSize}`;
    }
    else {
        return 'Unknown employee type';
    }
};
let developer = {
    skills: ['JavaScript', 'TypeScript', 'React']
};
let manager = {
    teamSize: 5,
    projects: ['Project1', 'Project2']
};
let developerManager = {
    skills: ['JavaScript', 'TypeScript', 'React'],
    teamSize: 5,
    projects: ['Project1', 'Project2']
};
console.log(assignTasks(developer));
console.log(assignTasks(manager));
console.log(assignTasks(developerManager));
