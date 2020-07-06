import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TaskManagementApp';

  currentUser: any;

  constructor(private router: Router, private loginService: LoginService) {
    if(this.loginService.currentUser != null) {
      this.loginService.currentUser.subscribe(x => {
        this.currentUser = x;
        console.log('changed currentUser');
      });
    }
  }
  
  ngOnInit() {
  }


}
