 function addTask() {
    let taskText = document.getElementById("taskInput").value;
    if (taskText.trim() === "") return;

    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(this)"> 
                    <span>${taskText}</span> 
                    <button onclick="removeTask(this)">Delete</button>`;
    document.getElementById("taskList").appendChild(li);
    document.getElementById("taskInput").value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

function toggleTask(checkbox) {
    let task = checkbox.nextElementSibling;
    task.style.textDecoration = checkbox.checked ? "line-through" : "none";
}

