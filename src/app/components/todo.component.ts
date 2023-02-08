import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, Todo } from '../model/model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{  

  todoForm!: FormGroup
  taskArray!: FormArray

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
      this.taskArray = this.fb.array([])
      this.todoForm = this.createForm()
  }

  submitForm() {
    const todo: Todo = this.todoForm.value as Todo
    console.info('>>> todo: ', todo)
    this.todoForm = this.createForm() // or // this.todoForm.reset
  }

  clearForm() {
    this.todoForm = this.createForm() // or // this.todoForm.reset
  }

  addTask() {
    const task = this.fb.group({
      task: this.fb.control(''),
      priority: this.fb.control('')
    })
    this.taskArray.push(task)
  }

  deleteTask(i: number) {
    this.taskArray.removeAt(i)
  }

  // helper functions
  private createForm() {
    return this.fb.group({
      name: this.fb.control('', Validators.required),
      email: this.fb.control('', [ Validators.required, Validators.email ] ),
      tasks: this.taskArray
    })
  }


}
