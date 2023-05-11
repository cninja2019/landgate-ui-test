import { NgModule } from '@angular/core';
import { PeopleNgrxComponent } from './people-ngrx.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromPeople from './ngrx/reducers/people.reducer';
import { PeopleEffects } from './ngrx/effects/people.effects';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PeopleNgrxRoutingModule } from './peopele-ngrx-routing.module';

@NgModule({
  declarations: [PeopleNgrxComponent],
  exports: [PeopleNgrxComponent],
  imports: [
    CommonModule,
    PeopleNgrxRoutingModule,
    PersonCardComponent,
    StoreModule.forFeature(fromPeople.peopleFeatureKey, fromPeople.reducer),
    EffectsModule.forFeature([PeopleEffects])
  ]
})
export class PeopleNgrxModule {
}
