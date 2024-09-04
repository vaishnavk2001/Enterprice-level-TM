import { Component ,EventEmitter,Input,output,Output,signal} from '@angular/core';
import { DUMMY_USERS } from '../Dummy-user';

const random = Math.floor(Math.random() *DUMMY_USERS.length)
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required:true}) id!:string
  @Input({required:true}) avatar!:String;
  @Input({required:true}) name!:String;
  @Output() select = new EventEmitter<string>();
  // select =  output<string>()
  get imagePath(){
    return 'assets/users/' +this.avatar
  }
  onSelectuser(){
    this.select.emit(this.id)
  }
  


  

}
