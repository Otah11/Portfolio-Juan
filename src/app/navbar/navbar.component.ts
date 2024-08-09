import { Component } from '@angular/core';
import { LanguageService } from '../../private/laguage.service';
import { CommonModule } from '@angular/common';
import data from '../../private/data';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  content: any;

  constructor(private languageService: LanguageService) {
    this.updateContent(this.languageService.getLanguage());
    this.languageService.language$.subscribe((language) => {
      this.updateContent(language);
    });
  }

  updateContent(language: 'spanish' | 'english') {
    this.content = data[language];
  }
  toggleLanguage() {
    this.languageService.toggleLanguage();
  }
}
