import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'cities' },
  { path: 'food', loadChildren: './food/food.module#FoodModule' },
  { path: 'cities', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
