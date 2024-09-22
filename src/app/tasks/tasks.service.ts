import { Injectable } from '@angular/core';
import { taskModel } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks = [
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
  constructor(){
    const tasks = localStorage.getItem('tasks');
    if(tasks){
      this.tasks = JSON.parse(tasks)
    }
  }

  get_task_user(userId:string){
    return this.tasks.filter((user) => user.userId === userId);
  }

  add_task(taskData:taskModel,userId:string){
    this.tasks.push({
      id: new Date().getDate().toLocaleString(),
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.duedate,
      userId: userId
    })
    this.saveTask();
  }

  remove_task(userId:string){
    this.tasks = this.tasks.filter((newone)=>newone.id !== userId)
    this.saveTask();
  }
  //save in local storage
  private saveTask(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

}
