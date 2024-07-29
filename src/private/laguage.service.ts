import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageSubject = new BehaviorSubject<'spanish' | 'english'>('english');
  language$ = this.languageSubject.asObservable();

  toggleLanguage() {
    const newLanguage = this.languageSubject.value === 'english' ? 'spanish' : 'english';
    this.languageSubject.next(newLanguage);
  }

  getLanguage() {
    return this.languageSubject.value;
  }
}