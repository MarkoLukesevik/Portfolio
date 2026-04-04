import { Component, Input } from '@angular/core';

export interface Project {
  id: string;
  name: string;
  description: string;
  images: string[];
  skills: string[];
  liveDemoLink: string;
  githubLink?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}
@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
})
export class ProjectCard {
  @Input({ required: true }) project!: Project;

  currentImageIndex = 0;

  nextImage() {
    if (!this.project?.images?.length) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }

  prevImage() {
    if (!this.project?.images?.length) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
  }
}
