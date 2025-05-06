import { Component, Input } from '@angular/core';
import { Person } from 'src/app/shared/Interfaces/person'
import { EPerson } from 'src/app/shared/Interfaces/eperson'

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  // step 3
  @Input() personInput: Person | EPerson |undefined

  name = "Thanasis"

  person = {
    givenName:"Thanasis",
    surName: "malakas",
    age: 20,
    email:'thanasis@aueb.gr'
  }
  addressOReducation: string = '';

  isPerson():boolean {
    if (this.personInput && 'address' in this.personInput) {
      this.addressOReducation = this.personInput.address
      return 'address' in this.personInput;
    }
    return false;
  }

  isEPerson():boolean {
    if (this.personInput && 'education'in this.personInput){ 
      this.addressOReducation = this.personInput.education
      return 'education'in this.personInput;
    }  
    return false
  }
}