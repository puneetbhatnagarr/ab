import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeblogsComponent } from './homeblogs/homeblogs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UpdateComponent } from './update/update.component';
import { ViewcomponentComponent } from './viewcomponent/viewcomponent.component';

import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeblogsComponent,
    PagenotfoundComponent,
    UpdateComponent,
    ViewcomponentComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
