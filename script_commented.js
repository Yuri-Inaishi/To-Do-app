// script_commented.js

/*
 * This JavaScript file contains functionalities for the ToDo Application.
 * The main purpose of this application is to allow users to create, read, update, and delete tasks.
 * Each task can have a title, description, and a status indicating whether it is completed or not.
 */

// Define a Task class to represent each task in the application
class Task {
    constructor(title, description) {
        this.title = title; // Title of the task
        this.description = description; // Description of the task
        this.completed = false; // Task status, default is not completed
    }

    // Method to mark the task as complete
    complete() {
        this.completed = true; // Set completed status to true
    }
}

// TaskManager class to manage the list of tasks
class TaskManager {
    constructor() {
        this.tasks = []; // Initialize an empty array to hold tasks
    }

    // Method to add a new task to the list
    addTask(title, description) {
        const task = new Task(title, description); // Create a new task object
        this.tasks.push(task); // Add task to the tasks array
    }

    // Method to remove a task by title
    removeTask(title) {
        this.tasks = this.tasks.filter(task => task.title !== title); // Filter out the task with the given title
    }

    // Method to list all tasks
    listTasks() {
        return this.tasks; // Return the entire list of tasks
    }
}

// Example usage of TaskManager
const manager = new TaskManager(); // Create an instance of TaskManager
manager.addTask('Learn JavaScript', 'Study the basics of JavaScript'); // Adding a task
manager.addTask('Create a ToDo App', 'Build a ToDo application using JavaScript'); // Adding another task

console.log(manager.listTasks()); // Logging the list of tasks to the console