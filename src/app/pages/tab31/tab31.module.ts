import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab31Page } from './tab31.page';

const routes: Routes = [
  {
    path: '',
    component: Tab31Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Tab31Page],

  entryComponents: [Tab31Page]

})
export class Tab31PageModule {}
