import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {
  menu = [
    { text: 'Component Input Example', linkName:'component-input-example'}, //αυτα είναι ονοματα του λινκ που θα χρησιμοποιηθούν.
    { text: '@for Directive Example', linkName:'for-directive-example' },
    { text: 'Event-Bind-Example', linkName:'event-bind-example'},
    { text: 'Simple DataTable Example', linkName:'simple-datatable-example'}
  ]
}