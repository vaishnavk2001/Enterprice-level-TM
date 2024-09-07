import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './Dummy-user';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';
  selectedUser?:string;
  user = DUMMY_USERS;
  onSelectUser(id:string){
    this.selectedUser = id
  }
  get SelectUser2(){
    console.log("selectes user:",this.selectedUser);
    return this.user.find((u)=> u.id === this.selectedUser)!;
  }
}
