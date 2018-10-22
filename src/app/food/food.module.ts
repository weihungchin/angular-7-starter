import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodDetailComponent } from './food-detail/food-detail.component';

@NgModule({
  imports: [CommonModule, FoodRoutingModule],
  declarations: [FoodComponent, FoodDetailComponent]
})
export class FoodModule {}
