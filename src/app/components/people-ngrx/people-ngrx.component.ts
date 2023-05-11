import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import * as PeopleActions from './ngrx/actions/people.actions';
import * as PeopleSelectors from './ngrx/selectors/people.selectors';
import { AppState } from '@store/index';

@Component({
  selector: 'app-people-component',
  templateUrl: './people-ngrx.component.html',
  styleUrls: ['./people-ngrx.component.scss']
})
export class PeopleNgrxComponent implements OnInit {

  public list$: Observable<any>;

  constructor(
    private store: Store<AppState>
  ) {
    this.store.dispatch(PeopleActions.loadPeoples());
  }

  ngOnInit() {
    this.list$ = this.store.select(PeopleSelectors.people)
  }

  ngOnDestroy() {
  }

  updatePerson(changes, id) {
    this.store.dispatch(PeopleActions.updatePerson({ id, changes }));
  }

}
