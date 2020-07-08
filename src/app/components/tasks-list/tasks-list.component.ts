import { Component, OnInit } from '@angular/core';
import { TasksService} from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks:any;
  currentTask = null;
  currentIndex = -1;
  description = '';

  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
    this.retrieveTasks();
  }

  retrieveTasks(){
    this.tasksService.getAll()
    .subscribe(
        data=>{
          
          console.log('Data fetched from https://tasksmanager-302f5.firebaseio.com/Task.json');
          console.log(data);
          let dataValues = []; //For values
          let dataKeys = []; //For keys

          for(let key in data) {   //Pay attention to the 'in'
            dataValues.push(data[key]);
            dataKeys.push(key);
          }

          console.log(dataValues);
          this.tasks = dataValues;

          },
        error => {
          console.log(error);
        });
  }

  refreshList(){
    this.retrieveTasks();
    this.currentTask = null;
    this.currentIndex = -1;
  }

  setActiveTask(task, index) {
    this.currentTask = task;
    this.currentIndex = index;
  }

  removeAllTasks() {
    this.tasksService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTasks();
        },
        error => {
          console.log(error);
        });
  }

  searchDescription() {
    this.tasksService.findByDescription(this.description)
      .subscribe(
        (  data: any) => {
          console.log(data);

          let dataValues = []; //For values
          let dataKeys = []; //For keys

          for(let key in data) {   //Pay attention to the 'in'
            dataValues.push(data[key]);
            dataKeys.push(key);
          }

          console.log(dataValues);
          this.tasks = dataValues;
        },
        error => {
          console.log(error);
        });
  }
}