// Fetch and render tasks
async function fetchTasks() {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    renderTasks(tasks);
}

// Render tasks to the UI
function renderTasks(tasks) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.className = 'todo-item' + (task.completed ? ' completed' : '');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(task.id));

        const span = document.createElement('span');
        span.textContent = task.text;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => deleteTask(task.id));

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

// Add a new task
async function addTask() {
    const input = document.getElementById('todo-input');
    const text = input.value.trim();
    if (text) {
        await fetch('/api/tasks', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text })
        });
        input.value = '';
        fetchTasks();
    }
}

// Toggle task completion
async function toggleTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'PUT' });
    fetchTasks();
}

// Delete a task
async function deleteTask(id) {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    fetchTasks();
}

// Event listeners
document.getElementById('add-btn').addEventListener('click', addTask);
document.getElementById('todo-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Initial fetch
fetchTasks();