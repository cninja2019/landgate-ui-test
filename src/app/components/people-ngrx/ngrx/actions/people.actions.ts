import { createAction, props } from '@ngrx/store';
import { PersonModel } from '@models/person-model';

export enum PeopleActionsTypes {
  LOAD_PEOPLES = '[People] Load All',
  LOAD_PEOPLES_SUCCESS = '[People] Load All Success',

  UPDATE_PERSON = '[People] Update Person',
  UPDATE_PERSON_SUCCESS = '[People] Update Person Success'
}

// This is a request
export const loadPeoples = createAction(
  PeopleActionsTypes.LOAD_PEOPLES
);
// This is a load success
export const loadedPeoplesSuccess = createAction(
  PeopleActionsTypes.LOAD_PEOPLES_SUCCESS,
  props<{ data: PersonModel[] }>()
)



export const updatePerson = createAction(
  PeopleActionsTypes.UPDATE_PERSON,
  props<{ id: string, changes: PersonModel }>()
);
export const updatePersonSuccess = createAction(
  PeopleActionsTypes.UPDATE_PERSON_SUCCESS,
  props<{ id: string, changes: PersonModel }>()
);
