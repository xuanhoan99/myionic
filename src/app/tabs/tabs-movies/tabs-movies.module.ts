import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsMoviesPageRoutingModule } from './tabs-movies-routing.module';

import { TabsMoviesPage } from './tabs-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsMoviesPageRoutingModule
  ],
  declarations: [TabsMoviesPage]
})
export class TabsMoviesPageModule {}
