import { Component, signal } from '@angular/core';

type ExpTab = 'terrain' | 'engagement';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.css'
})
export class Experiences {
  activeTab = signal<ExpTab>('terrain');

  setTab(tab: ExpTab) {
    this.activeTab.set(tab);
  }
}
