import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParallaxDirective } from './parallax.directive';
import { HomeComponent } from './pages/home/home.component';
import { ParallaxjsComponent } from './pages/parallaxjs/parallaxjs.component';

@NgModule({
  declarations: [
    AppComponent,
    ParallaxDirective,
    HomeComponent,
    ParallaxjsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
