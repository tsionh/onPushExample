import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.less']
})
export class Comp3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    // console.log('do check comp 3')
  }
}
