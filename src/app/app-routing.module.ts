import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component'


const routes: Routes = [
  { path:'heroes', component: HeroesComponent
  },
  {
    path:'list', component: ListComponent
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full'
  },
  {
    path: 'details', component: DetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
