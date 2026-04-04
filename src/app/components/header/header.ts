import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private router: Router = inject(Router);

  isMobileNavigationActive: boolean = false;

  async handleLinkClick(route: string): Promise<void> {
    await this.router.navigateByUrl(route);
    this.isMobileNavigationActive = false;
  }

  isRouteActive(route: string): boolean {
    return this.router.url.includes(route);
  }

  toggleMobileNavigation(): void {
    this.isMobileNavigationActive = !this.isMobileNavigationActive;
  }
}
