import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';


const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'carrinho', component: CarrinhoComponent},
    { path: 'produtos', component: ProdutosComponent},
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent}


];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);