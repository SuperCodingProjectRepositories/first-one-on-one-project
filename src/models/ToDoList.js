import Todo from "./Todo";

class ToDoList{
  constructor(){
    this.todos = [];
  }

  addTodo(title,description,deadline,category){
    const count = this.todos.length;
    const newTodo = new Todo(count + 1,title,description,deadline,category);
    this.todos = [...this.todos,newTodo];
  }

  removeTodo(id){
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}

export default ToDoList;