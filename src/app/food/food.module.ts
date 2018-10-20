import { FoodComponent } from './food.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [FoodComponent],
  exports: [FoodComponent]
})
export class FoodModule {}
