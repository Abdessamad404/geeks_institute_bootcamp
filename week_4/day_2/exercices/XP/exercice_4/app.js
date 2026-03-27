import TodoList from "./todo.js";

const myTodoList = new TodoList();

//? Add a few tasks, mark some as complete, and list all tasks.
myTodoList.addTodo("Buy milk");
myTodoList.addTodo("Buy eggs");
myTodoList.addTodo("Buy bread");
myTodoList.markComplete(1);

console.log(myTodoList.listTodos());
