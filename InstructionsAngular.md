<!-- TOC start (generated with https://github.com/derlin/bitdowntoc) -->

- [TypeScript](#typescript)
      + [extension vscode coderunner](#extension-vscode-coderunner)
   * [tsconfig.json](#tsconfigjson)
      + [και με το βελάκι |> επάνω δεξια στο vs το τρέχει](#-vs-)
- [εγκατάσταση Angular](#-angular)
- [καινούργιο Angular](#-angular-1)
   * [αρχικα settings:](#-settings)
         - [(το πήγα στον εξωτερικο σκληρο λογο χωρου)](#-)
      + [στο tsconfig.json](#-tsconfigjson)
   * [το τρέχω με](#--1)
- [github pages](#github-pages)
   * [package.json](#packagejson)
- [αρχίζουμε την εφαρμογή](#--2)
      + [στο components.ts](#-componentsts)
      + [την μεταβλητή στο html](#-html)
      + [δημιουργία νέου component](#-component)
- [αν τωρα θέλω ο πατέρας να περάσει data στο component child](#-data-component-child)
      + [οι μεταβλητές δεν έχουν const μέσα σε κλαση](#-const-)
         - [στο person table ts ](#-person-table-ts)
         - [στο app html](#-app-html)
   * [για να στείλω ένα arr](#-arr)
         - [στο ts η λογική είναι](#-ts-)
- [-> <font color="red">ως εδω επανάληψη 15/5</font>](#-155)
         - [στο app html](#-app-html-1)
- [νεο component για routing](#-component-routing)
      + [τωρα θα χρησιμοποιήσουμε και τα αρχείο app.routes.ts που δημιουργήθηκε με την αρχική δημιουργία](#-approutests-)
   * [λογική: ](#)
      + [χρειάζομαι και αυτό για το home](#-home)
   * [κάνω τα κουμπιά μου λειτουργικα](#--3)
   * [φτιαχνουμε καλυτερα το μενού](#--4)
   * [νεο κομπονεντ](#--5)
   * [θα κάνουμε ταξινόμιση στο @for directive example](#-for-directive-example)
      + [δυο νέα components](#-components)
   * [θέλω αν κάνω διπλό κλικ σε μια γραμμη και μετά να μου κάνει ένα consol log](#-consol-log)
         - [html](#html)
         - [ts](#ts)
   * [ascending η descending](#ascending-descending)
         - [στο simple datable components ts](#-simple-datable-components-ts)
         - [στο html ](#-html-1)
         - [html](#html-1)
         - [παω στο ts να φτιάξω την sortSign](#-ts-sortsign)
- [μέχρι τώρα βλέπαμε πως ο πατέρας έστελνε ντατα στο παιδί. τώρα θα δούμε το αντίστροφο.](#--6)
         - [ts](#ts-1)
         - [στο path](#-path)
         - [στο list-group-menu.ts](#-list-group-menuts)
   * [θέλω με διπλό κλικ να επιστρέψει στο component-output-exampl (στον πατέρα) και αυτό να μου τα στείλει με alert](#-component-output-exampl-alert)
         - [simple datatable ts](#simple-datatable-ts)
         - [component outpout html](#component-outpout-html)
      + [το input με [] το output σε ()](#-input-output-)
         - [η showPersonClicked στο οutput example ts](#-showpersonclicked-utput-example-ts)
      + [το alert pop up δεν είναι καλός τρόπος. Είτε modal απο bootstrap, είτε meterial design](#-alert-pop-up-modal-bootstrap-meterial-design)
- [Material design](#material-design)
         - [output example ts](#output-example-ts)
- [φορμες](#-1)
      + [φτιαχνω δυο components](#-components-1)
         - [app routes](#app-routes)
         - [list group menu ts](#list-group-menu-ts)
   * [θέλω μια φορμα και οταν πατάω υποβολή να μου τα εμφανίζει στα δεξια](#--7)
         - [template driven form html](#template-driven-form-html)
         - [template driven form ts](#template-driven-form-ts)
         - [eperson template ts](#eperson-template-ts)
         - [eperson template driven form html](#eperson-template-driven-form-html)
      + [πως να γινονται αντιλιπτα τα στοιχεία που περάστικαν στην φόρμα](#--8)
         - [eperson template drive form ts  ](#eperson-template-drive-form-ts)
         - [πατέρας -> template drivern form example.ts](#-template-drivern-form-examplets)
         - [template driven form example.html](#template-driven-form-examplehtml)
         - [person table component html](#person-table-component-html)
         - [person table component ts](#person-table-component-ts)
         - [template driven form example ts](#template-driven-form-example-ts)
- [example to udate](#example-to-udate)
- [δεύτερος τρόπος για φόρμες. Reactive φορμες](#-reactive-)
         - [app.routes.ts](#approutests)
         - [list group menu ts](#list-group-menu-ts-1)
         - [reactive form example ts](#reactive-form-example-ts)
         - [html](#html-2)
         - [eprson reactive form ts](#eprson-reactive-form-ts)
         - [eperson reactive form template html](#eperson-reactive-form-template-html)
      + [τωρα να δουμε πως να εμφανίζονται αυτα που εβαλα αν κάνω submit](#-submit)
         - [epperson reactive form components ts](#epperson-reactive-form-components-ts)
         - [reactive form example.html](#reactive-form-examplehtml)
         - [ts](#ts-2)
         - [html](#html-3)
   * [problimata](#problimata)
   * [ngOnChanges](#ngonchanges)
- [http client - <font color="red"> Επικοινωνία με το backend  </font>!!!!!! req/res](#http-client-backend-reqres)
         - [app.config.ts](#appconfigts)
         - [jokes.service.ts](#jokesservicets)
         - [/Interface/jokes.ts](#interfacejokests)
         - [app.routes](#approutes)
         - [list group  menu ts](#list-group-menu-ts-2)
         - [http-client-example.ts](#http-client-examplets)
         - [ts](#ts-3)
         - [http-client-example.html](#http-client-examplehtml)
- [user registration form](#user-registration-form)
         - [environment.development.ts](#environmentdevelopmentts)
         - [environment.ts](#environmentts)
         - [users.ts](#usersts)
         - [user.service.ts](#userservicets)
         - [app.routes.ts](#approutests-1)
         - [list-group-menu.ts](#list-group-menuts)
         - [user-registration.component.html](#user-registrationcomponenthtml)
         - [user registration component ts](#user-registration-component-ts)
         - [ts](#ts-4)
         - [ts](#ts-5)
         - [html](#html-4)
         - [user.routes](#userroutes)
         - [user.controller](#usercontroller)
         - [user.serviice](#userserviice)
         - [ts](#ts-6)
         - [html](#html-5)
         - [user.service.ts](#userservicets-1)
         - [ts](#ts-7)
         - [html](#html-6)
         - [ts](#ts-8)
         - [html](#html-7)

<!-- TOC end -->

<!-- TOC --><a name="typescript"></a>
# TypeScript

node --experimental-strip-types example2.ts

```
npm install -global typescript
```

```
tsc example2.ts
npm install -global ts-node
```

<!-- TOC --><a name="extension-vscode-coderunner"></a>
### extension vscode coderunner

<!-- TOC --><a name="tsconfigjson"></a>
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
<!-- TOC --><a name="-vs-"></a>
### και με το βελάκι |> επάνω δεξια στο vs το τρέχει

<!-- TOC --><a name="-angular"></a>
# εγκατάσταση Angular
```bash
npm install -g @angular/cli
ng version
```
<!-- TOC --><a name="-angular-1"></a>
# καινούργιο Angular
<!-- TOC --><a name="-settings"></a>
## αρχικα settings:
```bash
ng new angular-introduction
```
<!-- TOC --><a name="-"></a>
#### (το πήγα στον εξωτερικο σκληρο λογο χωρου)
- cd /e/coding/CF7TESTBEDANGULAR

<!-- TOC --><a name="-tsconfigjson"></a>
### στο tsconfig.json
```
    "baseUrl": "./",
```

<!-- TOC --><a name="--1"></a>
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

<!-- TOC --><a name="github-pages"></a>
# github pages
git init κάνει απο μόνο του το Angular
```bash
git remote add origin git@github.com:alkisax/cf7-angular-introduction.git
git push -u origin main

ng add angular-cli-ghpages

```

<!-- TOC --><a name="packagejson"></a>
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

<!-- TOC --><a name="--2"></a>
# αρχίζουμε την εφαρμογή
θέλω να περάσω απο το component (που είναι ο controller μου) στο html (που είναι το template μου). Αυτή είναι η λογική του angular

<!-- TOC --><a name="-componentsts"></a>
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

<!-- TOC --><a name="-html"></a>
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

<!-- TOC --><a name="-component"></a>
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

<!-- TOC --><a name="-data-component-child"></a>
# αν τωρα θέλω ο πατέρας να περάσει data στο component child

<!-- TOC --><a name="-const-"></a>
### οι μεταβλητές δεν έχουν const μέσα σε κλαση

- δημιουργώ έναν φακελο shared και μέσα βάζω τα interfaces Που θα χρησιμοποιηθουν απο πολλα 
```bash
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

<!-- TOC --><a name="-person-table-ts"></a>
#### στο person table ts 
- για να καταλάβει ότι κάποιος θα σου στείλει κάτι kai θα το βάλεις στο personInput. Είτε θα ικανοποιεί το Person ή undefined
```ts
import { Component, input } from '@angular/core';
// [...]

  @Input() personInput: Person | undefined
```
<!-- TOC --><a name="-app-html"></a>
#### στο app html
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

<!-- TOC --><a name="-arr"></a>
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


  ## ftiaxnoyμε ένα αππ μετρητή
  ```bash
  ng generate component components/event-bind-example
  ```
  - εχω το html
  - import στο app.ts
  - παιρνω το σελεκτορ της νεας κλασης

```
  app-event-bind-example
```

  ```ts
  import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

  imports: [PersonTableComponent, EventBindExampleComponent],
  ```
  - και στο app html
<app-event-bind-example></app-event-bind-example>

- στη λογικη της εφαρμογής χρησιμοποιω το this
```ts
  times: number = 0;
  reset(){
    this.times = 0;
  }
```
<!-- TOC --><a name="-ts-"></a>
#### στο ts η λογική είναι
```ts
export class EventBindExampleComponent {
  times: number = 0;
  userInput: string = '';

  incrementTimes(){
    // this.times = this.times + 1
    this.times++;
  }

  decrementTimes(){
    // this.times = this.times - 1;
    this.times--;
  }

  reset(){
    this.times = 0;
  }

  onUserInput(event: Event){
    this.userInput = (<HTMLInputElement>event.target).value; //(<HTMLInputElement>event.target) tells TypeScript: "Trust me, this event came from an input element"
  }

}
```

<!-- TOC --><a name="-155"></a>
# -> <font color="red">ως εδω επανάληψη 15/5</font>

<!-- TOC --><a name="-app-html-1"></a>
#### στο app html
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

<!-- TOC --><a name="-component-routing"></a>
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

<!-- TOC --><a name="-approutests-"></a>
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

<!-- TOC --><a name=""></a>
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

<!-- TOC --><a name="-home"></a>
### χρειάζομαι και αυτό για το home
- pathMatch:'full' (?)
```ts
  { path: '', redirectTo:'/welcome', pathMatch:'full' }
````

<!-- TOC --><a name="--3"></a>
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
<!-- TOC --><a name="--4"></a>
## φτιαχνουμε καλυτερα το μενού
<!-- TOC --><a name="--5"></a>
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

<!-- TOC --><a name="-for-directive-example"></a>
## θα κάνουμε ταξινόμιση στο @for directive example

<!-- TOC --><a name="-components"></a>
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

<!-- TOC --><a name="-consol-log"></a>
## θέλω αν κάνω διπλό κλικ σε μια γραμμη και μετά να μου κάνει ένα consol log
<!-- TOC --><a name="html"></a>
#### html
```html
      <tr class="align-middle" (dblclick)="onPersonClicked(row)">
```
<!-- TOC --><a name="ts"></a>
#### ts
```ts
  onPersonClicked(person:EPerson){
    console.log("Person>>",person)
  }
```

<!-- TOC --><a name="ascending-descending"></a>
## ascending η descending
- βιβλιοθήκη για ταξινόμηση
```bash
npm i lodash-es
```
το πρόβλημα είναι οτι είναι βιβλιοθήκη της js και οχι της ts και θέλει ρυθμήσεις
```bash
npm i --save-dev @types/lodash-es
```


<!-- TOC --><a name="-simple-datable-components-ts"></a>
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

<!-- TOC --><a name="-html-1"></a>
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
<!-- TOC --><a name="html-1"></a>
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

<!-- TOC --><a name="-ts-sortsign"></a>
#### παω στο ts να φτιάξω την sortSign
```ts
  sortSign(sortKey: keyof EPerson): string {
    if (this.sortOrder[sortKey]==='asc') return '\u2191'
    else if (this.sortOrder[sortKey]==='desc') return '\u2193'
    else return '';
  }
```

<!-- TOC --><a name="--6"></a>
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

<!-- TOC --><a name="ts-1"></a>
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
<!-- TOC --><a name="-path"></a>
#### στο path
```ts
{ path: 'component-output-example', component: ComponentOutputExampleComponent },
```
<!-- TOC --><a name="-list-group-menuts"></a>
#### στο list-group-menu.ts
```ts
    { text: 'component Output Example', linkName: 'component-output-example'},
```
<!-- TOC --><a name="-component-output-exampl-alert"></a>
## θέλω με διπλό κλικ να επιστρέψει στο component-output-exampl (στον πατέρα) και αυτό να μου τα στείλει με alert

<!-- TOC --><a name="simple-datatable-ts"></a>
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
<!-- TOC --><a name="component-outpout-html"></a>
#### component outpout html
να στείλει τα ντατα σε μια διαδικασια που λέγετε showpersonclicked
<!-- TOC --><a name="-input-output-"></a>
### το input με [] το output σε ()
```html
<h4>Component Output Example</h4>
<app-simple-datatable [data]="manyPerson" (personClicked)="showPersonClicked($event)"></app-simple-datatable>
```
<!-- TOC --><a name="-showpersonclicked-utput-example-ts"></a>
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
<!-- TOC --><a name="-alert-pop-up-modal-bootstrap-meterial-design"></a>
### το alert pop up δεν είναι καλός τρόπος. Είτε modal απο bootstrap, είτε meterial design

<!-- TOC --><a name="material-design"></a>
# Material design
το components έχει και το styling ενω το cdk οχι

το ng add κανει install και τις ρυθμήσεις στα σετινγκσ
```bash
ng add @angular/material
```
- παίρνω κώδικα απο https://material.angular.dev/cdk/dialog/overview

<!-- TOC --><a name="output-example-ts"></a>
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

<!-- TOC --><a name="-1"></a>
# φορμες
- template driven forms
- reactive forms (αυτό είναι το συνηθισμενο)

<!-- TOC --><a name="-components-1"></a>
### φτιαχνω δυο components
```bash
ng generate component components/template-driven-form-example

ng generate component components/eperson-template-driven-form
```
<!-- TOC --><a name="app-routes"></a>
#### app routes
```ts
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';

  { path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
```

<!-- TOC --><a name="list-group-menu-ts"></a>
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

<!-- TOC --><a name="--7"></a>
## θέλω μια φορμα και οταν πατάω υποβολή να μου τα εμφανίζει στα δεξια

<!-- TOC --><a name="template-driven-form-html"></a>
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

<!-- TOC --><a name="template-driven-form-ts"></a>
#### template driven form ts
κάνω τα ιμπορτ 
```ts
import { EpersonTemplateDrivenFormComponent } from '../eperson-template-driven-form/eperson-template-driven-form.component';
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
```

<!-- TOC --><a name="eperson-template-ts"></a>
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
<!-- TOC --><a name="eperson-template-driven-form-html"></a>
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
<!-- TOC --><a name="--8"></a>
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

<!-- TOC --><a name="eperson-template-drive-form-ts"></a>
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

<!-- TOC --><a name="-template-drivern-form-examplets"></a>
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

<!-- TOC --><a name="template-driven-form-examplehtml"></a>
#### template driven form example.html
input [] output ()
```html
<!-- oταν το person Που ειναι αουτπουτ γινει emit θα πας στον πατέρα και θα τρεξεις την onperson περνόντας το event, ουσιαστικα το submit -->
  <app-eperson-template-driven-form (person)="onPerson($event)"></app-eperson-template-driven-form>
```
2:18:25
```html
  <app-eperson-template-driven-form (person)="onPerson($event)"></app-eperson-template-driven-form>
  <div class="d-flex flex-column gap-4">
    <!-- <app-person-table [personInput]="currentPerson"></app-person-table> -->
    <app-person-table></app-person-table>
    <app-simple-datatable [data]="persons"></app-simple-datatable>
  </div>
```

- κάτι αντίστοιχω θα πρέπει να κάνουμε και στο pesron table για να στείλει τα data
- έχει μια μεταβλητή που παίρνει Person ή undefined
το ένα είναι Person και το αλλο Eperson οπότε το αλλάζω
```
  @Input() personInput: Person | EPerson |undefined
```

- στο person table component html  <td class="ps-2">{{personInput?.address}}</td>
θα πρέπει να κάνω αλλαγήσ το person γιατί δεν έχει address
<!-- TOC --><a name="person-table-component-html"></a>
#### person table component html
```html
@if (!personInput){
  <div class="alert alert-danger text-center">No Person Details</div>
} @else {
  ολα τα υπόλοιπα

        @if(isPerson()){
        <tr>
          <td class="fw-semibold text-end">Address</td>
          <td class="ps-2">{{ addressOReducation }}</td>
        </tr>
      }
      @if(isEPerson()){
        <tr>
          <td class="fw-semibold text-end">Education</td>
          <td class="ps-2">{{ addressOReducation }}</td>
        </tr>
      }
}
```
<!-- TOC --><a name="person-table-component-ts"></a>
#### person table component ts
για να μην στέλνει undefind
```ts

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
```

<!-- TOC --><a name="template-driven-form-example-ts"></a>
#### template driven form example ts
```ts
  persons: EPerson[] = [];
  currentPerson: EPerson = {
    givenName: '',
    surName: '',
    age: '',
    email:'',
    education:''
  };

    onPerson(data: EPerson){
    this.persons.push(data)
    this.currentPerson = data;
    console.log("Father", this.persons);
  }
```
html
```html
    <app-person-table [personInput]="currentPerson"></app-person-table>
    <app-simple-datatable [data]="persons"></app-simple-datatable>
```

5/5/25

<!-- TOC --><a name="example-to-udate"></a>
# example to udate
```bash
ng update @angular/core@18 @angular/cli@18
ng update @angular/material@18
npm install typescript@latest --save-dev
ng update @angular/core@19 @angular/cli@19
ng update @angular/material@19
```

<!-- TOC --><a name="-reactive-"></a>
# δεύτερος τρόπος για φόρμες. Reactive φορμες
- Αυτός είναι ο ευκολος τρόπος

```bash
ng generate component components/reactive-form-example
ng generate component components/eperson-reactive-form
```
ο reactive form example Που θα καλεί τρία υποcomponents: τη φόρμα, το simple data table και το person table

<!-- TOC --><a name="approutests"></a>
#### app.routes.ts
```ts
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';

  { path: 'reactive-form-example', component: ReactiveFormExampleComponent},
```

<!-- TOC --><a name="list-group-menu-ts-1"></a>
#### list group menu ts
```ts
    { text: 'Reactive Form Example', linkName:'reactive-form-example'},
```

<!-- TOC --><a name="reactive-form-example-ts"></a>
#### reactive form example ts
κάνω ιμπορτ τα τρεια υποκομπονεντ
```ts
import { PersonTableComponent } from '../person-table/person-table.component';
import { SimpleDatatableComponent } from '../simple-datatable/simple-datatable.component';
import { EpersonReactiveFormComponent } from '../eperson-reactive-form/eperson-reactive-form.component';


  imports: [
    PersonTableComponent,
    SimpleDatatableComponent,
    EpersonReactiveFormComponent
  ],

```
- απο την φορμα θα φτιαξουμε εναν χριστη και σαμπμιτ. αυτόν output και αφού τον διαβάσει ο πατέρας θα τον κάνει input στα άλλα δύο component app-person-table kai app-simple-datatable.
<!-- TOC --><a name="html-2"></a>
#### html
```html
<h4>Reactive Form Example</h4>
<div class="d-flex gap-4">
  output ()
  <!-- να εμφανιστεί το app eperson. απο εδώ θα κάνουμε output προς τον πατέρα reactive-form-example-component και αφού τα διαβάσει θα τα κάνει Input -> -->
  <app-eperson-reactive-form (person)="onPerson($event)"></app-eperson-reactive-form>
  <!-- d-flex flex-column το ένα κάτω απο το άλλο -->
  <div class="d-flex flex-column gap-4">
    input []
    -> εδώ
    <app-person-table [personInput]="currentPerson"></app-person-table>
    <!-- να εμφανίσει το datatable -->
    <!-- -> και εδώ -->
    <app-simple-datatable [data]="persons"></app-simple-datatable>
  </div>
</div>
```

<!-- TOC --><a name="eprson-reactive-form-ts"></a>
#### eprson reactive form ts
```ts
ολες οι βιβλιοθήκες για τις φορμες:
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { EPerson } from 'src/app/shared/Interfaces/eperson';

@Component({
  selector: 'app-eperson-reactive-form',
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  templateUrl: './eperson-reactive-form.component.html',
  styleUrl: './eperson-reactive-form.component.css'
})

// φιαχνω ένα formgroup και του λέω τι πεδία έχει και βάζω αρχικές τιμές στις παρενθέσεις
  form = new FormGroup({
    givenName: new FormControl('',{nonNullable:true, validators: Validators.required}),
    surName: new FormControl('',{nonNullable:true, validators: Validators.required}),
// εδώ έχει αρχική τιμή το 18 και αντι για validator έχει ένα arr
    age: new FormControl(18, [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(100)
    ]),
// kai πάλι επειδή δύο validator σε []
    email: new FormControl('', [Validators.required, Validators.email]),
    education: new FormControl('', Validators.required)
  });
```

- αφού έφτιαξα την φόρμα μου πάω να φτιάξω το template
<!-- TOC --><a name="eperson-reactive-form-template-html"></a>
#### eperson reactive form template html
```html
  <!-- με [] το input -->
  <form [formGroup]="form" class="d-flex flex-column">
    <mat-form-field> 
      <mat-label>First Name</mat-label>
      <input type="text" matInput formControlName="givenName" >
      <mat-error>First name is required field</mat-error>
    </mat-form-field>
    <mat-form-field>
      <mat-label>Last Name</mat-label>
      <input type="text" matInput formControlName="surName">
      <mat-error>Last Name is required field</mat-error>
    </mat-form-field>
    etc
  </form>
  <button
    mat-flat-button
    color="primary"
    [disabled] = "form.invalid"
    (click)="onSubmit()"
  >
    Submit
  </button>
  <button (click)="onSetValue()">Set value</button>

```
- πριν το κάναμε με ngmodel
- εδώ φτιάξαμε μια form με formgroup. Πισω ήταν  form = new FormGrou() εδώ η συνδεση γίνετε με το [formGroup]="form". ενω τα πεδιία που ήταν πίσω     givenName: new FormControl('', Validators.required), εδώ συνδεονται με το formControlName="givenName"  

<!-- TOC --><a name="-submit"></a>
### τωρα να δουμε πως να εμφανίζονται αυτα που εβαλα αν κάνω submit

```html
    (click)="onSubmit(form.value)"
```
η onSubmit δεν υπάρχει στο ts:
```ts
  onSubmit(){
    if (this.form.valid) {
      // console.log(this.form.value);

      const person: EPerson = {
        givenName: this.form.value.givenName ?? '',
        surName: this.form.value.surName ?? '',
        age: String(this.form.value.age) ?? '',
        email: this.form.value.email ?? '',
        education: this.form.value.education ?? ''
      }
      this.person.emit(person);
      this.form.reset()
    }
    // console.log("Data", data);
    // console.log(this.form);
    // console.log("givenName>>", this.form.controls['givenName'].value);
    // this.form.controls["surName"].setValue("Papakis");
    // console.log(this.form.value)
  }

```

- αντίστοιχα φτιάχνουμε το   <button (click)="onSetValue()">Set value</button>
```ts

  onSetValue(){
    // το this γιατι είναι μια public  μεταβλητή
    this.form.setValue({
      givenName: "Kostas",
      surName:"Lalakis",
      age: 39,
      email:"kostas@aueb.gr",
      education: "Bachelor degree"
    })
  }
```
6/5/223
- θέλω να παρω τα ντατα που έρχονται με το σαμπμιτ αυτης της φορμας  και να τα στείλω στον πατέρα (reactive form example) και απο εκεί στα αλλα δύο υποcomponent

θα πρέπει να υλοποιήσουμε ένα @output να τα διαβάσει ο πατέρας και με @input να τα στείλει στα person table kai simple data table

- αρχίζω με το αουτπουτ
<!-- TOC --><a name="epperson-reactive-form-components-ts"></a>
#### epperson reactive form components ts
```ts
  @Output() person = new EventEmitter<EPerson>()

  // θα ενεργοποιειθεί στο onSubmit
  //   this.person.emit(person);
    onSubmit(){
    if (this.form.valid) {
      // console.log(this.form.value);

      const person: EPerson = {
        givenName: this.form.value.givenName ?? '',
        surName: this.form.value.surName ?? '',
        age: String(this.form.value.age) ?? '',
        email: this.form.value.email ?? '',
        education: this.form.value.education ?? ''
      }
      this.person.emit(person);
      this.form.reset()
    }
    }
```
-  πάμε τωρα στον πατέρα
<!-- TOC --><a name="reactive-form-examplehtml"></a>
#### reactive form example.html
```html
  <app-eperson-reactive-form (person)="onPerson($event)"></app-eperson-reactive-form>
```
<!-- TOC --><a name="ts-2"></a>
#### ts
```ts
  // δημιουτγώ δυο πεδιά για να τα στείλω παρακάτω
  currentPerson: EPerson | undefined;
  persons: EPerson[] = [];

  onPerson(data: EPerson){
    // console.log("Father", data);
    this.currentPerson = data;
    this.persons.push(data);
    // this.personService.modifiedDataTable.set(true)
    console.log("Father", this.persons);
  }
```
<!-- TOC --><a name="html-3"></a>
#### html
```html
    <app-person-table [personInput]="currentPerson"></app-person-table>
    <app-simple-datatable [data]="persons"></app-simple-datatable>
```

<!-- TOC --><a name="problimata"></a>
## problimata
ng generate service shared/services/person  

`this.persons.push(data);` κάνει mutate στο arr και οχι δημιουργία καινούργιου και έτσι δεν έχω αλλαγή state που θα προκαλέσει επαναφρεσκάρισμα στην σελλιδα
για αυτό `ts this.persons = [...this.persons, data]`

<!-- TOC --><a name="ngonchanges"></a>
## ngOnChanges
- σαν την useEffect??? simpledatable.ts
```ts
  ngOnChanges(changes: SimpleChanges){
    if (changes['data'] && this.data) {
      console.log("ngOnChanges", this.data);
      this.epersonsData = this.data
    }
    if (changes['myData']) {
      console.log("MyData")
      // this.myFunction();
    }
  }
```

<!-- TOC --><a name="http-client-backend-reqres"></a>
# http client - <font color="red"> Επικοινωνία με το backend  </font>!!!!!! req/res
```bash
ng generate component components/http-client-example
ng generate service shared/services/jokes
ng genarate interface shared/Interfaces/jokes
```
 θα ρωταεί ένα api το api.chucknoris.io/jokes/random καθε φορά εμφανίζει ένα ανεκδοτο. και https://icanhazdadjoke.com/

<!-- TOC --><a name="appconfigts"></a>
#### app.config.ts
```ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
```
<!-- TOC --><a name="jokesservicets"></a>
#### jokes.service.ts
```ts
// σε όλη την εφαρμογή αυτό το σερβις θα είναι γνώστό. και οπου αλλου την κάνω import
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
```

```ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJoke, ChuckNorrisJoke } from '../Interfaces/jokes';
import { J } from '@angular/cdk/keycodes';

const DAD_JOKES_API_URL = "https://icanhazdadjoke.com/";
const JACK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random'

@Injectable({
  providedIn: 'root'
})

export class JokesService {
  // αυτή η μεταβλιτή κληρονομοί όλλες τις ιδιώτητες του service HttpClient. Με το inject γιατί έχει @Injectable εδώ λίγο παραπάνω
  http: HttpClient = inject(HttpClient);

  // δεν κάνει κάτι. παλιότερα που δεν είχε ιντζεκτ εδώ δηλώναμε οτι κληρονομεί
  // constructor(
  //   public http = HttpClient()
  // ) { }

    getDadJokes(){
    return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
      headers:{
        Accept: "application/json"
      }
    })
  }

  getChuckNorrisJoke(){
    return this.http.get<ChuckNorrisJoke>(JACK_NORRIS_JOKES_API_URL, {
      headers: {
        Accept: 'application/json'
      }
    })
  }
}
```
<!-- TOC --><a name="interfacejokests"></a>
#### /Interface/jokes.ts
- χρησιμοποιώ βοηθητικές ιστοσελιδες πχ from json to typescript
```ts
export interface DadJoke {
  id: string
  joke: string
  status: number
}

export interface ChuckNorrisJoke {
  categories: any[]
  created_at: string
  icon_url: string
  id: string
  updated_at: string
  url: string
  value: string
}
```

- για να εμφανιστεί στην εφαρμογή μου
<!-- TOC --><a name="approutes"></a>
#### app.routes
```ts
  { path: 'http-client-example', component: HttpClientExampleComponent},
```
<!-- TOC --><a name="list-group-menu-ts-2"></a>
#### list group  menu ts
```ts
    { text: 'HTTP client example', linkName:'http-client-example'}
```

---
<!-- TOC --><a name="http-client-examplets"></a>
#### http-client-example.ts
πρέπει να κάνει τα δύο ρικουεστ απο το σερβισ και να επιστρέψει το αποτέλεσμα (τα ανεκδοτα)
**ngOnInit()**
```ts
  ngOnInit():void{
    this.refreshChuckNorrisJoke();
    this.refreshDadJoke();
  }
```
- το **subscribe** κάνει αυτό που κάνει το await. οταν περιμένω να μου επιστρέψει κάτι 
```ts
import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';

export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService); //jJ

  dadJoke: string = '';
  chuckNorrisJoke: string = '';

// με αυτό τρέχω κατί με το που φορτώσει η σελίδα
  ngOnInit():void{
    // this.jokesService.getDadJokes()
    //   .subscribe((data)=>{
    //     console.log("DAD JOKE", data)
    //     console.log("Dad Joke", data.joke)
    //   });

    // this.jokesService.getChuckNorrisJoke()
    //   .subscribe((data)=>{
    //     console.log("CHUCK NORRIS", data);
    //     console.log("Chuck Joke", data.value)
    //   })
    this.refreshChuckNorrisJoke();
    this.refreshDadJoke();
  }

  refreshDadJoke(){
    this.jokesService.getDadJokes()
      .subscribe((data) =>{
        console.log("Dad Joke", data.joke);
        this.dadJoke = data.joke;
      })
  }

  refreshChuckNorrisJoke(){
    this.jokesService.getChuckNorrisJoke()
      .subscribe((data) => {
        console.log("Chuck Norris Joke", data.value);
        this.chuckNorrisJoke = data.value;
        // to ότι το ένα είχει joke και το άλλο value δεν έχει κάποια σημασία είναι γιατί έτσι είναι δηλωμένο το μοντελ που έρχετε απο το api 
      })
  }
```

- τώρα που έλαβα τα ντάτα και τα διαμόρφωσα πρέπει να τα κάνω να εμφανιστουν στην σελίδα φτιαχνοντας το αντιστοιχοο τεμπλειτ
<!-- TOC --><a name="ts-3"></a>
#### ts
```ts
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

  imports: [MatButtonModule, MatCardModule],
```

- `(click)="refreshDadJoke()"`
<!-- TOC --><a name="http-client-examplehtml"></a>
#### http-client-example.html
```html
<div class="d-flex flex-column gap-2 mt-2 w-75">
  <mat-card>
    <mat-card-header>
      <mat-card-title>Dad Joke</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p class="text-wrap">{{ dadJoke }}</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button (click)="refreshDadJoke()">Refresh</button>
    </mat-card-actions>
  </mat-card>

  <mat-card>
    <mat-card-header>
      <mat-card-title>Chuck Norris Joke</mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <p class="text-wrap">{{ chuckNorrisJoke }}</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-button (click)="refreshChuckNorrisJoke()">Refresh</button>
    </mat-card-actions>
  </mat-card>
</div>
```

<!-- TOC --><a name="user-registration-form"></a>
# user registration form
- θα χρησιμοποιήσουμε το node απο τα προηγούμενα μαθήματα ως backend
```bash
ng generate component components/user-registration
ng generate interface shared/Interfaces/user
ng generate service shared/services/user
ng generate environments
```
- το enviroments μας επιτρέπει να έχουμε δύο περιβάλλοντα τύπου development και working (Πχ άλλα url ή τεστ κλπ)
<!-- TOC --><a name="environmentdevelopmentts"></a>
#### environment.development.ts
```ts
export const environment = {
  production: false,
  apiURL: 'http://localhost:3000'
};
```
<!-- TOC --><a name="environmentts"></a>
#### environment.ts
```ts
export const environment = {
  production: true,
  apiURL: "https://coding-factory-backend.gr"
};
```

- φτιάχνω το ιντερφεισ
<!-- TOC --><a name="usersts"></a>
#### users.ts
```ts
export interface User {
  username: string;
  password: string;
  name: string;
  surname: string;
  email: string;
  address: {
    area: string;
    road: string
  }
}
```

- service
- `@Injectable`
- Θα χρησιμοποιήσω jwt οπότε πρέπει να το εγκαταστήσω
```bash

```
<!-- TOC --><a name="userservicets"></a>
#### user.service.ts
``` ts
import { Injectable, inject, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { User, Credentials, LoggedInUser } from '../Interfaces/user';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

// τα routes τα βλέπω απο τον σερβερ στο backend
const API_URL = `${environment.apiURL}/api/users`
const API_URL_AUTH = `${environment.apiURL}/api/auth`

@Injectable({
  providedIn: 'root'
})

export class UserService {
  http: HttpClient = inject(HttpClient);

  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }
}
```

- τώρα πρέπει να τα βάλω μέσα στην υπόλοιπη σελίδα για να τα βλέπω
<!-- TOC --><a name="approutests-1"></a>
#### app.routes.ts
```ts
  { path: 'user-registration-example', component: UserRegistrationComponent},
```
<!-- TOC --><a name="list-group-menuts"></a>
#### list-group-menu.ts
```ts
  { text: 'user Registration Componenet', linkName:'user-registration-example'}
```

- Πάω τώρα να φτιάξω το html του rfegistration

- πρώτα στο ts για την εμφάνιση
```ts
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-registration',
  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule
  ],
//...
})
```
<!-- TOC --><a name="user-registrationcomponenthtml"></a>
#### user-registration.component.html
- αργοτερα θα πάω στο ts να φτιάξω τα `[formGroup]="form"` και `formControlName="username"`

```html
  <div class="d-flex flex-column mt-2 w-50">
    <form [formGroup]="form" class="d-flex flex-column">
      <mat-form-field>
        <mat-label>Username</mat-label>
        <input matInput type="text" formControlName="username">
        <mat-error>Username is required</mat-error>
      </mat-form-field>

      <mat-form-field>
        <mat-label>First Name</mat-label>
        <input matInput type="text" formControlName="name">
        <mat-error>First Name is required</mat-error>
      </mat-form-field>

      <mat-form-field>
        <mat-label>Last Name</mat-label>
        <input matInput type="text" formControlName="surname">
        <mat-error>Last Name is required</mat-error>
      </mat-form-field>

      <mat-form-field>
        <mat-label>Email</mat-label>
        <input type="text" matInput formControlName="email" (blur)="check_dublicate_email()">
        @if(form.get('email')?.hasError('dublicateEmail')){
          <mat-error>Email is already registered</mat-error>
        } @else if(form.get('email')?.invalid && form.get('email')?.touched) {
          <mat-error>Email is missing or invalid</mat-error>
        }        
      </mat-form-field>

      <div class="d-flex gap-2" formGroupName="address">
        <mat-form-field>
          <mat-label>Area</mat-label>
          <input type="text" matInput formControlName="area">
        </mat-form-field>

        <mat-form-field>
          <mat-label>Road</mat-label>
          <input type="text" matInput formControlName="road">
        </mat-form-field>
      </div>

      <mat-form-field>
        <mat-label>Password</mat-label>
        <input type="password" matInput formControlName="password">
        @if (form.get('password')?.invalid && form.get('password')?.touched){
          <mat-error>Password is missing or invalid</mat-error>
        }      
      </mat-form-field>

      <mat-form-field>
        <mat-label>Confirm Password</mat-label>
        <input type="password" matInput formControlName="confirmPassword"/>
        @if(form.get("confirmPassword")?.hasError("passwordMismatch")){
        <mat-error>Password do not match</mat-error>
        } @else if (form.get("confirmPassword")?.invalid && form.get("confirmPassword")?.touched){
        <mat-error>Confirm Password is missing or invalid</mat-error>
        }      
      </mat-form-field>

      <button
        mat-flat-button
        color="primary"
        [disabled]="form.invalid"
        (click)="onSubmit()"
        >Register
      </button>
    </form>
  </div>

  <button 
    mat-flat-button
    color="primary"
    class="mt-2"
    (click) = "registerAnother()"
  >
    Register Another User
  </button>
```

- η φόρμα είναι εμφανισιακά εντάξη αλλά δεν έχει λειτορυγικότητα και φτιάχνω τη λογική στο ts (οχι template driven form αλλα reactive form)

<!-- TOC --><a name="user-registration-component-ts"></a>
#### user registration component ts
```ts
import { 
  AbstractControl,
  FormControl, 
  FormGroup, 
  ReactiveFormsModule, 
  Validators 
} from '@angular/forms';

//...

  imports: [
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule
  ],
//...

export class UserRegistrationComponent {

  // new FormGroup vs new FormGroup

  form = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormGroup({
      area: new FormControl(''),
      road: new FormControl('')
    }),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(5)])
  },
    this.passwordConfirmValidator,
  );
}
```
- τωρα μπορώ να περάσω τα formcontrol στην φορμα (εχει γίνει)
```html
<form [formGroup]="form" class="d-flex flex-column">
  <input matInput type="text" formControlName="username">
  <input matInput type="text" formControlName="name">
  <input matInput type="text" formControlName="surname">
  <input type="text" matInput formControlName="email" (blur)="check_dublicate_email()">
  <div class="d-flex gap-2" formGroupName="address">
    <input type="text" matInput formControlName="area">
    <input type="text" matInput formControlName="road">

  <button
    mat-flat-button
    color="primary"
    [disabled]="form.invalid"
    (click)="onSubmit()"
    >Register
  </button>
```

<!-- TOC --><a name="ts-4"></a>
#### ts
```ts
  onSubmit(){
    // const data = this.form.value as User;
    const data: User = {
      'username': this.form.get('username')?.value || '',
      'password': this.form.get('password')?.value || '',
      'name': this.form.get('name')?.value || '',
      'surname': this.form.get('surname')?.value || '',
      'email':this.form.get('email')?.value || '',
      'address': {
        'area':this.form.controls.address.controls.area?.value || '',
        'road': this.form.controls.address.controls.road?.value || ''
      }
    }
    console.log(data);
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User Saved", response);
          this.registrationStatus = {success: true, message: "User registrered"}
        },
        error: (response) => {
          console.log("User not Saved", response.error.data.errorResponse.errmsg)
          this.registrationStatus = {success: false, message: response.error.data.errorResponse.errmsg}
        }
      })
  }
```

- τωρα διάφοροι ελεγχοι με if
- είναι ίδια τα δύο πασσγουορντ;

<!-- TOC --><a name="ts-5"></a>
#### ts
- `form.get('password')?.value;`
```ts
  form = new FormGroup({
    //...
    },
    this.passwordConfirmValidator,
  );

// το abstractControl είναι η γενική κλάση του formgroup. πρέπει να γίνει import. Στα πρώτα {} μας λέει τι επιστρέψει ή ένα κλειδί ή ένα μπουλεαν
  passwordConfirmValidator(control: AbstractControl): {[key:string]: boolean} | null {
    const form = control as FormGroup;
    
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value

    if(password && confirmPassword && password!==confirmPassword) {
      form.get('confirmPassword')?.setErrors({passwordMismatch: true})
      return {passwordMismatch: true}
    }
    // μου επιστρέφει ή PasswordMismatch ή null. Αυτό θα πρέπει να το διαχειρηστώ στην html
    return null
  }
```
<!-- TOC --><a name="html-4"></a>
#### html
```html
      <mat-form-field>
        <mat-label>Confirm Password</mat-label>
        <input type="password" matInput formControlName="confirmPassword"/>
        @if(form.get("confirmPassword")?.hasError("passwordMismatch")){
        <mat-error>Password do not match</mat-error>
        } @else if (form.get("confirmPassword")?.invalid && form.get("confirmPassword")?.touched){
        <mat-error>Confirm Password is missing or invalid</mat-error>
        }      
      </mat-form-field>
```

- έλεγχος για το ημαιλ αν υπάρχει στην βάση
- καποια πράγματα πρέπει να προστεθούν στο backend
<!-- TOC --><a name="userroutes"></a>
#### user.routes
```js
router.get('/check_duplicate_email/:email', userController.checkDuplicateEmail)
```
<!-- TOC --><a name="usercontroller"></a>
#### user.controller
```js
exports.checkDuplicateEmail = async(req, res) => {
  const email = req.params.email;
 
  console.log("Check for duplicate email address", email);
  try {
    const result = await User.findOne({ email: email });
    if (result) {
      res.status(400).json({ status: false, data: result });
    } else {
      res.status(200).json({ status: true, data: result });
    }
  } catch (err) {
    res.status(400).json({ status: false, data: err });
    console.error(`Problem in finding email address: ${email}`, err);
  }
}
```
- πισω στην angular
<!-- TOC --><a name="userserviice"></a>
#### user.serviice
```ts
  check_dublicate_email(email: string) {
    return this.http.get<{status: boolean, data:User}>(
      `${API_URL}/check_duplicate_email/${email}`
    )
  }
```

- `this.form.get("email")?.value;`
- subscribe
<!-- TOC --><a name="ts-6"></a>
#### ts
```ts
import { UserService } from 'src/app/shared/services/user.service';

  userService = inject(UserService)

  check_dublicate_email(){
    const email = this.form.get("email")?.value;

    if (email){
      console.log("email", email);
      this.userService.check_dublicate_email(email)
        .subscribe({
          next: (response) => {
            console.log("Email OK",response);
            this.form.get("email")?.setErrors(null)
          },
          error: (response) => {
            console.log(response);
            const message = response.data;
            console.log("Email not OK",message);
            this.form.get('email')?.setErrors({dublicateEmail: true})
          }
        })
    }
  }
```
<!-- TOC --><a name="html-5"></a>
#### html
```html
      <mat-form-field>
        <mat-label>Email</mat-label>
        <input type="text" matInput formControlName="email" (blur)="check_dublicate_email()">
        @if(form.get('email')?.hasError('dublicateEmail')){
          <mat-error>Email is already registered</mat-error>
        } @else if(form.get('email')?.invalid && form.get('email')?.touched) {
          <mat-error>Email is missing or invalid</mat-error>
        }
        
      </mat-form-field>
```

- θα πρέπει στο onsubmit να τρέξω ένα post στο backend
- αλλα πρώτα θα φτιαξω το servise
<!-- TOC --><a name="userservicets-1"></a>
#### user.service.ts
```ts
  registerUser(user:User) {
    return this.http.post<{status: boolean, data: User}>(`${API_URL}`, user)
  }
```
<!-- TOC --><a name="ts-7"></a>
#### ts
```ts
  onSubmit(){
    // const data = this.form.value as User;
    const data: User = {
      'username': this.form.get('username')?.value || '',
      'password': this.form.get('password')?.value || '',
      'name': this.form.get('name')?.value || '',
      'surname': this.form.get('surname')?.value || '',
      'email':this.form.get('email')?.value || '',
      'address': {
        'area':this.form.controls.address.controls.area?.value || '',
        'road': this.form.controls.address.controls.road?.value || ''
      }
    }
    console.log(data);
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User Saved", response);
          this.registrationStatus = {success: true, message: "User registrered"}
        },
        error: (response) => {
          console.log("User not Saved", response.error.data.errorResponse.errmsg)
          this.registrationStatus = {success: false, message: response.error.data.errorResponse.errmsg}
        }
      })
  }
```
- Αν τώρα σώσουμε ένα χρήστη θα μας βγάλει unothorized
- εσβησα προσορινα τα middleware και θα ξαναμπούν αργότερα
- θελω να μου εμφανίζει μύνημα success

```ts
  registrationStatus: {success: boolean, message: string} = {
    success: false,
    message: 'Not attempted yet'
  }

    onSubmit(){
    const data: User = { 
      //...
    }
        console.log(data);
    this.userService.registerUser(data)
      .subscribe({
        next: (response) => {
          console.log("User Saved", response);
          // -v
          this.registrationStatus = {success: true, message: "User registrered"}
        },
        error: (response) => {
          console.log("User not Saved", response.error.data.errorResponse.errmsg)
          // -v
          this.registrationStatus = {success: false, message: response.error.data.errorResponse.errmsg}
        }
      })    
  }
```

<!-- TOC --><a name="html-6"></a>
#### html
```html
<h4>User Registration Example</h4>
@if (registrationStatus.message==="Not attempted yet"){
    <div class="d-flex flex-column mt-2 w-50">
      <form [formGroup]="form" class="d-flex flex-column">
      <!-- ... -->
    </form>
  </div>
} @else {
  @if(registrationStatus.success){
    <div class="alert alert-success mt-2 w-50">
      <strong>Success:</strong> {{registrationStatus.message}}
    </div>
  } @else {
    <div class="alert alert-danger mt-2 w-50">
      <strong>Error:</strong> {{registrationStatus.message}}
    </div>
  }
}
```

<!-- TOC --><a name="ts-8"></a>
#### ts
- καθαρίζω την φορμα για να περάσω καινούργιο
```ts
  registerAnother(){
    this.form.reset()
    this.registrationStatus = {success:false, message: "Not attempted yet"}
  }
```
<!-- TOC --><a name="html-7"></a>
#### html
```html
<button 
  mat-flat-button
  color="primary"
  class="mt-2"
  (click) = "registerAnother()"
>
  Register Another User
</button>
```



















