import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'total-pagar', loadChildren: './total-pagar/total-pagar.module#TotalPagarPageModule' },
  { path: 'novo-pagamento', loadChildren: './novo-pagamento/novo-pagamento.module#NovoPagamentoPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
