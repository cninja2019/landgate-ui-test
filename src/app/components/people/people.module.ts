import { NgModule } from '@angular/core';
import { PeopleComponent } from './people.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PeopleComponent],
  imports: [
    CommonModule,
  ],
  exports: [PeopleComponent]
})
export class PeopleModule { }
