function addTask() {
  let title = document.getElementById("taskTitle").value;
  let desc = document.getElementById("taskDesc").value;

  if (title.trim() === "" || desc.trim() === "") {
      alert("Please fill out all fields!");
      return;
  }

  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.innerHTML = `<span><strong>${title}</strong>: ${desc}</span> 
                       <button class="delete-btn" onclick="deleteTask(this)">X</button>
                       <button class="complete-btn" onclick="markComplete(this)">✔</button>`;

  document.getElementById("pendingTasks").appendChild(taskDiv);
  
  // Clear input fields
  document.getElementById("taskTitle").value = "";
  document.getElementById("taskDesc").value = "";
}

function deleteTask(btn) {
  btn.parentElement.remove();
}

function markComplete(btn) {
  let task = btn.parentElement;
  task.classList.add("completed");
  document.getElementById("completedTasks").appendChild(task);
  btn.remove(); // Remove the complete button after marking as completed
}
