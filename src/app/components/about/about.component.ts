import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  jobTitle = 'Angular Developer!';
  aboutUser = " Hi, I'm Aman Patel SDE. I'm a final yr CE student at SIT Lonavala with 1.5 years of experience as a full-stack developer. I'm proficient in JavaScript, Node.js, Express js, Angular, and MongoDB. I'm a results-oriented individual with a strong passion for learning. I'm always looking for new challenges and opportunities to grow my skills ";
  downloadCV = 'Download CV';
  cvUrl = 'assets/images/Aman_Job_CV.pdf';
  profileUrl ='assets/images/Aman.jpg'
}
