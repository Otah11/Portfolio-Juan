import { Component } from '@angular/core';
import data from '../../private/data';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../private/laguage.service';


@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css',
})
export class AboutMeComponent {
  content: any;

  constructor(private languageService: LanguageService) {
    this.updateContent(this.languageService.getLanguage());
    this.languageService.language$.subscribe(language => {
      this.updateContent(language);
    });
  }

  updateContent(language: 'spanish' | 'english') {
    this.content = data[language];
  }
}