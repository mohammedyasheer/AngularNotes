import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServersComponent } from './StringInterpolation/servers.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    PropertyBindingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
