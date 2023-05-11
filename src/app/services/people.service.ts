import { Injectable } from '@angular/core';
import { delay } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { PersonModel } from '../models/person-model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  private mockPeopleList: PersonModel[] = [
    { id: '1', firstName: 'Josh', lastName: 'Yoo', age: 33, jobTitle: 'Software Engineer' },
    { id: '2', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
    { id: '3', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer' },
    { id: '4', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host' },
    { id: '5', firstName: 'Josh', lastName: 'Yoo', age: 33, jobTitle: 'Software Engineer' },
    { id: '6', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
    { id: '7', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer' },
    { id: '8', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host' },
    { id: '9', firstName: 'Josh', lastName: 'Yoo', age: 33, jobTitle: 'Software Engineer' },
    { id: '10', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
    { id: '11', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer' },
    { id: '12', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host' },
    { id: '13', firstName: 'Josh', lastName: 'Yoo', age: 33, jobTitle: 'Software Engineer' },
    { id: '14', firstName: 'John', lastName: 'Doe', age: 21, jobTitle: 'Wanna be Signer' },
    { id: '15', firstName: 'Jane', lastName: 'Doe', age: 22, jobTitle: 'Signer' },
    { id: '16', firstName: 'Bob', lastName: 'Barker', age: 80, jobTitle: 'TV Host' },
  ];


  getPeople(): Observable<PersonModel[]> {
    // TODO: Finish this implementation using the data from mockPeopleList
    // of(true).pipe(delay(100))
    return of(this.mockPeopleList);
  }

}
