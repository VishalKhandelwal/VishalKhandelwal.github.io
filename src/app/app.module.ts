import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
