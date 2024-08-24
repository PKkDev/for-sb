import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpChlComponent } from './components/cmp-chl/cmp-chl.component';
import { CmpParComponent } from './components/cmp-par/cmp-par.component';
import { CmpChlChlComponent } from './components/cmp-chl-chl/cmp-chl-chl.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpParComponent,
    CmpChlComponent,
    CmpChlChlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
