import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos!: Todo[];
  public inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Clean the kitchen',
        completed: false,
      },
      {
        content: 'Go to gym',
        completed: false,
      },
    ];
  }
  toggleTodo(id: number) {
    this.todos.map((value, index) => {
      if (index == id) value.completed = !value.completed;
      return value;
    });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo, index) => {
      return index !== id;
    });
  }

  addTodo() {
    this.inputTodo !== '' &&
      this.todos.push({ content: this.inputTodo, completed: false });
    this.inputTodo = '';
  }
}
