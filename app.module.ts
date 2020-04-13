import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Router, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './auth/signin/signin.component';
import { BqtlistComponent } from './bqtlist/bqtlist.component';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BqtService } from './services/bqt.service';
import { BqtViewComponent } from './bqt-view/bqt-view.component';

const appRoutes: Routes = [
  { path: 'bqts', component : AppComponent },
  { path: 'auth/signin', component: SigninComponent },
/*   { path: '', redirectTo: 'bqts', pathMatch: 'full' },
  { path: '**', redirectTo: 'bqts' } */
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SigninComponent,
    BqtlistComponent,
    BqtViewComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ AuthService , BqtService],
  bootstrap: [AppComponent]
})
export class AppModule { }
