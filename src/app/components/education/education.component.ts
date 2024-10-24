import { Component } from '@angular/core';

// interface for education history
interface EducationEntry {
  year: string;
  title: string;
  description: string;
}

// interface for experience history
interface ExperienceEntry{
  year: string;
  company: string;
  description: string;
}


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})

export class EducationComponent {
  educationData: EducationEntry[] =[
    {
      year: '2018-2019',
      title: 'SSC State Board',
      description: 'I have completed my SSC board examination from the Maharashtra State Board of Pune University and scored 86.20% with distinction.'
    },
    {
      year: '2020-2021',
      title: 'HSC State Board',
      description: 'I have completed my HSC board examination from the Maharashtra State Board of Pune University in Science with all four subjects PCMB and scored 86.17% with distinction.'
    },
    {
      year: '2021-2025',
      title: 'Bachelor of Engineering - CE',
      description: 'I am pursuing my BE from SPPU university in Computer Engineering stream at SITL Pune and currently in my 3rd year with a CGPA of 6.30. I am expected to complete my course in June 2025.'
    },
    // add more entries here
  ];

  experienceData : ExperienceEntry[] = [
    {
      year:'2021-2022',
      company:'Java Intern - Newvision Software pvt ltd',
      description:'Responsible for designing, implementing, and maintaining Java-based software and applications, contributing to all stages of the software development lifecycle.'
    },
    {
      year:'2022-2024',
      company:'Angular Developer - Codecompete.in',
      description:' Acquired hands-on experience in developing dynamic and interactive web applications using technologies such as MongoDB, ExpressJS, AngularJS, and NodeJS.'
    },
    {
      year:'2023-Present',
      company:'Angular Developer trainee - SASC',
      description:' Hands on Workshops, hackathons and talks by world-reknowned Authors and Teachers take place throughout the year which cover everything you could possibly imagine, from web development to future of computing.'
    },
    {
      year:'2023-Present',
      company:'Angular Developer - Wesync Softwares',
      description:''
    }
    // add more entries here
  ]
}
