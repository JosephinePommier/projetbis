import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { BqtlistComponent } from './bqtlist/bqtlist.component';



const appRoutes: Routes = [
  { path: 'auth/signin', component: SigninComponent },
  { path: 'bqts', component: BqtlistComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
