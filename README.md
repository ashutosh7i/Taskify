# Taskify📓⏳    [![Azure Static Web Apps CI/CD](https://github.com/ashutosh7i/Taskify/actions/workflows/azure-static-web-apps-ambitious-pebble-058511710.yml/badge.svg)](https://github.com/ashutosh7i/Taskify/actions/workflows/azure-static-web-apps-ambitious-pebble-058511710.yml)

"Effortless Productivity, Seamless Journaling - Simplify Your Day with Taskify". Taskify is a mobile-friendly web application designed for simple and efficient task management and journaling.

## Inspiration
Taskify, our project, stemmed from the frustration of setting New Year resolutions without effective implementation. The challenges of journaling and completing tasks on time inspired the creation of Taskify—a minimalistic tool designed to simplify goal-setting and tracking. Taskify reflects a personal commitment to growth, offering a dedicated space for organization and focus to make this year truly transformative.

## What it does
Taskify, a minimal and aesthetic web application serving as a streamlined task and journal management platform, employs a client-server architecture for seamless task management and journaling. The interactive user interface, designed with a focus on simplicity and aesthetics, is crafted using HTML, CSS, and JavaScript within a responsive design.

Task-related operations involve interpreting user messages through minimalistic event listeners and managing interactions with the server. The server, backed by a robust backend framework, oversees data persistence and retrieval from a database.

For offline data storage, Taskify embraces a minimal approach, utilizing local storage. This allows users to save data locally without relying on external servers, ensuring a seamless and aesthetically pleasing experience.

In the journaling aspect, users input their entries through a designated interface, with the application employing form handling mechanisms to process and store journal content securely.

The use of Hammer.js enables horizontal swipe gestures, enhancing user interactions, particularly on touch-enabled devices. Taskify, at its core, is a technical amalgamation of web technologies,real-time communication, providing a streamlined platform for task management and journaling.


## Features

- **Sleek and Minimalistic Design:** Embrace a clutter-free and sleek interface in Taskify, providing users with a focused and distraction-free task management experience. The minimalistic design enhances visual clarity, ensuring an intuitive and efficient workflow.

- **Touch-Responsive Interface:** Taskify utilizes Hammer.js for its gesture support, elevating the user experience with a smoother and more precise touch interface. Hammer.js simplifies the implementation of touch gestures, making the interface highly intuitive and engaging. The library's versatility allows for easy customization of touch interactions, contributing to an overall improved and seamless user experience.

- **Prioritization:** Categorize tasks based on priority levels. Organize your workload by assigning urgency and importance to each task.

- **Journaling:** Capture your thoughts and reflections seamlessly within the same platform. Integrate your task management and journaling in one place.

- **Mobile-Friendly:** Taskify is optimized for mobile screens, ensuring a smooth and intuitive experience on your smartphone or tablet.

## Getting Started

### Prerequisites

Make sure you have Git installed on your machine. If not, you can download and install it from [Git](https://git-scm.com/).

### Installation

1. **Clone the Taskify repository:**

   ```bash
   git clone https://github.com/ashutosh7i/Taskify.git

## How to run

1. **Install dependencies:**
    ```bash
    npm install
    ```
2 **run development server:**
    ```bash
    vite build
    ```
O. **To Directly serve build-:**
    ```bash
    cd /dist
    start live server
    serve -g 
    ```

O. **Or Open the `index.html` file in your preferred web browser.**

## Usage

1. **Navigate between Task Sections:**
    - Swipe left, right or Click on the "To-do," "Doing," and "Done" buttons to switch between different task sections.
    
2. **Add a New Task:**
    - Click on the "Add a Task ➕" button to create a new task.
    - Specify the task title, description, date.
    
3. **Prioritize Tasks:**
    - Assign priority levels to tasks based on urgency and importance.
    - Use different sections for high-priority and low-priority tasks.
    
4. **Explore the Journal Section:**
    - Click on the "Journal" button to access the journal section.
    - Record your thoughts, reflections, or any additional notes.

4. **Offline usage:**
    - The application can be used without internet so your data is upto you only🤫, it makes use of browser local storage so it is always available.

## Technologies Used

- **HTML:** Markup language for structuring the web page.
- **CSS (Tailwind CSS):** Utility-first CSS framework for styling.
- **JavaScript (Hammer.js):** Library for handling touch gestures, enhancing mobile interactivity.

## Contributing

If you'd like to contribute to Taskify, feel free to fork the repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or issues, please contact Aashutosh Soni at work@ashutosh7i.dev .

