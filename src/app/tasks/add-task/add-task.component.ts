import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { taskModel } from '../task/task.model';

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

  @Output() close = new EventEmitter<void>();
  @Output() add = new EventEmitter<taskModel>();
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    this.add.emit({
      title:this.title,
      summary:this.summary,
      duedate:this.due_date
    })
  }

}

