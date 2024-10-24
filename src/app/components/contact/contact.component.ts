import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  httpMethod: string = 'POST';
  actionUrl : string ='https://formspree.io/f/xzzbzkjv';
}
