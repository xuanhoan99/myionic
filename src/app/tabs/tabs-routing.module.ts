import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [  
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'music',
        loadChildren: () => import('./tabs-music/tabs-music.module').then( m => m.TabsMusicPageModule)
      },
      {
        path: 'tabs-movies',
        loadChildren: () => import('./tabs-movies/tabs-movies.module').then( m => m.TabsMoviesPageModule)
      },
      {
        path: 'tabs-games',
        loadChildren: () => import('./tabs-games/tabs-games.module').then( m => m.TabsGamesPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/music',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/music',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class TabsPageRoutingModule {}
