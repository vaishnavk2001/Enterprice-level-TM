import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task_array } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
  constructor(private tsk:TasksService){}
  @Input({required:true}) task_data!:Task_array;
  //mark task as completed 
  @Output() completed = new EventEmitter<string>();

  onCompleted(){
    this.tsk.remove_task(this.task_data.id)
    // this.completed.emit(this.task_data.id);
  }

  
}
