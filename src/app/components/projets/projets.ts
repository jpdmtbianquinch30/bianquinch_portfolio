import { Component } from '@angular/core';

type StatusTone = 'live' | 'dev' | 'done' | 'exploration';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  name: string;
  slug: string;
  stack: string[];
  status: string;
  statusTone: StatusTone;
  description: string;
  features: string[];
  links: ProjectLink[];
  coverAlt: string;
}

@Component({
  selector: 'app-projets',
  imports: [],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  projects: Project[] = [
    {
      name: 'QUINCH',
      slug: 'quinch',
      stack: ['Laravel', 'Angular', 'PostgreSQL', 'Docker'],
      status: 'En développement',
      statusTone: 'dev',
      description: "Application mobile e-commerce pour le marché sénégalais.",
      features: [
        'Paiement Wave / Orange Money',
        'Messagerie in-app · Notifications push',
        'Dashboard admin',
      ],
      links: [{ label: 'GitHub (test disponible)', url: '#' }],
      coverAlt: 'Smartphone, mobile, marché africain',
    },
    {
      name: 'QuizProjet',
      slug: 'quizprojet',
      stack: ['Spring Boot', 'Java 17', 'Angular 20', 'PostgreSQL', 'Docker'],
      status: 'Terminé · Projet de groupe (4 personnes) · Méthode SCRUM',
      statusTone: 'done',
      description: 'Plateforme de quiz interactive avec génération de questions par IA.',
      features: [
        '3 rôles : Admin · Évaluateur · Apprenant',
        'Génération de questions par IA (Groq / Llama 3.3)',
        'Compte à rebours · Feedback visuel en temps réel',
        'Classement des scores · Groupes d\u2019apprenants',
        'Sécurité JWT',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/QuizProjet' },
        { label: 'Vidéo démo', url: '#' },
      ],
      coverAlt: 'Quiz, apprentissage, tech',
    },
    {
      name: 'PARLE-MOI',
      slug: 'parle-moi',
      stack: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      status: 'Terminé · Projet client',
      statusTone: 'done',
      description: "Site web développé pour une cliente — plateforme d'écoute et de réservation.",
      features: [],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Site live', url: '#' },
      ],
      coverAlt: 'Écoute, relation, humain',
    },
    {
      name: 'Hotel',
      slug: 'hotel',
      stack: ['Laravel', 'Angular', 'PostgreSQL', 'Docker'],
      status: 'Terminé',
      statusTone: 'done',
      description: 'Plateforme web de réservation de chambres d\u2019hôtel.',
      features: [
        'Gestion des disponibilités · Réservation en ligne',
        'Interface admin complète',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/plateformGesHotel' }],
      coverAlt: 'Hôtel, architecture, chambre',
    },
    {
      name: 'FXLIP',
      slug: 'fxlip',
      stack: ['HTML', 'CSS', 'JavaScript'],
      status: 'Live',
      statusTone: 'live',
      description: 'Marque de création digitale — site web professionnel déployé.',
      features: [
        'Développement web · Montage vidéo · Design graphique',
        '12 000+ abonnés TikTok · 126 000+ likes',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/fxlip' },
        { label: 'TikTok', url: 'https://www.tiktok.com/@fxlip_3003' },
        { label: 'Site', url: '#' },
      ],
      coverAlt: 'Design, créatif, studio',
    },
    {
      name: 'M1GLBlazor2026',
      slug: 'm1glblazor2026',
      stack: ['C#', 'Blazor', 'PostgreSQL'],
      status: 'Terminé',
      statusTone: 'done',
      description: 'Application web Blazor — connexion et recherche par libellé et description.',
      features: [],
      links: [{ label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/M1GLBlazor2026' }],
      coverAlt: 'Code, interface, web',
    },
    {
      name: 'Application Cashflow',
      slug: 'cashflow',
      stack: ['HTML', 'CSS', 'JavaScript'],
      status: 'Terminé',
      statusTone: 'done',
      description: 'Outil de calcul et analyse de flux de trésorerie.',
      features: [
        'Prévisions financières · Bilans',
        'Tableaux de flux · Visualisation des données',
      ],
      links: [{ label: 'GitHub', url: '#' }],
      coverAlt: 'Finance, graphiques, business',
    },
    {
      name: 'PassyBeauty',
      slug: 'passybeauty',
      stack: ['PHP', 'MySQL'],
      status: 'Terminé',
      statusTone: 'done',
      description: 'Site e-commerce local — catalogue produits et gestion des commandes.',
      features: [],
      links: [
        { label: 'GitHub', url: '#' },
        { label: 'Site', url: '#' },
      ],
      coverAlt: 'Beauté, boutique, e-commerce',
    },
    {
      name: 'ChromaDB — Recherche Sémantique ISI',
      slug: 'chromadb-recherche-semantique-isi',
      stack: ['Python', 'ChromaDB', 'TF-IDF', 'LSA', 'scikit-learn'],
      status: 'Terminé · Projet académique M1',
      statusTone: 'done',
      description: 'Pipeline de recherche sémantique en 4 services indépendants sur le corpus ISI Keur Massar.',
      features: [
        'Extraction PDF · Chunking par fenêtre glissante',
        'Embedding local TF-IDF + LSA',
        'Indexation ChromaDB persistante',
        'Recherche sémantique avec scores cosinus',
      ],
      links: [{ label: 'GitHub', url: '#' }],
      coverAlt: 'IA, données, vecteurs, recherche',
    },
    {
      name: 'DevOps Test',
      slug: 'devops-test',
      stack: ['JavaScript'],
      status: 'Exploration',
      statusTone: 'exploration',
      description: 'Initiation aux pratiques DevOps — pipelines et automatisation.',
      features: [],
      links: [{ label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/devops-test' }],
      coverAlt: 'Serveurs, infrastructure, CI/CD',
    },
  ];
}
