import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule],
  exports: [RouterModule, IonicModule],
})
export class SharedDomainModule {}
