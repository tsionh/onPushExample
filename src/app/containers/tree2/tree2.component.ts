import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tree2',
  templateUrl: './tree2.component.html',
  styleUrls: ['./tree2.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Tree2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('do check tree 2');
  }
}
