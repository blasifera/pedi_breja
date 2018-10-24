import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '../../node_modules/@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pedi';
  showNavBar: boolean;

  constructor(private router: Router, private user: UserService) {
    router.events.subscribe((navigationEnd: any) => {
      if (navigationEnd.url != null) {
        this.showNavBar = navigationEnd.url != "/";
      }
    })
  }



}
