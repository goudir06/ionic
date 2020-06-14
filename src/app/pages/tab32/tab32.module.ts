import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab32Page } from './tab32.page';

const routes: Routes = [
  {
    path: '',
    component: Tab32Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab32Page],

  entryComponents: [Tab32Page]

})
export class Tab32PageModule {}
