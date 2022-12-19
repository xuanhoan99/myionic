import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsMoviesPage } from './tabs-movies.page';

const routes: Routes = [
  {
    path: '',
    component: TabsMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsMoviesPageRoutingModule {}
