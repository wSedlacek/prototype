import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';
import { SharedCoreModule } from '@prototype/shared/ui-core';

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, TabsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    SharedCoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
