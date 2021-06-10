import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { EditComponent } from './edit/edit.component';
import { ListOrderComponent } from './list-order/list-order.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'view-product/:id',
    component: ViewComponent,
    canActivate:[AdminGuard]
  },
    
  {
    path: 'view-order/:id',
    component: ViewOrderComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'list-product',
    component: ListComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'list-order',
    component: ListOrderComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'add-product',
    component: EditComponent,
    canActivate:[AdminGuard]
  },
  {
    path: 'edit-product/:id',
    component: EditComponent,
    canActivate:[AdminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
