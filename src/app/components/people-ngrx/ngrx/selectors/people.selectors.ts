import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPeople from '../reducers/people.reducer';
import { PersonModel } from '@models/person-model';

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = fromPeople.peopleEntityAdapter.getSelectors();

const peopleEntities = (state) =>  state.people.people.entities;

export const people = createSelector(peopleEntities, (state) => Object.values(state) as Array<PersonModel>);
