import { Component } from '@angular/core';
import { Project, ProjectCard } from './components/project-card/project-card';

@Component({
  selector: 'app-projects-page',
  imports: [ProjectCard],
  templateUrl: './projects-page.html',
  styleUrl: './projects-page.scss',
})
export class ProjectsPage {
  projects: Project[] = [
    {
      id: 'procenta',
      name: 'Procenta',
      description: `
        <p>
        A full-stack web and mobile application designed for the HoReCa industry, focused on connecting cafés, restaurants, and bars into a unified digital network.
        Procenta enables hospitality employees to receive exclusive discounts and benefits across participating venues, creating a stronger, more connected community.
        </p>

        <p>
        The idea behind Procenta is simple — every employee in the HoReCa sector deserves to feel valued.
        The platform transforms everyday workplaces into a network of mutual support, where businesses and employees benefit from shared value, recognition, and collaboration.
        </p>

        <p>
        Through QR code-based validation, users can seamlessly redeem discounts, while businesses gain access to a powerful system for tracking usage, and engaging with the community.
        </p>

        <p>
        This project includes both a responsive web application and fully functional mobile apps for iOS and Android, built using modern technologies and designed for real-world scalability and usability.
        </p>

        <ul>
          <li>Digital network connecting cafés, restaurants, and bars</li>
          <li>Exclusive employee discounts and benefits</li>
          <li>QR code scanning for instant discount validation</li>
          <li>History and statistics of redeemed discounts</li>
          <li>Admin panel for business and offer management</li>
          <li>User profiles with role-based access</li>
          <li>Secure authentication and authorization</li>
          <li>Cross-platform mobile apps (iOS & Android)</li>
        </ul>
        `,
      images: [
        'assets/images/procenta/procenta1.png',
        'assets/images/procenta/procenta2.png',
        'assets/images/procenta/procenta3.png',
      ],
      skills: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'HTML', 'Capacitor', 'Ionic'],
      liveDemoLink: 'https://procenta.mk/home',
      appStoreLink: 'https://apps.apple.com/us/app/procenta/id6760362707',
      playStoreLink: 'https://play.google.com/store/apps/details?id=com.procenta.app&hl=en',
    },
    {
      id: 'kanban',
      name: 'Kanban Task Management App',
      description: `
        <p>
        A full-stack Kanban board application.
        Originally based on a Frontend Mentor challenge, this project was expanded with a custom backend to support real data persistence.
        </p>

        <p>
        While the original challenge focused purely on frontend UI, I extended it into a complete full-stack solution by:
        </p>

        <ul>
          <li>Building a .NET Web API backend</li>
          <li>Designing a relational database</li>
          <li>Implementing full CRUD functionality</li>
          <li>Persisting data instead of using static JSON</li>
        </ul>

        <p>
        The result is a fully functional Kanban task management system with real backend integration.
        </p>

        <p>
        The original design was provided by Frontend Mentor, with the goal of recreating a clean, responsive Kanban board UI as accurately as possible.
        </p>
      `,
      images: [
        'assets/images/kanban/kanban1.png',
        'assets/images/kanban/kanban2.png',
        'assets/images/kanban/kanban3.png',
        'assets/images/kanban/kanban4.png',
        'assets/images/kanban/kanban5.png',
        'assets/images/kanban/kanban6.png',
        'assets/images/kanban/kanban7.png',
        'assets/images/kanban/kanban8.png',
        'assets/images/kanban/kanban9.png',
        'assets/images/kanban/kanban10.png',
      ],
      skills: [
        'Angular',
        'TypeScript',
        'Angular CDK (Drag & Drop)',
        'RxJS',
        'JavaScript',
        'SCSS',
        'HTML',
        '.NET',
        'SQL',
        'Entity Frameworok',
      ],
      githubLink: 'https://github.com/MarkoLukesevik/Kanban',
      liveDemoLink: 'https://kanban-ashen-six.vercel.app/',
    },
    {
      id: 'cigarAndArt',
      name: 'Cigar & Art Fusion',
      description: `
        <p>
        A modern website built for <strong>Cigar & Art Fusion</strong> — a brand where cigar culture meets artistic expression.
        The platform showcases unique handcrafted artwork created from premium cigar bands, blending tradition, craftsmanship, and creativity into one distinctive experience.
        </p>

        <p>
        The project focuses on presenting the brand’s story, vision, and growing global presence.
        Founded by Stefan Lazikj, the idea was inspired by the natural connection between the refined ritual of cigar smoking and the expressive power of art, merging these two worlds into one-of-a-kind artistic pieces.
        </p>

        <p>
        The website highlights previous custom creations, including collaborations with well-known figures and brands in the cigar industry, while providing users with an intuitive way to explore the collection.
        </p>

        <p>
        In addition to showcasing artwork, the platform enables users to request custom-made pieces — from cigar band art to custom sneakers — through direct contact options such as a contact form and WhatsApp integration.
        </p>
    `,
      images: [
        'assets/images/cigar-and-art/cigar-and-art1.png',
        'assets/images/cigar-and-art/cigar-and-art2.png',
        'assets/images/cigar-and-art/cigar-and-art3.png',
        'assets/images/cigar-and-art/cigar-and-art4.png',
        'assets/images/cigar-and-art/cigar-and-art5.png',
        'assets/images/cigar-and-art/cigar-and-art6.png',
        'assets/images/cigar-and-art/cigar-and-art7.png',
        'assets/images/cigar-and-art/cigar-and-art8.png',
        'assets/images/cigar-and-art/cigar-and-art9.png',
        'assets/images/cigar-and-art/cigar-and-art10.png',
      ],
      skills: ['Angular', 'TypeScript', 'JavaScript', 'SCSS', 'HTML'],
      githubLink: 'https://github.com/MarkoLukesevik/Cigar-Art-Fusion',
      liveDemoLink: 'https://cigar-art-fusion.vercel.app/home',
    },
  ];
}
