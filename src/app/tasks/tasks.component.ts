import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from "./add-task/add-task.component";
import { taskModel } from './task/task.model';
import { CardComponent } from "../shared/card/card.component";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent, CardComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  show_add_task:boolean = false;
  constructor(private tsk:TasksService){}
  get selectUderId() {
    return this.tsk.get_task_user(this.userId)
  }

  completed_task(id:string){
   return this.tsk.remove_task(id)
  }

  Addtask(){
    this.show_add_task = true;
  }
  
  //close add task
  closeAddtask(){
    this.show_add_task = false;
  }
  onAddtask(taskData:taskModel){
    this.tsk.add_task(taskData,this.userId)
    this.show_add_task = false; 
  }
}
