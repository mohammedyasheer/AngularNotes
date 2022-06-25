import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServersComponent } from './StringInterpolation/servers.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { AllBindingExampleComponent } from './all-binding-example/all-binding-example.component';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    AllBindingExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
