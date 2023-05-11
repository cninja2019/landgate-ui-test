import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';

import * as PeopleActions from '../actions/people.actions';
import { PeopleService } from 'src/app/services/people.service';
import { Store } from '@ngrx/store';
import { AppState } from '@store/index';
import { of } from 'rxjs';


@Injectable()
export class PeopleEffects {
  constructor(
    private actions$: Actions,
    private peopleService: PeopleService,
    private store: Store<AppState>,
  ) { }

  loadPeoples$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.PeopleActionsTypes.LOAD_PEOPLES),
      // TODO Implement a Load People Action that gets the data from the service.
      concatMap(() => {
        return this.peopleService.getPeople().pipe(
          map(data => PeopleActions.loadedPeoplesSuccess({data})),
        )
      })
    )
  );

  updatePerson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PeopleActions.PeopleActionsTypes.UPDATE_PERSON),
      concatMap((action: any) => {
        return of(action).pipe(
          map(() => PeopleActions.updatePersonSuccess({ id: action.id, changes: action.changes }))
        )
      })
    ),
  );

}
