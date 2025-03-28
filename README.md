# Todo Counter App - Redux Practice Exercise

## Description and Requirements

### App Description

The Todo Counter App is a simple productivity tool that combines two features:

- Task Management: Create, complete, and delete tasks with a persistent task list

- Counter Tracker: A simple counter that can be incremented, decremented, and reset

These features will share a Redux store but operate independently, showcasing how multiple features can coexist within a single Redux application. The app will maintain state between sessions using localStorage.

### User Story

As a user trying to track my daily tasks,
I want to create a list of todos and track a numeric counter,
So that I can manage my tasks while practicing using a simple counter.

Typical User Flow:

- User opens the app and sees their previously created todos (if any) and the last counter value

- User can add new todos by typing text and clicking "Add"

- User can mark todos as complete by checking a checkbox

- User can delete todos by clicking a delete button

- User can see how many active todos remain

- User can filter todos by status (all/active/completed)

- User can increment/decrement a counter with dedicated buttons

- User can reset the counter to zero

- All changes persist between sessions

## Built With

- Vite
- TypeScript
- Redux
