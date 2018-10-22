import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Usuario } from '../rules/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public user: UserService) { }

  usuario : Usuario;

  ngOnInit() {
    this.usuario = new Usuario();
  }

  logOn(){
    this.user.login(this.usuario);
  }

}
