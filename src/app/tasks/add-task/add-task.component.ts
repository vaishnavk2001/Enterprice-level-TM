import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  title:String = "";
  summary:String = "";
  due_date:String = "";

  @Output() close = new EventEmitter<void>();
  onCancel(){
    this.close.emit();
  }
  onSubmit(){
    
  }

}

