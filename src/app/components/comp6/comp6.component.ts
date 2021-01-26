import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-comp6',
  templateUrl: './comp6.component.html',
  styleUrls: ['./comp6.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Comp6Component implements OnInit {

  @Input() justAnotherCounter: number;
  
  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('do check comp 6')
  }

}
