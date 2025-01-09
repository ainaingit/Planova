
class TaskController {
    constructor() {
        this.model = new TaskModel();
        this.view = new TaskView();

        // Afficher toutes les tâches au début
        this.view.displayTasks(this.model.tasks);

        // Ajouter une tâche
        document.getElementById('task-form').addEventListener('submit', event => {
            event.preventDefault();
            const taskTitle = document.getElementById('task-title').value;
            if (taskTitle) {
                this.model.addTask({ id: Date.now(), title: taskTitle, status: "à faire" });
                this.view.displayTasks(this.model.tasks);
                document.getElementById('task-title').value = ''; // Reset input
            }
        });

        // Supprimer une tâche
        document.getElementById('task-container').addEventListener('click', event => {
            if (event.target.tagName === 'BUTTON') {
                const taskId = Number(event.target.dataset.id);
                this.model.deleteTask(taskId);
                this.view.displayTasks(this.model.tasks);
            }
        });

        // Changer le statut d'une tâche
        document.getElementById('task-container').addEventListener('change', event => {
            if (event.target.classList.contains('status-selector')) {
                const taskId = Number(event.target.dataset.id);
                const newStatus = event.target.value;
                this.model.updateStatus(taskId, newStatus);
            }
        });

        // Filtrer les tâches par statut
        document.getElementById('filter-status').addEventListener('change', event => {
            const filterValue = event.target.value;
            let filteredTasks = this.model.tasks;

            if (filterValue !== 'all') {
                filteredTasks = this.model.tasks.filter(task => task.status === filterValue);
            }

            this.view.displayTasks(filteredTasks);
        });
    }
}

// Initialisation du contrôleur
new TaskController();
