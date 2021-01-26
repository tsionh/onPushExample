import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter } from 'src/app/store/counter.reducer';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-tree1',
  templateUrl: './tree1.component.html',
  styleUrls: ['./tree1.component.less']
})
export class Tree1Component implements OnInit, OnDestroy {

  counter$: Observable<number>

  constructor(private store: Store) { }
  
  ngOnInit(): void {
    this.counter$ = this.store.pipe(select(getCounter))
  }
  
  ngOnDestroy(): void {

  }

  ngDoCheck() {
    console.log('do check tree 1');
  }


}
