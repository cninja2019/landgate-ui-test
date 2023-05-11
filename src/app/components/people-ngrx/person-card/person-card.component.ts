import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonModel } from 'src/app/models/person-model';
import { FormsModule, ReactiveFormsModule, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss']
})
export class PersonCardComponent implements OnInit {

  @Input() person: PersonModel;
  @Output() update = new EventEmitter<PersonModel>();

  personForm: UntypedFormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  save() {
    this.update.emit(this.personForm.value);
  }

  cancel() {
    this.initForm();
  }

  initForm() {
    const personInfo = this.person;
    this.personForm = new UntypedFormGroup({

      firstName: new UntypedFormControl(personInfo.firstName, [Validators.required]),
      lastName: new UntypedFormControl(personInfo.lastName, [Validators.required]),
      age: new UntypedFormControl(personInfo.age, [Validators.required, Validators.min(18), Validators.max(100)]),
      jobTitle: new UntypedFormControl(personInfo.jobTitle, [Validators.required]),
    });

  }

}
