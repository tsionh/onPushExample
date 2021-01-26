import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounter2 } from 'src/app/store/counter.reducer';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.less']
})
export class Comp4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  ngDoCheck() {
    console.log('do check comp 4');
  }

}
