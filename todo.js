// Selecting HTML elements used in the script
const titleInput = document.getElementById('task');
const descriptionInput = document.getElementById('description');
const dueDateInput = document.getElementById('datetime');
const addTaskButton = document.getElementById('addTaskButton');
const todoList = document.getElementById('todolist');

// Initializing an array to store all to-do items
let todos = [];

// Function to load to-dos from localStorage when the page loads
function loadTodos() {
    const storedTodos = localStorage.getItem('todos'); 
    if (storedTodos) { // Check if there are any stored to-dos
        todos = JSON.parse(storedTodos); 
        renderTodos(); // Render the loaded to-dos to the screen
    }
}

// Function to save the current list of to-dos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Function to add a new to-do item
function addTodo() {
    const title = titleInput.value;
    const description = descriptionInput.value;
    const dueDate = dueDateInput.value;

    // Check if title is empty, alert if title is empty
    if (title.trim() === '') {
        alert('Please enter a title.');
        return;
    }

    // Creating a new to-do object
    const todo = {
        id: Date.now(), // Unique ID based on the current timestamp
        title,
        description,
        dueDate: dueDate ? new Date(dueDate) : null, 
        completed: false 
    };

    todos.push(todo); // Add the new to-do to the array
    saveTodos(); // Save the updated to-do list to localStorage
    renderTodos(); // Render the updated to-do list
    clearInputs(); // Clear the input fields for a new entry
}

// Function to render  all to-do items in the list
function renderTodos() {
    todoList.innerHTML = ''; 

    todos.forEach(todo => { 
        const li = document.createElement('li');
        li.classList.toggle('completed', todo.completed); 

        
        li.innerHTML = `
            <span><strong>${todo.title}</strong></span>
            <span>${todo.description || ''}</span>
            <span>${todo.dueDate ? new Date(todo.dueDate).toLocaleString() : ''}</span>
            <button class="complete">Complete</button>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        `;

        // Add event listener to mark to-do as complete
        li.querySelector('.complete').addEventListener('click', () => {
            todo.completed = !todo.completed; 
            saveTodos(); // Save the updated to-do list
            renderTodos(); // Re-render the to-do list with updated status
        });

        // Add event listener to edit a to-do item
        li.querySelector('.edit').addEventListener('click', () => {
            titleInput.value = todo.title; // Set title input with to-do's title
            descriptionInput.value = todo.description; // Set description input
            dueDateInput.value = todo.dueDate ? new Date(todo.dueDate).toISOString().slice(0, 16) : ''; // Set date input
            
            todos = todos.filter(t => t.id !== todo.id); // Remove the to-do from the array
            saveTodos(); // Save the updated to-do list
            renderTodos(); // Re-render the list without the removed to-do
        });

        // Add event listener to delete a to-do item
        li.querySelector('.delete').addEventListener('click', () => {
            todos = todos.filter(t => t.id !== todo.id); // Filter out the to-do to delete it
            saveTodos(); // Save the updated to-do list
            renderTodos(); // Re-render the list without the deleted to-do
        });

        todoList.appendChild(li); 
    });
}

// Function to clear input fields after a to-do is added
function clearInputs() {
    titleInput.value = '';
    descriptionInput.value = '';
    dueDateInput.value = '';
}

// Event listener for adding a new to-do when button is clicked
addTaskButton.addEventListener('click', addTodo);

// Initial load of to-dos from localStorage when the page is first loaded
loadTodos();
