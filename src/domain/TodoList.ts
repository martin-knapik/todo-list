import { makeAutoObservable } from 'mobx';

export class TodoList {
  constructor() {
    makeAutoObservable(this)
  }

  todoItems = [{title: 'hello', description: 'world'}]
}
