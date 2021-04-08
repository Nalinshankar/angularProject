import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ViewTransactionComponent } from './view-transaction/view-transaction.component';
import { MatRadioModule } from '@angular/material/radio';
 
import { FormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatCardModule, MatCardHeader, MatFormField, MatFormFieldModule, MatInputModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    HomeComponent,
    HomePageComponent,
    NewTransactionComponent,
    ViewTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // MatFormField,
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    // MatCardModule,
    BrowserModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatCardHeader,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'admin',
        component: AdminComponent
      },
      {
        path:'homePage',
        component: HomePageComponent
      },
      {
        path:'newTransaction',
        component: NewTransactionComponent
      },
      {
        path:'viewTransactions',
        component: ViewTransactionComponent
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    NewTransactionComponent
  ]
})
export class AppModule { }
