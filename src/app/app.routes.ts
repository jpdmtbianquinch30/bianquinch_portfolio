import { Routes } from '@angular/router';
import { Hero } from './components/hero/hero';
import { Apropos } from './components/apropos/apropos';
import { Parcours } from './components/parcours/parcours';
import { Experiences } from './components/experiences/experiences';
import { Projets } from './components/projets/projets';
import { Creations } from './components/creations/creations';
import { Explorations } from './components/explorations/explorations';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: Hero },
  { path: 'apropos', component: Apropos },
  { path: 'parcours', component: Parcours },
  { path: 'experiences', component: Experiences },
  { path: 'projets', component: Projets },
  { path: 'creations', component: Creations },
  { path: 'explorations', component: Explorations },
  { path: 'contact', component: Contact },
];