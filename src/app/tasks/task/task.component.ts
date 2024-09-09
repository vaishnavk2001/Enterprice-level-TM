import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task_array } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
  @Input({required:true}) task_data!:Task_array;
  //mark task as completed 
  @Output() completed = new EventEmitter<String>();

  onCompleted(){
    this.completed.emit(this.task_data.id);
  }

  
}
