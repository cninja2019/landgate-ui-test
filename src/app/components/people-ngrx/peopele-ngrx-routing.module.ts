import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleNgrxComponent } from './people-ngrx.component';

const routes: Routes = [
  { path: '', component: PeopleNgrxComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PeopleNgrxRoutingModule { }
