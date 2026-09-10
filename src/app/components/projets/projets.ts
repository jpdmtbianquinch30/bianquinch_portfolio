import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  image: string;
  badge: string;
  badgeType: 'dev' | 'done' | 'live' | 'exploration';
  desc: string;
  tags: string[];
  features?: string[];
  links?: ProjectLink[];
}

@Component({
  selector: 'app-projets',
  imports: [CommonModule],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {

  projects: Project[] = [
    {
      title: 'QUINCH',
      image: '/images/projects/quinch.png',
      badge: 'En développement',
      badgeType: 'dev',
      desc: 'Application mobile e-commerce pour le marché sénégalais.',
      tags: ['Laravel', 'Angular', 'PostgreSQL', 'Docker'],
      features: [
        'Paiement Wave / Orange Money',
        'Messagerie in-app · Notifications push',
        'Dashboard admin',
      ],
      links: [{ label: 'GitHub (test disponible)', url: 'https://github.com/jpdmtbianquinch30/QUINCH' }],
    },
    {
      title: 'QuizProjet',
      image: '/images/projects/quizprojet.png',
      badge: 'Terminé · Projet de groupe (4 personnes) · Méthode SCRUM',
      badgeType: 'done',
      desc: 'Plateforme de quiz interactive avec génération de questions par IA.',
      tags: ['Spring Boot', 'Java 17', 'Angular 20', 'PostgreSQL', 'Docker'],
      features: [
        '3 rôles : Admin · Évaluateur · Apprenant',
        'Génération de questions par IA (Groq / Llama 3.3)',
        'Compte à rebours · Feedback visuel en temps réel',
        'Classement des scores · Groupes d\'apprenants',
        'Sécurité JWT',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/QuizProjet' },
        { label: 'Vidéo démo', url: '/videos/EASYQUIZZ.mp4' },
      ],
    },
    {
      title: 'PARLE-MOI',
      image: '/images/projects/parlemoi.png',
      badge: 'Terminé · Projet client',
      badgeType: 'done',
      desc: 'Site web développé pour une cliente — plateforme d\'écoute et de réservation.',
      tags: ['Spring Boot', 'Angular', 'PostgreSQL', 'Docker'],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/PARLEMOI' },
        { label: 'Site live (indisponible)', url: '#' },
      ],
    },
    {
      title: 'Hotel',
      image: '/images/projects/galsenhotel.png',
      badge: 'Terminé',
      badgeType: 'done',
      desc: 'Plateforme web de réservation de chambres d\'hôtel.',
      tags: ['Laravel', 'Angular', 'PostgreSQL', 'Docker'],
      features: [
        'Gestion des disponibilités · Réservation en ligne',
        'Interface admin complète',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/Hotel' }],
    },
    {
      title: 'FXLIP',
      image: '/images/projects/fxlip.png',
      badge: 'Live',
      badgeType: 'live',
      desc: 'Marque de création digitale — site web professionnel déployé.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Développement web · Montage vidéo · Design graphique',
        '14 000+ abonnés TikTok · 126 000+ likes',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/fxlip' },
        { label: 'TikTok', url: 'https://www.tiktok.com/@fxlip_3003' },
        { label: 'Site', url: 'https://jpdmtbianquinch30.github.io/fxlip/' },
      ],
    },
    {
      title: 'Application Cashflow',
      image: '/images/projects/cashflow.png',
      badge: 'Terminé',
      badgeType: 'done',
      desc: 'Outil de calcul et analyse de flux de trésorerie.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      features: [
        'Prévisions financières · Bilans',
        'Tableaux de flux · Visualisation des données',
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/CashFlowCalcul' },
        { label: 'Test', url: 'test/Simulateur_CashFlow_AVICOLA.html' },
      ],

    },
    {
      title: 'PassyBeauty',
      image: '/images/projects/passybeauty.png',
      badge: 'Terminé',
      badgeType: 'done',
      desc: 'Site e-commerce local — catalogue produits et gestion des commandes.',
      tags: ['PHP', 'MySQL'],
      links: [
        { label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/passyBeauty' },
        { label: 'Site non disponible pour le moment', url: 'images/projects/passybeauty.png' },
        { label: 'Video Demo', url: 'videos/VidPassyshop.mp4' },
      ],
    },
    {
      title: 'ChromaDB — Recherche Sémantique ISI',
      image: '/images/projects/chromadb.png',
      badge: 'Terminé · Projet académique M1',
      badgeType: 'done',
      desc: 'Pipeline de recherche sémantique en 4 services indépendants sur le corpus ISI Keur Massar.',
      tags: ['Python', 'ChromaDB', 'TF-IDF', 'LSA', 'scikit-learn'],
      features: [
        'Extraction PDF · Chunking par fenêtre glissante',
        'Embedding local TF-IDF + LSA',
        'Indexation ChromaDB persistante',
        'Recherche sémantique avec scores cosinus',
      ],
      links: [{ label: 'GitHub', url: 'https://github.com/jpdmtbianquinch30/isi_chromadb_project' }],
    },
  ];
}
