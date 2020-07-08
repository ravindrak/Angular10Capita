import { Component, OnInit } from '@angular/core';
import {TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  task = {
    id: '',
    description: '',
    priority: '',
    status: 'Not Started'
  }
  submitted = false;

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  saveTask(){
    const data = {
      description: this.task.description,
      priority: this.task.priority,
      status: this.task.status
    };

    this.tasksService.creat(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
  }

  newTask(){
    this.submitted = false;
    this.task = {
      id: '',
      description: '',
      priority: '',
      status: 'Not Started'
    }
  }



}
