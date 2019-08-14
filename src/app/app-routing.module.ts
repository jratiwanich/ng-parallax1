import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ParallaxjsComponent} from './pages/parallaxjs/parallaxjs.component';

const routes: Routes = [
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', component: HomeComponent },
  { path: 'parallaxjs', component: ParallaxjsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
