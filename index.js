// Getting Elements-//
// body
var body = document.getElementById("body");


// three buttons on top of page
var todoButton = document.getElementById("to-do-button");
var doingButton = document.getElementById("doing-button");
var doneButton = document.getElementById("done-button");
// Space for task cards on each page
var todoCardSpace = document.getElementById("todoCardSpace");
var doingCardSpace = document.getElementById("doingCardSpace");
var doneCardSpace = document.getElementById("doneCardSpace");

//Code to maintain horizonatal swiping //
// three sections of page
var sections = ["todo", "doing", "done"];
var currentSectionIndex = 0;

//hiding sections by default
hideAllSections();
showCurrentSection();



// create a simple instance
// by default, it only adds horizontal recognizers
var bodyListener = new Hammer(body);

bodyListener.on("swipeleft swiperight", function(ev) {
    if (ev.type === "swipeleft") {
        if (currentSectionIndex === 2) {
            return;
        }
        else {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        console.log("swipeleft", currentSectionIndex)
        }
    } else if (ev.type === "swiperight") {
        if (currentSectionIndex === 0) {
            return;
        }
        else {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        console.log("swiperight", currentSectionIndex)
        }
    }

    hideAllSections();
    showCurrentSection();
});

//Button events to change sections //
// Add click event listeners to the buttons
todoButton.addEventListener("click", function() {
    setCurrentSectionIndex(0);
    hideAllSections();
    showCurrentSection();
});

doingButton.addEventListener("click", function() {
    setCurrentSectionIndex(1);
    hideAllSections();
    showCurrentSection();
});

doneButton.addEventListener("click", function() {
    setCurrentSectionIndex(2);
    hideAllSections();
    showCurrentSection();
});

function hideAllSections() {
    sections.forEach(function(section) {
        document.getElementById(section).style.display = "none";
    });
}

function showCurrentSection() {
    document.getElementById(sections[currentSectionIndex]).style.display = "block";
}

function setCurrentSectionIndex(index) {
    currentSectionIndex = index;
}

// //some static tasks
// var tasks = [
//     {
//         status: "todo",
//         taskId: 1,
//         title: "Complete Project Proposal",
//         description: "Draft and submit the project proposal for review.",
//         date: "2022-02-15",
//         priority: "red"
//     },
//     {
//         status: "doing",
//         taskId: 2,
//         title: "Prepare Presentation",
//         description: "Create a compelling presentation for the upcoming meeting.",
//         date: "2022-02-20",
//         priority: "white"
//     },
//     {
//         status: "todo",
//         taskId: 3,
//         title: "Review Code Changes",
//         description: "Review and provide feedback on recent code changes.",
//         date: "2022-02-25",
//         priority: "yellow"
//     },
//     {
//         status: "done",
//         taskId: 4,
//         title: "Meeting with Client",
//         description: "Conduct a virtual meeting with the client to discuss project updates.",
//         date: "2022-03-01",
//         priority: "red"
//     },
//     {
//         status: "doing",
//         taskId: 5,
//         title: "Debugging Session",
//         description: "Collaborate with the team to debug and fix reported issues.",
//         date: "2022-03-05",
//         priority: "white"
//     }
// ];

// Function to retrieve tasks from local storage
function getTasksFromLocalStorage() {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
}

// Display tasks from local storage in specific sections based on their status
function displayTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage();

    tasks.forEach(function(task) {
        var taskCard = TaskCard(task);
        if (task.status === "todo") {
            todoCardSpace.innerHTML += taskCard;
        } else if (task.status === "doing") {
            doingCardSpace.innerHTML += taskCard;
        } else if (task.status === "done") {
            doneCardSpace.innerHTML += taskCard;
        }
    });
}

function TaskCard(data) {
    // Map priority values to custom background colors
    const priorityColors = {
        "red": "#FF5757",
        "white": "#FFFFFF",
        "yellow": "#FFE766",
    };

    // Use a fallback color if priority is not in the map
    const priorityColor = priorityColors[data.priority] || "#000000";

    return `<div style="background-color: ${priorityColor}" class="p-4 rounded-lg shadow-md mb-4 grid taskb">
       <div>       
    <span id="title" class="font-bold text-2xl ">${data.title}</span>
                <span id="date" class=" ml-1 text-xs">${data.date}</span>
                </div>
                <span id="task-num" class="ml-48 font-bold">${data.taskId}</span>
                <p id="description" class=" font-normal text-lg ">${data.description}</p>
                <div class="buttons flex gap-4 h-6 mt-2">
                <button onclick="deleteTask(${data.taskId})" class="text-white px-2 py-1 rounded-lg  bg-black text-xs ">Delete🗑️</button>
                <button onclick="moveTask(${data.taskId})" class="text-white px-2 py-1 rounded-lg  bg-black text-xs">Progress➡️</button>
                </div>
            </div>`;
} 

displayTasksFromLocalStorage();

 // opening the form
 const footer = document.querySelector('.footer')
 const taskButton = document.getElementById("add-task")

 // collaps add task by default
 footer.classList.remove('expanded');
 // Toggle on click
 const openForm = () => {
    footer.classList.toggle('expanded')
    footer.innerHTML = ` <form id="adding-task" class="p-5 gap-4 flex flex-col bg-logo-color">
    <div>
        <label for="task-title" class="text-white font-bold text-xl ">Title:</label>
        <input type="text" id="task-title" class="w-full text-center shadow-2xl rounded-2xl px-2 text-2xl p-4 bg-logo-color  placeholder:text-white border border-white" placeholder="What do you need to do?">
    </div>
    
    <div>
        <label for="task-description" class="text-white font-bold text-xl">Description:</label>
        <textarea id="task-description" class="placeholder:text-white text- w-full text-center shadow-2xl  rounded-2xl px-2 text-2xl  p-4 bg-logo-color text-white  border border-" placeholder="Provide a description..."></textarea>
    </div>
    
    <!-- <hr class="text-white"> -->
    <div class="flex gap-3 justify-center flex-col" >
        <label for="task-date" class="text-white font-bold text-xl self-center">Date:</label>
        <input type="date" id="task-date" class="self-center w-full text-center rounded-2xl border border-white shadow-2xl px-2 text-2xl p-4 bg-logo-color text-white " placeholder="mm/dd/yyyy" ></input>
    </div>

    <hr class="text-white">
    
    <div>
    <label class="text-white font-bold text-xl">Priority:</label>
    <div class="flex justify-between">
        <div>
            <input type="radio" id="no-priority" name="priority" value="white">
            <label for="no-priority" class="text-white font-extrabold">No Priority</label>
        </div>
        <div>
            <input type="radio" id="medium-priority" name="priority" value="yellow" checked>
            <label for="medium-priority" class="text-white font-extrabold">Medium Priority</label>
        </div>
        <div>
            <input type="radio" id="high-priority" name="priority" value="red">
            <label for="high-priority" class="text-white font-extrabold">High Priority</label>
        </div>
        </div>
    </div>
    <!-- <hr class=""> -->
    <div class="flex justify-between">
        <button onclick="discardForm()" type="button" id="discard-task" class="bg-red font-bold px-4 py-2 rounded-full">Discard</button>
        <button onclick="saveTask()" type="button" id="save-task" class="bg-white text-black px-4 py-2 rounded-full font-bold  ">Save</button>
    </div>
</form>
`    
}

 taskButton.addEventListener('click' , openForm)




 // Saving a new Task to db

function saveTask() {
    // Get values from the form
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const date = document.getElementById("task-date").value;

    // Get the selected priority
    let priority;
    const priorityRadios = document.getElementsByName("priority");
    for (const radio of priorityRadios) {
        if (radio.checked) {
            priority = radio.value;
            break;
        }
    }

    // Create a new task object
    const newTask = {
        status: "todo",
        title: title,
        description: description,
        date: date,
        priority: priority
    };

    // Save the new task
    const tasksAfterAdding = saveNewTask(newTask);
    console.log('Tasks after adding:', tasksAfterAdding);

    // Optionally, you can display the new task on the page immediately
    const taskCard = TaskCard(newTask);
    todoCardSpace.innerHTML += taskCard;

    // Clear form data
    clearFormData();

    // Close the form
    //footer.classList.remove('expanded');
    window.location.reload();
}

 // Function to save tasks to local storage
function saveTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Function to save a new task
function saveNewTask(newTask) {
    const tasks = getTasksFromLocalStorage();
    newTask.taskId = tasks.length + 1;
    tasks.push(newTask);
    saveTasksToLocalStorage(tasks);
    return tasks;
}

// // Function to update a specific task
// function updateTask(updatedTask) {
//     let tasks = getTasksFromLocalStorage();
//     tasks = tasks.map(task => (task.taskId === updatedTask.taskId ? updatedTask : task));
//     saveTasksToLocalStorage(tasks);
//     return tasks;
// }

// Function to move a task to the next status
function moveTask(taskId) {
    let tasks = getTasksFromLocalStorage();
    const taskToMove = tasks.find(task => task.taskId === taskId);
    const taskIndex = tasks.indexOf(taskToMove);

    // Move the task to the next status
    const statuses = ["todo", "doing", "done"];
    const nextStatusIndex = (statuses.indexOf(taskToMove.status) + 1) % statuses.length;
    taskToMove.status = statuses[nextStatusIndex];

    // Update the task in the array
    tasks[taskIndex] = taskToMove;
    saveTasksToLocalStorage(tasks);

    // Refresh the page to update
    location.reload();
    return tasks;
}

// Function to delete a task
function deleteTask(taskId) {
    let tasks = getTasksFromLocalStorage();
    tasks = tasks.filter(task => task.taskId !== taskId);
    saveTasksToLocalStorage(tasks);

    //refresh the page to update 
    location.reload();
    return tasks;
}

// Function to clear form data
function clearFormData() {
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-date").value = "";

    const priorityRadios = document.getElementsByName("priority");
    for (const radio of priorityRadios) {
        radio.checked = false;
    }
}

// Function to handle discarding the form
function discardForm() {
    // Clear form data
    clearFormData();

    // Close the form
    // footer.classList.remove('expanded');
    window.location.reload();
}

// // 4. Update a specific task
// const taskToUpdate = {
//     taskId: 1,
//     status: "done",
//     title: "Updated Task",
//     description: "This task has been updated.",
//     date: "2022-03-15",
//     priority: "red"
// };

// const tasksAfterUpdating = updateTask(taskToUpdate);
// console.log('Tasks after updating:', tasksAfterUpdating);
document.addEventListener("DOMContentLoaded", function () {
     // Check if the quote has already been displayed
     const quoteDisplayed = localStorage.getItem('quoteDisplayed');
     if (!quoteDisplayed) {
    // Fetch quote from API
    fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data => {
         // Choose a random quote from the response
         const randomIndex = Math.floor(Math.random() * data.length);
         const randomQuote = data[randomIndex];
        
         // Update modal content with the random quote
         document.getElementById("quoteModalContent").innerHTML = `
            <div class="flex flex-col text-center" >
             <h2 class="text-2xl font-bold mb-4 text-center ">Quote of the Day</h2>
             <p class="text-lg "> ${randomQuote.text}</p>
             <p class="text-sm mb-2"> ${randomQuote.author}</p>
             <button id="hideModalBtn" class="bg-blue  text-white font-extrabold py-2 px-4  rounded align-center">Continue</button>
             </div>
         `;
            // Show the modal on initial page load
            document.getElementById("quoteModal").classList.remove("hidden");

                localStorage.setItem('isFirstLoad', 'false');

            // Hide the modal when clicking outside of it
            document.getElementById("quoteModal").addEventListener("click", function (event) {
                if (event.target === this) {
                    this.classList.add("hidden");
                }
            });

            // Hide the modal when clicking the hide button
            document.getElementById("hideModalBtn").addEventListener("click", function () {
                document.getElementById("quoteModal").classList.add("hidden");
                 // Set the flag in local storage to indicate that the quote has been displayed
                 localStorage.setItem('quoteDisplayed', 'true');
            });
        })
        .catch(error => console.error('Error fetching quote:', error));
    }
});