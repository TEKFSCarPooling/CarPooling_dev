import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import { FormControl } from '@angular/forms';

export class State {
  constructor(public name: string) { }
}

@Component({
  selector: 'app-page-features',
  templateUrl: './page-features.component.html',
  styleUrls: ['./page-features.component.css']
})
export class PageFeaturesComponent implements OnInit {

  ngOnInit() {
  }
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Bangalore',
    },
    {
      name: 'Electronic City',
    },
    {
      name: 'Arkansas',
    },
    {
      name: 'California',
    },
    {
      name: 'Florida',
    },
    {
      name: 'Texas',
    }
  ];

  constructor() {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
  }

  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }



}






