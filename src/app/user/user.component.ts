import { Component ,EventEmitter,Input,output,Output,signal} from '@angular/core';
import { DUMMY_USERS } from '../Dummy-user';
import { user } from './user.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../shared/card/card.component";
const random = Math.floor(Math.random() *DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) user!:user;
  @Input ({required:true}) selected!:boolean
  @Output() select = new EventEmitter<string>();
  // select =  output<string>()
  get imagePath(){
    return 'assets/users/' +this.user.avatar
  }
  onSelectuser(){
    this.select.emit(this.user.id)
  }

}
