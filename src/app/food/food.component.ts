import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss']
})
export class FoodComponent implements OnInit, OnDestroy {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('%c Food Component Created', 'color: blue; background:white');
  }

  onClickBurger() {
    this.router.navigate(['detail'], { relativeTo: this.activatedRoute });
  }

  onClickFood(id) {
    this.router.navigate(['detail', id], { relativeTo: this.activatedRoute });
  }

  ngOnDestroy() {
    console.log(
      '%c Food Component removed',
      'color: darkred; background:white'
    );
  }
}
