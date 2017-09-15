import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {UserComponent} from './users.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about',      component: AboutComponent }
];
@NgModule({
  declarations: [
    AppComponent, UserComponent,HomeComponent,AboutComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
