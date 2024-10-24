import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  navItems: String [] = ['Home','About', 'Education', 'Skills', 'Contact' ];

  navItems1 = [
    { label: 'Home', link:'home'},
    { label: 'About', link:'#about'},
    { label: 'Education', link:'#education'},
    { label: 'Skills', link:'#skills'},
    { label: 'Contact', link:'#contact'},

  ]

  menuValue: boolean = false;
  menu_icon: string = 'bi bi-list';

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openMenu() {
    this.menuValue = !this.menuValue; //true
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }

  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }
}

