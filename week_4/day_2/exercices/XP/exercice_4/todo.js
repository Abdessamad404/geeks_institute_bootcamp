class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(description) {
    this.todos.push({
      description,
      completed: false,
    });
  }

  markComplete(index) {
    this.todos[index].completed = true;
  }

  // list tasks
  listTodos() {
    return this.todos;
  }
}
export default TodoList;
