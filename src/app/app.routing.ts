import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ProdutosComponent } from './produtos/produtos.component';

const APP_ROUTES: Routes = [
    { path: '', component: LoginComponent },
    { path: 'produtos', component: ProdutosComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);