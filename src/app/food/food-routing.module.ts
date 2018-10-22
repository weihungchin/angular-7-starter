import { FoodDetailComponent } from './food-detail/food-detail.component';
import { FoodComponent } from './food.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: FoodComponent },
  { path: 'detail/:id', component: FoodDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: []
})
export class FoodRoutingModule {}
