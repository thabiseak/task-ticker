# To-Do List Web Application

![To-Do List](https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif)

A simple and interactive To-Do List application built with HTML, CSS, and JavaScript for managing tasks efficiently. This project uses a RESTful API to handle task data stored on a server, allowing users to add, view, and delete tasks. It includes user authentication, making it possible for each user to have a personalized task list.

![To-Do List Screenshot](screenshot.png)

## Features

- ![User Registration & Login](https://img.shields.io/badge/User%20Registration%20%26%20Login-%E2%9C%94%EF%B8%8F-brightgreen) **User Registration & Login**: Users can create accounts and log in to manage their tasks.
- ![Add Tasks](https://img.shields.io/badge/Add%20Tasks-%E2%9C%94%EF%B8%8F-brightgreen) **Add Tasks**: Users can add new tasks to their to-do list.
- ![View Tasks](https://img.shields.io/badge/View%20Tasks-%E2%9C%94%EF%B8%8F-brightgreen) **View Tasks**: Displays tasks in a tabular format with task names, statuses (Completed/Incomplete), and actions.
- ![Delete Tasks](https://img.shields.io/badge/Delete%20Tasks-%E2%9C%94%EF%B8%8F-brightgreen) **Delete Tasks**: Users can delete tasks, and the interface updates dynamically.
- ![Task Status](https://img.shields.io/badge/Task%20Status-%E2%9C%94%EF%B8%8F-brightgreen) **Task Status**: Displays each task's completion status, with "Incomplete" and "Completed" labels.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: ASP.NET Web API, hosted on MonsterASP.net
- **Database**: SQL Server

## Setup

1. **Clone this repository**:
    ```sh
    git clone https://github.com/yourusername/todo-list-webapp.git
    cd todo-list-webapp
    ```

2. **Update the API endpoint URLs** in the JavaScript code if necessary:
    - Open [`JS/script.js`](JS/script.js) and [`JS/main.js`](JS/main.js)
    - Replace the API URLs with your own if they differ.

3. **Host the frontend**:
    - You can host the frontend on GitHub Pages or any other static site hosting service.

## Usage

1. **Register a new user**:
    - Open the application in your browser.
    - Click on "Sign Up" and fill in the registration form.

2. **Log in**:
    - Use your credentials to log in and start managing your tasks.

3. **Add a new task**:
    - Enter the task details in the input field and click "Add Task".

4. **View and manage tasks**:
    - Tasks will be displayed in a table. You can mark them as completed or delete them.

## Future Enhancements

- **Task Editing**: Allow users to update existing tasks.
- **Task Filtering**: Filter tasks by completion status (e.g., show only completed or incomplete tasks).
- **Due Dates & Reminders**: Add options for due dates and task reminders.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any improvements or bug fixes.

## Contact

For any inquiries or feedback, please contact [thabuthavanesan@gmail.com](mailto:thabuthavanesan@gmail.com).

---

Thank you for using the To-Do List Web Application! We hope it helps you stay organized and productive.