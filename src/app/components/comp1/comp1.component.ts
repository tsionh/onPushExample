import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, incrementCounter2 } from 'src/app/store/counter.actions';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.less']
})
export class Comp1Component implements OnInit {

  @Input() counterFromStore: number

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  inc() {
    this.store.dispatch(increment());
  }

  inc2() {
    this.store.dispatch(incrementCounter2());
  }

  ngDoCheck() {
    // console.log('do check comp 1')
  }

}
