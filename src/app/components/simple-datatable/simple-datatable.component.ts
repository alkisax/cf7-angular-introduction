
import { Component, Input } from '@angular/core';
import { EPerson } from 'src/app/shared/Interfaces/eperson';
import { sortBy } from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Input() data: EPerson[] | undefined;

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age:'none',
    email:'none',
    education:'none'
  }

  sortData(sortKey: keyof EPerson): void {
    console.log(sortKey);
    if (this.sortOrder[sortKey]==='asc'){
      this.sortOrder[sortKey] = 'desc'
      this.data = sortBy(this.data, sortKey).reverse();
    } else {
      this.sortOrder[sortKey] = 'asc';
      this.data = sortBy(this.data, sortKey);
    }
    
    for (let key in this.sortOrder){
      if (key!==sortKey) {
        this.sortOrder[key as keyof EPerson] = 'none'
      }
    }

    console.log(this.sortOrder);
  }

  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
  }
}
