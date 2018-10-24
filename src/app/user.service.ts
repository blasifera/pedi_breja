import { Injectable } from '@angular/core';
import { Observable, of as observableOf } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map, filter, switchMap } from 'rxjs/operators';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
import { Usuario } from './rules/Usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  uid = this.afAuth.authState.pipe(
    map(authState => {
      if (!authState) {
        return null;
      } else {
        return authState.uid;
      }
    }),
  );
  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if(!uid){
        return observableOf(false);
      }else{
        return this.db.object<boolean>('/admin/' + uid).valueChanges();
      }
    })
  )
  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase, private router: Router) { }


  verificalogado(){
    var usuariologado = this.afAuth.auth.currentUser;
    if (usuariologado){
      return true;
    }else{
      return false;
    }
  }

  login(usuario: Usuario) {
    this.afAuth.auth.signInWithEmailAndPassword(usuario.email, usuario.password).then(res => {
      this.router.navigate(['/produtos'])
    }).catch(err => {
      alert('Email ou senha incorretos');
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

}
