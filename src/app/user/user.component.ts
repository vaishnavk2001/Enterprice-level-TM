import { Component ,computed,Input,signal} from '@angular/core';
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
//  selectUser = signal(DUMMY_USERS[random]);
 //using getters for avoid directly add complex logic in template directly
//  get imagePath(){
//   return "assets/users/" + this.selectUser.avatar
//  }
//gatters using while using signals
  // imagePath = computed(()=>'assets/users/'+this.selectUser().avatar)


  @Input({required:true}) avatar!:String;
  @Input({required:true}) name!:String;

  onSelectuser(){
  // const random = Math.floor(Math.random() *DUMMY_USERS.length)
  // this.selectUser.set(DUMMY_USERS[random]);
 }
 get imagePath(){
  return 'assets/users/' +this.avatar
 }

}
