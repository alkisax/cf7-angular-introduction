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
```



























