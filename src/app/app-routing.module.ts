import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarRequisitoComponent } from './components/registrar-requisito/registrar-requisito.component';
import { RequisitosListComponent } from './components/requisitos-list/requisitos-list.component';

const routes: Routes = [
  {
    path: '',
    component: RequisitosListComponent
  },
  {
    path: 'registrar',
    component: RegistrarRequisitoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
