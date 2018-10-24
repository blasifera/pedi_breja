import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../rules/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public user: UserService, private router: Router) { }

  usuario : Usuario;

  ngOnInit() {
    this.usuario = new Usuario();
  }

  logOn(){
    this.user.login(this.usuario);
  }

}
