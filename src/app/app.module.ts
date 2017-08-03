import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EventdataBindingComponent } from './eventdata-binding.component';
import { TwoWayBindingComponent } from './two-way-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EventdataBindingComponent,
    TwoWayBindingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
