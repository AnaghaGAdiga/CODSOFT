let projects = []; // Array to store projects
let tasks = []; // Array to store tasks

document.addEventListener("DOMContentLoaded", function() {
    const createProjectBtn = document.getElementById("createProjectBtn");
    const projectForm = document.getElementById("projectForm");
    const taskForm = document.getElementById("taskForm");

    createProjectBtn.addEventListener("click", openProjectForm);
    projectForm.addEventListener("submit", createProject);
    taskForm.addEventListener("submit", createTask);
});

function openProjectForm() {
    document.getElementById("projectFormModal").style.display = "block";
}

function closeProjectForm() {
    document.getElementById("projectFormModal").style.display = "none";
}

function openTaskForm() {
    // Populate project dropdown in task form
    const taskProjectDropdown = document.getElementById("taskProject");
    taskProjectDropdown.innerHTML = "";
    projects.forEach((project) => {
        const option = document.createElement("option");
        option.value = project.id;
        option.textContent = project.name;
        taskProjectDropdown.appendChild(option);
    });

    document.getElementById("taskFormModal").style.display = "block";
}

function closeTaskForm() {
    document.getElementById("taskFormModal").style.display = "none";
}

function createProject(event) {
    event.preventDefault();
    const projectName = document.getElementById("projectName").value;
    const projectDeadline = document.getElementById("projectDeadline").value;

    const project = {
        id: Date.now(), // Unique ID for each project
        name: projectName,
        deadline: projectDeadline
    };

    projects.push(project);
    updateProjectList();
    closeProjectForm();
}

function createTask(event) {
    event.preventDefault();
    const taskName = document.getElementById("taskName").value;
    const taskDeadline = document.getElementById("taskDeadline").value;
    const taskProjectId = document.getElementById("taskProject").value;
    const taskProjectName = projects.find(project => project.id == taskProjectId).name;

    const task = {
        id: Date.now(), // Unique ID for each task
        name: taskName,
        deadline: taskDeadline,
        projectId: taskProjectId,
        projectName: taskProjectName,
        completed: false
    };

    tasks.push(task);
    updateTaskList();
    closeTaskForm();
}

function deleteProject(id) {
    projects = projects.filter(project => project.id !== id);
    // Also delete associated tasks
    tasks = tasks.filter(task => task.projectId !== id);
    updateProjectList();
    updateTaskList();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateTaskList();
}

function completeTask(id) {
    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = true;
    updateTaskList();
}

function updateProjectList() {
    const projectList = document.getElementById("projectList");
    projectList.innerHTML = "";
    projects.forEach((project) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project-item");
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>Deadline: ${project.deadline}</p>
            <button onclick="deleteProject(${project.id})">Delete Project</button>
        `;
        projectList.appendChild(projectElement);
    });
}

function updateTaskList() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task-item");
        taskElement.innerHTML = `
            <h3>${task.name}</h3>
            <p>Deadline: ${task.deadline}</p>
            <p>Project: ${task.projectName}</p>
            <
            <p>Status: ${task.completed ? 'Completed' : 'Incomplete'}</p>
            <button onclick="deleteTask(${task.id})">Delete Task</button>
            <button onclick="completeTask(${task.id})">Mark as Completed</button>
        `;
        taskList.appendChild(taskElement);
    });
}
