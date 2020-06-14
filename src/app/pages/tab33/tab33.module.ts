import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab33Page } from './tab33.page';

const routes: Routes = [
  {
    path: '',
    component: Tab33Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab33Page],

  entryComponents: [Tab33Page]

})
export class Tab33PageModule {}
