document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

   
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => addTaskToDOM(task));
    }

    function addTaskToDOM(task) {
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li);
    }

    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
            addTaskToDOM(task);
            saveTask(task);
            taskInput.value = '';
        }
    });

   
    function saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

   
    loadTasks();
});