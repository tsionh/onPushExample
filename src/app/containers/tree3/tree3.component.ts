import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree3',
  templateUrl: './tree3.component.html',
  styleUrls: ['./tree3.component.less']
})
export class Tree3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('do check tree 3');
  }
}
