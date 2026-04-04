import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  private router: Router = inject(Router);

  async handleLinkClick(route: string): Promise<void> {
    await this.router.navigateByUrl(route);
  }
}
