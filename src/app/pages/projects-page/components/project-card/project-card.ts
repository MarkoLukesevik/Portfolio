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
  private startX = 0;
  private currentX = 0;
  private isDragging = false;

  nextImage() {
    if (!this.project?.images?.length) return;
    this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
  }

  prevImage() {
    if (!this.project?.images?.length) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
  }

  onTouchStart(event: TouchEvent) {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    this.currentX = event.touches[0].clientX;
  }

  onTouchEnd() {
    if (!this.isDragging) return;

    const diff = this.startX - this.currentX;

    // sensitivity threshold (important!)
    const threshold = 50;

    if (diff > threshold) {
      this.nextImage(); // swipe left
    } else if (diff < -threshold) {
      this.prevImage(); // swipe right
    }

    this.isDragging = false;
  }
}
