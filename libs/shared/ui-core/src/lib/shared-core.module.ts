import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedCardsModule } from '@prototype/shared/ui-cards';
import { SharedPipesModule } from '@prototype/shared/ui-pipes';

@NgModule({
  exports: [
    CommonModule,
    RouterModule,
    IonicModule,
    SharedCardsModule,
    SharedPipesModule,
  ],
})
export class SharedCoreModule {}
