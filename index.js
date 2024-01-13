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

//some static tasks
var tasks = [
    {
        status: "todo",
        taskId: 1,
        title: "Complete Project Proposal",
        description: "Draft and submit the project proposal for review.",
        date: "2022-02-15",
        priority: "red"
    },
    {
        status: "doing",
        taskId: 2,
        title: "Prepare Presentation",
        description: "Create a compelling presentation for the upcoming meeting.",
        date: "2022-02-20",
        priority: "orange"
    },
    {
        status: "todo",
        taskId: 3,
        title: "Review Code Changes",
        description: "Review and provide feedback on recent code changes.",
        date: "2022-02-25",
        priority: "yellow"
    },
    {
        status: "done",
        taskId: 4,
        title: "Meeting with Client",
        description: "Conduct a virtual meeting with the client to discuss project updates.",
        date: "2022-03-01",
        priority: "red"
    },
    {
        status: "doing",
        taskId: 5,
        title: "Debugging Session",
        description: "Collaborate with the team to debug and fix reported issues.",
        date: "2022-03-05",
        priority: "orange"
    }
];

// Display tasks in specific sections based on their status
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

function TaskCard(data) {
    return `<div class="bg-${data.priority} p-4 rounded-lg shadow mb-4">
                <span id="title" class="font-bold text-xl ">${data.title}</span>
                <span id="date" class=" ml-1 text-xs">${data.date}</span>
                <span id="task-num" class="ml-48 font-bold">${data.taskId}</span>
                <p>${data.description}</p>
            </div>`;
}

 // opening the form
 const footer = document.querySelector('.footer')
 const taskButton = document.getElementById("add-task")

 // collaps add task by default
 footer.classList.remove('expanded');
 // Toggle on click
 const openForm = () => {
    footer.classList.toggle('expanded')
    footer.innerHTML = `<form id="adding-task" class="p-5 gap-4 flex flex-col">
    <div>
      <input type="text" class="w-full  text-center rounded-2xl px-2 text-2xl p-4 bg-logo-color text-white font-bold "
       placeholder="What do you need to do?" >
    </div>
    <hr class= "">
    <div class="check-boxes">
    <input type="checkbox" value="high-priority">
    </div>
  </form>`
    
}

 taskButton.addEventListener('click' , openForm)