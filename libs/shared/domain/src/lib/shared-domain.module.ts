import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  exports: [CommonModule, RouterModule, IonicModule],
})
export class SharedDomainModule {}
