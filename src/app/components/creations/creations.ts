import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface GalleryItem {
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-creations',
  imports: [CommonModule, RouterLink],
  templateUrl: './creations.html',
  styleUrl: './creations.css',
})
export class Creations {

  gallery: GalleryItem[] = [
    { src: '/creations/fxlipCreation.png',     alt: 'Affiche FXLIP',                                   category: 'Affiche' },
    { src: '/creations/affichefreelance.png',  alt: 'Affiche Freelance FXLIP',                         category: 'Affiche' },
    { src: '/creations/awade.mp4',             alt: 'Montage vidéo 100 ans Abdoulaye Wade',            category: 'Montage vidéo' },
    { src: '/creations/royalstay.png',         alt: 'Design Figma Royal Stay',                         category: 'Design' },
    { src: '/videos/EASYQUIZZ.mp4',            alt: 'Vidéo demo EASYQUIZZ',                            category: 'Site web' },
    { src: '/creations/styleprofilquinch.png', alt: 'Style profil QUINCH',                             category: 'Site web' },
    { src: '/creations/annoncefxlip.png',      alt: 'Affiche FXLIP',                                   category: 'Affiche' },
    { src: '/creations/scout.mp4',             alt: 'Montage vidéo pour Scout direction Ziguinchor',   category: 'Montage vidéo' },
    { src: '/creations/gestemps.png',          alt: 'Design Figma Gestion Temps',                      category: 'Design' },
    { src: '/videos/VidPassyshop.mp4',         alt: 'Vidéo demo PassyBEAUTY',                          category: 'Site web' },
    { src: '/creations/MAVERICK.mp4',          alt: 'Vidéo tiktok MAVERICK',                           category: 'Montage vidéo' },
    { src: '/creations/modifvidcapcut.png',    alt: 'Montage vidéo via Capcut',                        category: 'Montage vidéo' },
  ];

  selected: GalleryItem | null = null;

  /** Détermine si un item de la galerie est une vidéo (.mp4) plutôt qu'une image */
  isVideo(item: GalleryItem | null): boolean {
    return !!item && item.src.toLowerCase().endsWith('.mp4');
  }

  open(item: GalleryItem): void {
    this.selected = item;
  }

  close(): void {
    this.selected = null;
  }
}
