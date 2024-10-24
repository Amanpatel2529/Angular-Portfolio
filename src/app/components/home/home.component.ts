import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [
        animate(1000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class HomeComponent {
  username: string = 'Aman Patel';
  jobTitle: string = 'Angular Developer';
  aboutUser = " I'm a software engineer with a passion for building user-friendly and scalable web applications. I love working with Angular because it allows me to create complex and dynamic applications with ease. I'm also a big fan of TypeScript, which makes my code more robust and maintainable.";
  hireMe = 'Hire Me';
  LetsTalk = "Let's Talk";

}
