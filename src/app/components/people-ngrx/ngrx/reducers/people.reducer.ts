import { createReducer, on } from '@ngrx/store';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

import * as PeopleActions from '../actions/people.actions';
import { PersonModel } from 'src/app/models/person-model';

export const peopleFeatureKey = 'people';

// TODO: Need to add People to the store and initialize it.
interface PeopleState extends EntityState<PersonModel> { }
export interface State {
  people: PeopleState
}

export const peopleEntityAdapter: EntityAdapter<PersonModel> = createEntityAdapter<PersonModel>({});

export const initialState: State = {
  people: peopleEntityAdapter.getInitialState({})
};


const setData = (state: State, { data }) => {
  return {
    ...state,
    people: peopleEntityAdapter.setAll(data, state.people)
  };
};
const update = (state: State, { id, changes }) => {
  return {
    ...state,
    people: peopleEntityAdapter.updateOne({ id, changes }, state.people),
  };
};


export const reducer = createReducer(
  initialState,

  on(PeopleActions.loadedPeoplesSuccess, setData),
  on(PeopleActions.updatePersonSuccess, update),
);

