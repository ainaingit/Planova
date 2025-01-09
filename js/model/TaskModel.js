class TaskModel {
    constructor() {
        this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }

    addTask(task) {
        this.tasks.push(task);
        this.updateLocalStorage();
    }

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.updateLocalStorage();
    }

    updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}
