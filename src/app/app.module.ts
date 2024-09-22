import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpChlChlComponent, CmpChlComponent, CmpParComponent } from './components/comp-lf-task';
import { AdDirective1, AdDirective2 } from './components/dr';

@NgModule({
  declarations: [
    AppComponent,
    CmpParComponent,
    CmpChlComponent,
    CmpChlChlComponent,
    AdDirective1,
    AdDirective2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


