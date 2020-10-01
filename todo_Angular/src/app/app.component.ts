import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selected: boolean = false;
  todos: Todo[];
  todoTitle: string ;
  idForTodo: number;

  constructor() { }

  ngOnInit() {
    this.idForTodo = 4;
    this.todoTitle = '';
    this.todos = [
      {
        id: 1,
        title: 'Finish Angular Screencast',
        completed: false,
      },
      {
        id: 2,
        title: 'Take over world',
        completed: false,
      },
      {
        id: 3,
        title: 'One more thing',
        completed: false,
      },
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      alert('Insert Todo');
      return;
    }

    this.todos.push({
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
    });

    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  todosFiltered(): Todo[] {
    return this.todos;
  }
}
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
