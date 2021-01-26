import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tree1Component } from './containers/tree1/tree1.component';
import { Tree2Component } from './containers/tree2/tree2.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { StoreModule } from '@ngrx/store';
import * as fromCounter from './store/counter.reducer';
import { Tree3Component } from './containers/tree3/tree3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { Comp5Component } from './components/comp5/comp5.component';
import { Comp6Component } from './components/comp6/comp6.component';
import { ReactiveComponentModule } from '@ngrx/component';

@NgModule({
  declarations: [
    AppComponent,
    Tree1Component,
    Tree2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Tree3Component,
    Comp4Component,
    Comp5Component,
    Comp6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counterReducer: fromCounter.counterReducer}, {}),
    ReactiveComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
