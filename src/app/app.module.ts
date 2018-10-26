import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { ProdutosComponent } from './produtos/produtos.component';
import { LoginComponent } from './login/login.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { routing } from './app.routing';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { FormsModule } from '@angular/forms';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { TesteComponent } from './teste/teste.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    LoginComponent,
    CarrinhoComponent,
    CadastroUsuarioComponent,
    TesteComponent
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
    routing,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
