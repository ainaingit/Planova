class TaskView {
    constructor() {
        this.taskContainer = document.getElementById('task-container');
    }

    displayTasks(tasks) {
        this.taskContainer.innerHTML = ''; // Clear existing tasks
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <span>${task.title}</span>
                <button data-id="${task.id}">Supprimer</button>
            `;
            this.taskContainer.appendChild(taskElement);
        });
    }
}
