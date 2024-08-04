 function addTask() {
    // Get the input value
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    // Check if the input is not empty
    if (taskValue) {
        // Create a new list item
        const li = document.createElement('li');

        // Create a text node for the task
        const textNode = document.createTextNode(taskValue);

        // Create a remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove';
        removeButton.onclick = function() {
            li.remove();
        };

        // Append the text node and button to the list item
        li.appendChild(textNode);
        li.appendChild(removeButton);

        // Append the list item to the list
        document.getElementById('taskList').appendChild(li);

        // Clear the input field
        taskInput.value = '';
    } else {
        alert('Please enter a task.');
    }
    
}
