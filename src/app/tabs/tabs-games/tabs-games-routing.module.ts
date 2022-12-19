import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsGamesPage } from './tabs-games.page';

const routes: Routes = [
  {
    path: '',
    component: TabsGamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsGamesPageRoutingModule {}
