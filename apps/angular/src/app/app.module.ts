import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot({})],
  bootstrap: [AppComponent],
})
export class AppModule {}
