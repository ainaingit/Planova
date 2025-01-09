class TaskView {
    constructor() {
        this.taskContainer = document.getElementById('task-container');
    }

    displayTasks(tasks) {
        this.taskContainer.innerHTML = ''; // Clear existing tasks
        tasks.forEach(task => {
            const taskElement = document.createElement('tr');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <td>${task.title}</td>
                <td>
                    <select data-id="${task.id}" class="form-control status-selector">
                        <option value="à faire" ${task.status === "à faire" ? "selected" : ""}>À faire</option>
                        <option value="en cours" ${task.status === "en cours" ? "selected" : ""}>En cours</option>
                        <option value="terminée" ${task.status === "terminée" ? "selected" : ""}>Terminée</option>
                    </select>
                </td>
                <td>
                    <button class="btn btn-danger btn-sm" data-id="${task.id}">Supprimer</button>
                </td>
            `;
            this.taskContainer.appendChild(taskElement);
        });
    }
}
