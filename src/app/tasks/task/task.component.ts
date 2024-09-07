import { Component, Input } from '@angular/core';

interface Task_array {
  id:String;
  title:String;
  summary:String;
  dueDate:String;
  userId:String;
}
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})


export class TaskComponent {
  @Input({required:true}) task_data!:Task_array;
  
}
