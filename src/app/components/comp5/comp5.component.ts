import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { getCounter2 } from 'src/app/store/counter.reducer';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.less']
})
export class Comp5Component implements OnInit {

  counter2$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.counter2$ = this.store.pipe(select(getCounter2));
  }


  ngDoCheck() {
    console.log('do check comp 5')
  }

}
