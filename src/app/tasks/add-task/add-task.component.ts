import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskModel } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title:string = "";
  summary:string = "";
  due_date:string = "";
  @Input({required:true}) userId!:string
  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<taskModel>();
  constructor(private taskService:TasksService){}
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.taskService.add_task({
      title:this.title,
      summary:this.summary,
      duedate:this.due_date
    },this.userId);
    this.close.emit(); 
  }

}

