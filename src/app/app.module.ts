import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(
      {
        apiKey: "AIzaSyDGpeaKYGFXdmvJUaEYfA05KM3AlSqiuIc",
        authDomain: "pedi-breja.firebaseapp.com",
        databaseURL: "https://pedi-breja.firebaseio.com",
        projectId: "pedi-breja",
        storageBucket: "pedi-breja.appspot.com",
        messagingSenderId: "200440626130"
      }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
