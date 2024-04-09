import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
    auth=inject(AuthService);

    name=JSON.parse(sessionStorage.getItem('loggedUser')!).name;
    userProfileImage=JSON.parse(sessionStorage.getItem('loggedUser')!).picture;
    email=JSON.parse(sessionStorage.getItem('loggedUser')!).email;
    SignOut(){
      sessionStorage.removeItem('loggedUser');
      this.auth.SignOut();
    }
}
