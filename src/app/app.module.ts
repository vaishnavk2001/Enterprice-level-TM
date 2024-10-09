import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { CardComponent } from './shared/card/card.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { TaskComponent } from './tasks/task/task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent,
    HeaderComponent,
    UserComponent,
    CardComponent,
    TasksComponent,
    AddTaskComponent,
    TaskComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
