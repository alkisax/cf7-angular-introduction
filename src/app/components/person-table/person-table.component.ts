import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/Interfaces/person'

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  // step 3
  @Input() personInput: Person | undefined

  name = "Thanasis"

  person = {
    givenName:"Thanasis",
    surName: "malakas",
    age: 20,
    email:'thanasis@aueb.gr'
  }
}