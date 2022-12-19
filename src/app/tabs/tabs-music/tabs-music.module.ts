import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsMusicPageRoutingModule } from './tabs-music-routing.module';

import { TabsMusicPage } from './tabs-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsMusicPageRoutingModule
  ],
  declarations: [TabsMusicPage]
})
export class TabsMusicPageModule {}
