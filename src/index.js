document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const input = document.getElementById("new-task-description");
    const taskDescription = input.value;
    
    const tasksList = document.getElementById("tasks");
    const newTaskLi = document.createElement("li");
    newTaskLi.textContent = taskDescription;
    
    tasksList.appendChild(newTaskLi);
    input.value = "";
  });
});