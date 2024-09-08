import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { AddTaskComponent } from "./add-task/add-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: String;
  @Input({ required: true }) name!: String;
  show_add_task:boolean = false;
  tasks = [
    {
      id: 't1',
      title: 'Design Homepage',
      summary: 'Create the layout and design for the main homepage.',
      dueDate: '2024-09-10',
      userId: 'u1',
    },
    {
      id: 't1',
      title: 'test2e',
      summary: ' main homepage.',
      dueDate: '2024-09-10',
      userId: 'u1',
    },
    {
      id: 't2',
      title: 'Set up Database',
      summary: 'Initialize the database and set up tables for user tasks.',
      dueDate: '2024-09-12',
      userId: 'u2',
    },
    {
      id: 't3',
      title: 'Implement Authentication',
      summary: 'Add login and registration functionality using JWT.',
      dueDate: '2024-09-15',
      userId: 'u3',
    },
    {
      id: 't4',
      title: 'Create Task API',
      summary: 'Build REST API for managing task CRUD operations.',
      dueDate: '2024-09-18',
      userId: 'u4',
    },
    {
      id: 't5',
      title: 'Add Task Filtering',
      summary: 'Enable task filtering based on priority and status.',
      dueDate: '2024-09-20',
      userId: 'u5',
    },
  ];
  get selectUderId() {
    return this.tasks.filter((user) => user.userId === this.userId);
  }

  completed_task(id:String){
    this.tasks = this.tasks.filter((newone)=>newone.id !== id)
  }

  Addtask(){
    this.show_add_task = true;
  }
  
  //close add task
  closeAddtask(){
    this.show_add_task = false;
  }

}
