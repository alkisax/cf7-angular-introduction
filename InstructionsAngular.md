node --experimental-strip-types example2.ts

```
npm install -global typescript
```

```
tsc example2.ts
npm install -global ts-node
```

### extension vscode coderunner

## tsconfig.json
```
{
  "compilerOptions": {
    "module": "CommonJS",
    "esModuleInterop": true,
    "target": "ES6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist",
    "sourceRoot": "src",
    "strict": true //added
  },
  "lib": ["ES2024"]
}
```
### και με το βελάκι |> επάνω δεξια στο vs το τρέχει

# εγκατάσταση Angular
```bash
npm install -g @angular/cli
ng version
```
# καινούργιο Angular
## αρχικα settings:
```bash
ng new angular-introduction
```
#### (το πήγα στον εξωτερικο σκληρο λογο χωρου)
- cd /e/coding/CF7TESTBEDANGULAR

### στο tsconfig.json
```
    "baseUrl": "./",
```

## το τρέχω με
```bash
ng serve
```

 εγκαθηστώ το angular language Service (addon)

 prettier code formater (addon)

 ### bootstrap
 ```bash
 npm install bootstrap
 ```
 ## angular.json
 (προσοχη στα /)
```
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
],
```` 

```bash
npm install --save-dev prettier
```

φτιάχνω αρχείο .pretierrc
```
{
  "overrides": [{
    "files": "*.html",
    "options": {
      "parser": "angular"
    }
  }]
}
```

# github pages
git init κάνει απο μόνο του το Angular
```bash
git remote add origin git@github.com:alkisax/cf7-angular-introduction.git
git push -u origin main

ng add angular-cli-ghpages

```

## package.json
οταν τρέξουμε το deploy ανεβάζει αυτό που κάνει build στην σελίδα που δίνουμε
```
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "deploy": "ng deploy --base-href=https://alkisax.github.io/cf7-angular-introduction/"
  },
```
```bash
npm run deploy
```
και αν πάω στην σελίδα το βλέπω

# αρχίζουμε την εφαρμογή
θέλω να περάσω απο το component (που είναι ο controller μου) στο html (που είναι το template μου). Αυτή είναι η λογική του angular

### στο components.ts
```typescript
export class AppComponent {
  name = 'Alkis'

  person = {
    givenName: "Alkis",
    surName: "kopakakis",
    age: 44,
    email: 'alkisax@gmail.com'
  }
}
```

### την μεταβλητή στο html
```
{{ name }}
{{person.givenName}}
{{person.surName}}
{{person.age}}
```
και
```bash
ng serve
```

### δημιουργία νέου component

```bash
ng generate component components/person-table
```
αφού φτιάξω την TS του Component καλώ με {{}} οτι χρειάζετε απο αυτό στο αντίστοιχο html του component

στο app.component.ts
```typescript
import { PersonTableComponent } from './components/person-table/person-table.component';

# για να χρησιμοποιήσω κομπονεντσ σε ξένα html το παιρνάω στο @component imports
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
```

στο κεντρικό μου app.component.html
- **δηλαδή εύτιαξα custom tags στο html με το ονομα του άλλου αρχειου**
```html
<div class="d-flex gap-5 text-nowrap">
  <app-person-table></app-person-table>
</div>
```

και με npm run deploy ανεβένει και στο github page
```
ng serve
```

# αν τωρα θέλω ο πατέρας να περάσει data στο component child

### οι μεταβλητές δεν έχουν const μέσα σε κλαση

- δημιουργώ έναν φακελο shared και μέσα βάζω τα interfaces Που θα χρησιμοποιηθουν απο πολλα 
```
ng generate interface shared/Interfaces/person
```

- και στο app ts
```javscript
import { Person } from './shared/Interfaces/person';
/[...]
  person0: Person = {
  }
    Person1: Person = {

    }
```
- οποτε πέτυχα κάτι σαν κλάση της java

## στο person table ts 
- για να καταλάβει ότι κάποιος θα σου στείλει κάτι kai θα το βάλεις στο personInput. Είτε θα ικανοποιεί το Person ή undefined

import { Component, input } from '@angular/core';
// [...]

  @Input() personInput: Person | undefined

## στο app html
- στείλε το person0 kai person1 στο person-table-compontent
- με []
```html
  <div class="d-flex gap-5 text-nowrap">
    <app-person-table [personInput]="person0" ></app-person-table>
    <app-person-table></app-person-table>
    <app-person-table [personInput]="person1" ></app-person-table>
  </div>
```

- τωρα πρέπει να γίνει μια μιρκή αλλαγή στο person-table.html
```js
<td class="ps-2">{{personInput?.givenName}}</td>
```
επειδή στο personInput πότε βάζουμε τιμή και πότε είναι undefined (πχ στο ```<app-person-table></app-person-table>)```) βάζουμε το ? για να μην αναζητά το .givenName αν null

## για να στείλω ένα arr
- app ts
```ts
users: Person[] = [{},{}]
```
- στο app html
```html
  <h4> {{ "@for" }} Directive example</h4>
  <div class="d-flex gap-5 text-nowrap gap-2">
    @for (user of users; track user) {
      <app-person-table [personInput]="user"></app-person-table>
    }
  </div>
  ```

  ng generate component components/event-bind-example

  ## ftiaxnoyμε ένα αππ μετρητή
  - εχω το html
  - import στο app.ts
  - παιρνω το σελεκτορ της νεας κλασης
```
  app-event-bind-example

```
  ```ts
  import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
  ```
  imports: [PersonTableComponent, EventBindExampleComponent],

  - και στο app html
<app-event-bind-example></app-event-bind-example>

- στη λογικη της εφαρμογής χρησιμοποιω το this
```ts
  times: number = 0;
  reset(){
    this.times = 0;
  }
```

- στο app html
```html
<button 
  (click) = "decrementTimes()"
  class="btn btn-primary btn-sm flex-grow-1"> - 
</button>
<!-- και -->
<button class="btn btn-primary btn-sm" (click)="reset()">Reset</button>
```

**πατέρας προς παιδι @input**  
**παιδί προς πατέρα @output**

# νεο component για routing
```bash
ng generate component components/welcome
ng generate component components/for-directive-example
ng generate component components/component-input-example
```
- φτιάχνω νέο app html (το πείρα απο git) (σβήνω τα προηγούμενα)

```html
<span role="button" routerLink="component-input-example">Component Input Example</span>
<span role="button" routerLink="for-directive-example">{{"@for"}} Directive Example</span>
<span role="button" routerLink="event-bind-example">Event Bind Example</span>
```

### τωρα θα χρησιμοποιήσουμε και τα αρχείο app.routes.ts που δημιουργήθηκε με την αρχική δημιουργία

- εδω θα φτιάξω endpoints
- αρχικα export const routes: Routes = [];

- app.routes.ts
```ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

export const routes: Routes = [
  { path: 'for-directive-example', component:ForDirectiveExampleComponent},
  { path: 'component-input-example', component: ComponentInputExampleComponent},
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path:'welcome', component: WelcomeComponent },
  { path: '', redirectTo:'/welcome', pathMatch:'full' }
];
```
- και τώρα πρέπει να του πω σε πιο σημείο της σελίδας θέλω να εμφανηστεί
- Παω στο app html
```html
<span class="flex-grow-1 p-2 text-nowrap">
  <router-outlet></router-outlet>
</span>
```

- για να καταλάβει το router outlet στο app ts
```ts
import { RouterOutlet } from '@angular/router';

imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet]
```

## λογική: 
- αν δει στο παθ welcome πάει να φέρει το περιεχόμενο του welcomeComponent
```ts
  { path:'welcome', component: WelcomeComponent }, 
```
- που να στα εμφανήσω; στο html θα αντικαταστησει το περιεχόμενο οπου βρεί router outlet (ποιού κομπονεντ? οποιυ δήλωσα στα ρουτς)
```html
<router-outlet></router-outlet>
```

- και για να λειτουργεί στο html του app πρέπει να το βάλω και στο app ts
```ts
  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet],
```

### χρειάζομαι και αυτό για το home
- pathMatch:'full' (?)
```ts
  { path: '', redirectTo:'/welcome', pathMatch:'full' }
````

## κάνω τα κουμπιά μου λειτουργικα
- στο app ts

```typescript
import { RouterOutlet, RouterLink } from '@angular/router';
  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet, RouterLink],
```
- στο Html προσθέτω routerLink
```html
<span role="button" routerLink="component-input-example">Component Input Example</span>
<span role="button" routerLink="for-directive-example">{{"@for"}} Directive Example</span>
<span role="button" routerLink="event-bind-example">Event Bind Example</span>
## 29/4/25
```

για να έχω μια φορμα που δείχνει καθός πληκρολογώ
- στο event bind html
```html
  <input type="text" class="form-control" (input)="onUserInput($event)">
    @if (!userInput) {
    <span class="text-danger">No user input</span>
  } @else {
    <span class="text-bg-info p-2">{{userInput}}</span>
  }
```
- κσι στο ts
```ts
  onUserInput(event: Event){
    this.userInput = (<HTMLInputElement>event.target).value; //(<HTMLInputElement>event.target) tells TypeScript: "Trust me, this event came from an input element"
  }
```
## φτιαχνουμε καλυτερα το μενού
## νεο κομπονεντ
```bash
ng generate component components/list-group-menu
```

```ts
export class ListGroupMenuComponent {
  menu = [
    { text: 'Component Input Example', linkName:'component-input-example'}, //αυτα είναι ονοματα του λινκ που θα χρησιμοποιηθούν. Δες στο Html παρακάτω
    { text: '@for Directive Example', linkName:'for-directive-example' }, 
    { text: 'Event-Bind-Example', linkName:'event-bind-example'},
  ]
}
```
- html
προσοχή στο {{entry.text}} 
το active ανάλογα με το λινκ που έχω πατήσει αν είναι active το εμφανίζει με διαφορετικό χρώμα

```html
<div class="list-group">
  @for (entry of menu; track entry){
    <a 
      class='list-group-item list-group-item-action text-truncate'
      [routerLink]="entry.linkName"
      [routerLinkActive] = "['active']"
    >{{entry.text}}</a>
  }
</div>
```
το html του component μου δεν εμφανίζετε ακόμα στην κεντρική σελίδα γιατί δεν το έχω περάσει

- στο app ts
```ts
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';

  imports: [PersonTableComponent, EventBindExampleComponent, RouterOutlet, RouterLink, ListGroupMenuComponent],
```
- html
τo 25% το menu το 75% η σελίδα
```html
      <app-list-group-menu class="text-nowrap w-25"></app-list-group-menu>
      <span class="flex-grow-1 p-2 text-nowrap w-75">
```

## θα κάνουμε ταξινόμιση στο @for directive example

### δυο νέα components
```bash
    ng generate component components/simple-datatable-example

    ng generate component components/simple-datatable
```

- app.routes.ts
```ts
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';

  { path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
```

- list group menu
```ts
    { text: 'Simple DataTable Example', linkName:'simple-datatable-example'}
```

- φτιάχνω ένα νεο ιντερφεις
```bash
ng generate interface shared/interfaces/eperson
```
```ts
export interface Eperson {
  givenName: string
  surNmae: string
  age: string
  email: string
  education: string
}

// kai diafora data typy
export const ManyPerson: EPerson[] = [
  {
    givenName: 'Sarah',
    surName: 'Howard',
    age: '41',
    email: 's.m.howard@yahoo.com',
    education: 'Some college, no degree',
  },
  {
    givenName: 'Alexander',
    surName: 'Turner',
    age: '43',
    email: 'alexanderfturner@gmail.com',
    education: 'Master’s degree',
  },
  // [...]
];

```

- simple datatable examble ts
```ts
import { Component } from '@angular/core';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { ManyPerson } from 'src/app/shared/Interfaces/person';

@Component({
  selector: 'app-simple-datatable-example',
  imports: [SimpleDatatableComponent],
  templateUrl: './simple-datatable-example.component.html',
  styleUrl: './simple-datatable-example.component.css'
})
export class SimpleDatatableExampleComponent {
  manyPerson = ManyPerson;
}
```

- simple datatable example html του περνάμε τα data
το κοκκινο είναι φυσιολογικο γιατί η data δεν έχει δημιουργηθεί ακόμα
```html
<h4>Simple DataTable Example</h4>
<app-simple-datatable [data] = 'manyPerson'></app-simple-datatable>
```

- simple datatable component ts
  @Input() data: EPerson[] | undefined;
```ts

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

  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
  }
}
```

- και στο html του simple dattable
```html
<table class="table table-bordered table-striped text-wrap">
  <thead>
    <tr class="align-middle text-center small">
      <th role="button" (click)="sortData('givenName')">First Name</th>
      <th role="button" (click)="sortData('surName')">Last Name</th>
      <th role="button" (click)="sortData('age')">Age</th>
      <th role="button" (click)="sortData('email')">Email</th>
      <th role="button" (click)="sortData('education')">Education</th>
    </tr>
  </thead>
  <tbody>
    @for (row of data; track row) {
      <tr class="align-middle" (dblclick)="onPersonClicked(row)">
        <td>{{row.givenName}}</td>
        <td>{{row.surName}}</td>
        <td>{{row.age}}</td>
        <td>{{row.email}}</td>
        <td>{{row.education}}</td>
      </tr>
    }
  </tbody>
</table>
```

## θέλω αν κάνω διπλό κλικ σε μια γραμμη και μετά να μου κάνει ένα consol log
#### html
```html
      <tr class="align-middle" (dblclick)="onPersonClicked(row)">
```
#### ts
```ts
  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
  }
```

## ascending η descending
- βιβλιοθήκη για ταξινόμηση
```bash
npm i lodash-es
```
το πρόβλημα είναι οτι είναι βιβλιοθήκη της js και οχι της ts και θέλει ρυθμήσεις
```bash
npm i --save-dev @types/lodash-es
```


#### στο simple datable components ts
```ts
import { sortBy } from 'lodash-es';

  sortOrder = {
    givenName: 'none',
    surName: 'none',
    age:'none',
    email:'none',
    education:'none'
  }
```

#### στο html 
```html
  <thead>
    <tr class="align-middle text-center small">
      <th role="button" (click)="sortData('givenName')">First Name</th>
      <th role="button" (click)="sortData('surName')">Last Name</th>
      <th role="button" (click)="sortData('age')">Age</th>
      <th role="button" (click)="sortData('email')">Email</th>
      <th role="button" (click)="sortData('education')">Education</th>
    </tr>
  </thead>
```

παω να φτιάξω την sortData στo ts
```ts
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
```

το ag grid είναι μια καλή βιβλιοθήκη για να έχουμε ετοιμο grid δεδομένων

- παω να προσθέσω σύμβολο που να λέει αν υπάρχει ταξινόμηση και τι
#### html
```html
  <thead>
    <tr class="align-middle text-center small">
      <th role="button" (click)="sortData('givenName')">
        First Name {{sortSign('givenName')}}
      </th>
      <th role="button" (click)="sortData('surName')">
        Last Name {{sortSign('surName')}}
      </th>
      <th role="button" (click)="sortData('age')">
        Age {{sortSign('age')}}
      </th>
      <th role="button" (click)="sortData('email')">
        Email {{sortSign('email')}}
      </th>
      <th role="button" (click)="sortData('education')">
        Education {{sortSign('education')}}
      </th>
    </tr>
  </thead>
```

#### παω στο ts να φτιάξω την sortSign
```ts
  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey]==='asc') return '\u2191'
    else if (this.sortOrder[sortKey]==='desc') return '\u2193'
    else return '';
  }
```

# μέχρι τώρα βλέπαμε πως ο πατέρας έστελνε ντατα στο παιδί. τώρα θα δούμε το αντίστροφο.
- ο πατέρας
```html
<h4>Simple DataTable Example</h4>
<app-simple-datatable [data] = 'manyPerson'></app-simple-datatable>
```

- Νεο compontent
```bash
ng generate component components/component-output-example
```

#### ts
```ts
import { EPerson, ManyPerson } from 'src/app/shared/interfaces/eperson';
import { SimpleDatatableComponent } from 'src/app/components/simple-datatable/simple-datatable.component';

  imports: [SimpleDatatableComponent],

    manyPerson = ManyPerson;
```

```html
<h4>Component Output Example</h4>
<app-simple-datatable [data]="manyPerson" ></app-simple-datatable>
```

- επειδή δεν τα βλέπω αυτα πρέπει να μπουν στο κεντρικο app
#### στο path
```ts
{ path: 'component-output-example', component: ComponentOutputExampleComponent },
```
#### στο list-group-menu.ts
```ts
    { text: 'component Output Example', linkName: 'component-output-example'},
```
## θέλω με διπλό κλικ να επιστρέψει στο component-output-exampl (στον πατέρα) και αυτό να μου τα στείλει με alert

#### simple datatable ts
στο παιδί δηλώνω μια μεταβλητή τύπου @output, αυτό είναι ένα event και λέω τι τύπου δεδομένα θα στείλω και αρχική τιμή τίποτα ()
```ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

  @Output() personClicked = new EventEmitter<EPerson>()
```
και αλλαζω την onpersonclicked
```ts
  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
    this.personClicked.emit(person);
  }
```

τωρα να δούμε πως ο πατέρας θα διαβάσει αυτό που του στέλνει το παιδι.
#### component outpout html
να στείλει τα ντατα σε μια διαδικασια που λέγετε showpersonclicked
### το input με [] το output σε ()
```html
<h4>Component Output Example</h4>
<app-simple-datatable [data]="manyPerson" (personClicked)="showPersonClicked($event)"></app-simple-datatable>
```
#### η showPersonClicked στο οutput example ts
```ts
  showPersonClicked(person: EPerson) {
    console.log("Component Output", person);
    alert(this.personTemplate(person));
  }

  personTemplate(person: EPerson) { 
    return `
    Person Details

    First Name: ${person.givenName}
    Last Name: ${person.surName}
    Age: ${person.age}
    Email: ${person.email}
    Education: ${person.education}
    `
  }
```
### το alert pop up δεν είναι καλός τρόπος. Είτε modal απο bootstrap, είτε meterial design

# Material design
το components έχει και το styling ενω το cdk οχι

το ng add κανει install και τις ρυθμήσεις στα σετινγκσ
```bash
ng add @angular/material
```
- παίρνω κώδικα απο https://material.angular.dev/cdk/dialog/overview

#### output example ts
```ts
import {
  Dialog,
  DialogRef,
  DIALOG_DATA,
  DialogModule
} from '@angular/cdk/dialog';

  dialog = inject(Dialog); // na do parapano

  showPersonClicked(person: EPerson) {
    console.log("Component Output", person);
    // alert(this.personTemplate(person));
    this.dialog.open(PersonDialogComponent, {
      data:person
    }) //άνοιξε ένα dialog και μέσα εμφάνησε ένα νεο υποcomponent με αυτά τα data
  }

```
- το PersonDialogComponent δεν υπαρχει ακόμακαι πρέπει να το δημιουργήσω. Εξω απο την κλάση στο ts:

```ts
@Component({
  imports:[],
  // σε αλλα components εςγραφ κατι σαν   templateUrl: './component-output-example.component.html',
  template: `
  <table class="table table-bordered w-50">
    <caption>Person Details</caption>
    <tr>
      <td class="fw-semibold text-end">First Name</td>
      <td class="ps-2">{{person.givenName}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Last Name</td>
      <td class="ps-2">{{person.surName}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Age</td>
      <td class="ps-2">{{person.age}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Email</td>
      <td class="ps-2">{{person.email}}</td>
    </tr>
    <tr>
      <td class="fw-semibold text-end">Education</td>
      <td class="ps-2">{{person.education}}</td>
    </tr>
  </table>
  <button class="btn btn-primary btn-sm" (click)="dialogRef.close()">Close</button>
  `,
  // αλλού   styleUrl: './component-output-example.component.css'
  styles: [
    `
      :host {
        display:block;
        background:#fff;
        border-radius: 8px;
        padding: 16px;
        max-width: 500px
      }
    `
  ]
})
// αυτό το dialogRef προστέθηκε για να μπορώ να έχω ένα κουμπί close
export class PersonDialogComponent {
  dialogRef = inject(DialogRef); 
  constructor(
    @Inject(DIALOG_DATA) public person: EPerson
  ){}
}
```

# φορμες
- template driven forms
- reactive forms (αυτό είναι το συνηθισμενο)

### φτιαχνω δυο components
```bash
ng generate component components/template-driven-form-example

ng generate component components/eperson-template-driven-form
```
#### app routes
```ts
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';

  { path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
```

#### list group menu ts
```ts
export class ListGroupMenuComponent {
  menu = [
    { text: 'Component Input Example', linkName:'component-input-example'}, //αυτα είναι ονοματα του λινκ που θα χρησιμοποιηθούν.
    { text: 'component Output Example', linkName: 'component-output-example'},
    { text: '@for Directive Example', linkName:'for-directive-example' },
    { text: 'Event-Bind-Example', linkName:'event-bind-example'},
    { text: 'Simple DataTable Example', linkName:'simple-datatable-example'},
    { text: 'Template Driven Form Example', linkName: 'template-driven-form-example'}
  ]
}
```

## θέλω μια φορμα και οταν πατάω υποβολή να μου τα εμφανίζει στα δεξια

#### template driven form html
```html
<h4>Template Driven Form Example</h4>
<div class="d-flex gap-4">
  <app-eperson-template-driven-form></app-eperson-template-driven-form>
  <div class="d-flex flex-column gap-4">
    <app-person-table></app-person-table>
    <app-simple-datatable [data]="persons"></app-simple-datatable>
  </div>
</div>
```

#### template driven form ts
κάνω τα ιμπορτ 
```ts
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
```

#### eperson template ts
- - ολα αυτά ειναι βιβλιοθήκες για τις φορμες
```ts
import { FormsModule, NgForm} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/Interfaces/eperson';

@Component({
  selector: 'app-eperson-template-driven-form',
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './eperson-template-driven-form.component.html',
  styleUrl: './eperson-template-driven-form.component.css'
})
```
#### eperson template driven form html
mat-form-field mat-label mat-select/mat-option mat-error
```html
  <form #eForm="ngForm" class="d-flex flex-column">
    <!-- normal form field -->
    <mat-form-field>
      <mat-label>First Name</mat-label>
      <input matInput ngModel required type="text" name="givenName" #givenName="ngModel"/>
      <!-- το error μπορεί να γίνει λόγο required -->
      <mat-error>First Name is required</mat-error>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Last Name</mat-label>
      <input matInput ngModel required type="text" name="surName" #surName="ngModel"/>
      <mat-error>Last Name is required</mat-error>
    <!-- number field με κουμπακια για αθξηση μειώση -->
    <mat-form-field>
      <mat-label>Age</mat-label>
      <input matInput ngModel required type="number" min="18" max="100" name="age"#age="ngModel" >
      <mat-error>Age is required</mat-error>
    </mat-form-field>
    <!-- email field -->
    <!-- αυτό μπορεί να γραφτεί και πολύ πιο απλα με type email -->
    </mat-form-field>
    <mat-form-field>
      <mat-label>Email</mat-label>
      <input 
        matInput 
        ngModel 
        required 
        type="text" 
        name="email"
        pattern="[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,}" 
        #email="ngModel">
      @if (email.errors && email.errors['required']){  
        <mat-error>Email is required</mat-error>
      }
      @if (email.errors && email.errors['pattern']){
        <mat-error>Invalid email</mat-error>
      }
    </mat-form-field>
    <!-- drop down menu -->
    <mat-form-field>
      <mat-label>Education</mat-label>
      <mat-select ngModel required name="education" #education="ngModel"> 
        <mat-option value="Some college, no degree">Some college, no degree</mat-option>
        <mat-option value="Master's degree">Master's degree</mat-option>
        <mat-option value="Bachelor's degree">Bachelor's degree</mat-option>
        <mat-option value="No formal education">No formal education</mat-option>
      </mat-select>
      <mat-error>Education is required field</mat-error>
    </mat-form-field>
<!-- [...] -->
  </form>
  <!-- το submit btn -->
  <button 
    mat-flat-button
    [disabled]="eForm.invalid"
    (click)="onSubmit(eForm.value)" 
    color="primary">
      Submit
  </button>
  <button (click)="onSetValue()">Set Value</button>
```
### πως να γινονται αντιλιπτα τα στοιχεία που περάστικαν στην φόρμα

- βάζω ονόματα στις φόρμες:  
#eForm="ngForm"  
#givenName="ngModel"  
#surName="ngModel"  
#age="ngModel"  
#email="ngModel"  
#education="ngModel"  

και μέσα στο πεδίο μου βάζω ```ngModel``` και καταλαβαίνει οτι είναι μέρος της φόρμσς 

- στο btn  για  να μην είναι ενεργό το κουμπί ωσπου να έιναι συμπληρωμένη η φορμα
```[disabled]="eForm.invalid"```

- η συάρτηση βρίσκετε στο component  
```(click)="onSubmit(eForm.value)" ```

#### eperson template drive form ts  
```ts
import { EPerson } from 'src/app/shared/Interfaces/eperson';

// παίρνει κάποια value που είναι τύπου EPerson (αν δεν ξέρω βάζω any, αλλα έτσι λειτουργώ σαν js και οχι ts)
  onSubmit(value: EPerson){
    console.log(value);
  }
```

- έτσι είχα τιμές στην φορμα και τα έστειλα στο κομπονεντ. τώρα θα δούμε πως θα στείλω απο το κομπονεντ στην φορμα

```ts
// viewchild
import { Component, ViewChild } from '@angular/core';

//class
// θα διαβάζω το eForm με το λεκτικό form και αυτό θα είναι τυπου NgForm
  @ViewChild('eForm', { static:false }) form:NgForm | undefined;

// έχω στην φορμα ένα κουμπι που μου συπληρώνει με ένα στανταρ ολα τα πεδία. εδώ το φτιάχνουμε
//this.form
// τωρα αν κανω κλικ δουλευει
  onSetValue(){
    this.form?.setValue({
      givenName:"John",
      surName:"Doe",
      age: 30,
      email:"john@aueb.gr",
      education:"Bachelor's degree"
    });
    // αν θέλω να βάλω τιμή μόνο σε ένα πεδίο
    this.form?.form.controls['givenName'].setValue("aaaaa")
  }
```
```ts
  onSubmit(value: EPerson){
    console.log(value);
    console.log(this.form);
    console.log(this.form?.form.get('givenName')?.value)
    console.log(this.form?.form.controls['surName'].value);
    //
  }
```

- οταν κάνω σαμπμιτ θελω να τα στείλω στο πιο πανω πατέρα και να τα περάσει στην html του στο simple data table (το οποίο το έχω ως υποκομπονεντ)


```ts
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

// emiter Που στέλνει EPerson και το αρχικό του είναι κενό
  @Output() person = new EventEmitter<EPerson>()
// ...
//     this.person.emit(value);
  onSubmit(value: EPerson){
    console.log(value);
    console.log(this.form);
    console.log(this.form?.form.get('givenName')?.value)
    console.log(this.form?.form.controls['surName'].value);
    this.person.emit(value);
  }
```

#### πατέρας -> template drivern form example.ts

```ts
export class TemplateDrivenFormExampleComponent {
  persons: EPerson[] = [];
  currentPerson: EPerson = {
    givenName: '',
    surName: '',
    age: '',
    email:'',
    education:''
  };

    // παρακατω
    onPerson(data: EPerson){
    this.persons.push(data)
    this.currentPerson = data;
    console.log("Father", this.persons);
  }
}
```

#### template driven form example.html
```html
<!-- oταν το person Που ειναι αουτπουτ γινει emit θα πας στον πατέρα και θα τρεξεις την onperson περνόντας το event, ουσιαστικα το submit -->
  <app-eperson-template-driven-form (person)="onPerson($event)"></app-eperson-template-driven-form>
```
2:18:25


























