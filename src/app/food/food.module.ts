import { FoodRoutingModule } from './food-routing.module';
import { FoodComponent } from './food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, FoodRoutingModule],
  declarations: [FoodComponent]
})
export class FoodModule {}
