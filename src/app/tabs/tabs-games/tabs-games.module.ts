import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsGamesPageRoutingModule } from './tabs-games-routing.module';

import { TabsGamesPage } from './tabs-games.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsGamesPageRoutingModule
  ],
  declarations: [TabsGamesPage]
})
export class TabsGamesPageModule {}
