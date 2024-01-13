var body = document.getElementById("body");

// three buttons on top of page
var todoButton = document.getElementById("to-do-button");
var doingButton = document.getElementById("doing-button");
var doneButton = document.getElementById("done-button");

// three sections of page
var todo = document.getElementById("todo");
var doing = document.getElementById("doing");
var done = document.getElementById("done");

//hiding sections by default
todo.style.display = "block";
doing.style.display = "none";
done.style.display = "none";

// create a simple instance
// by default, it only adds horizontal recognizers
var bodyListener = new Hammer(body);

var currentSection = "todo";

// the first screen is todo so show todo section
// then if user slides right, show doing section
// then if user slides right, show done section
// then if user slides left, show doing section
// then if user slides left, show todo section

bodyListener.on("panleft panright", function(ev) {
    if (ev.type === "panleft") {
        if (currentSection === "todo") {
            currentSection = "doing";
        } else if (currentSection === "doing") {
            currentSection = "done";
        }
    } else if (ev.type === "panright") {
        if (currentSection === "done") {
            currentSection = "doing";
        } else if (currentSection === "doing") {
            currentSection = "todo";
        }
    }

    // Hide all sections
    todo.style.display = "none";
    doing.style.display = "none";
    done.style.display = "none";

    // Show current section with a sliding effect
    document.getElementById(currentSection).style.display = "block";
    document.getElementById(currentSection).style.transition = "display 2s";
});

// Add click event listeners to the buttons
todoButton.addEventListener("click", function() {
    // Hide all sections
    todo.style.display = "none";
    doing.style.display = "none";
    done.style.display = "none";

    // Show todo section
    todo.style.display = "block";
    currentSection = "todo";
});

doingButton.addEventListener("click", function() {
    // Hide all sections
    todo.style.display = "none";
    doing.style.display = "none";
    done.style.display = "none";

    // Show doing section
    doing.style.display = "block";
    currentSection = "doing";
});

doneButton.addEventListener("click", function() {
    // Hide all sections
    todo.style.display = "none";
    doing.style.display = "none";
    done.style.display = "none";

    // Show done section
    done.style.display = "block";
    currentSection = "done";
});


 // opening the form
 const footer = document.querySelector('.footer')
 const taskButton = document.getElementById("add-task")

 const openForm = () => {
    footer.classList.toggle('expanded')
    footer.innerHTML = `<form id="adding-task" class="p-5">
    <div>
      <input type="text" class="w-full  text-center rounded-2xl px-2 text-2xl p-4 bg-logo-color text-white font-bold "
       placeholder="What do you need to do?" >
    </div>
    <div></div>
  </form>`
    
}

 taskButton.addEventListener('click' , openForm)