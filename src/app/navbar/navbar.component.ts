import { Component } from '@angular/core';
import { LanguageService } from '../../private/laguage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  currentLanguage: 'spanish' | 'english';

  constructor(private languageService: LanguageService) {
    this.currentLanguage = this.languageService.getLanguage();
    this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
    });
  }

  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}