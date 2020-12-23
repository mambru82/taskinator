var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function(event) {
    //prevents automatic refresh upon submission
    event.preventDefault();
    //captures the input for the task name
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    //captures the input for the task type 
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }
    formEl.reset();
    //package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    }

    //send it to the next function
    createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
        //create the list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";

    //create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";

    //add HTML content to the div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  
    listItemEl.appendChild(taskInfoEl);
   //add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

};

formEl.addEventListener("submit", taskFormHandler);