var body = document.getElementById("body");

// three buttons on top of page
var todoButton = document.getElementById("to-do-button");
var doingButton = document.getElementById("doing-button");
var doneButton = document.getElementById("done-button");

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