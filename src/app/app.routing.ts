import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ProdutosComponent } from './produtos/produtos.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';

const APP_ROUTES: Routes = [
    { path: '', component: ProdutosComponent },
    { path: 'carrinho', component: CarrinhoComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);